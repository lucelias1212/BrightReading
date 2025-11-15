//src/UserContext.js
import React, { createContext, useState, useEffect, useContext, useCallback, useRef } from 'react';
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove, collection, query, where, getDocs, deleteDoc, onSnapshot, addDoc, orderBy } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

const UserContext = createContext();

export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  
  const isLoadingUserData = useRef(false);
  const hasLoadedOnce = useRef(false);
  const unsubscribeFromUserDoc = useRef(null);

  // Real-time listener for user data
  useEffect(() => {
    let mounted = true;
    let unsubscribeAuth;

    const setupAuth = () => {
      unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
        if (!mounted) return;
        
        if (firebaseUser) {
          if (isLoadingUserData.current) return;
          
          isLoadingUserData.current = true;
          setUser(firebaseUser);
          
          // Default data structure
const defaultData = {
  email: firebaseUser.email,
  username: '',
  subscription: 'free',
  subscriptionStatus: null,
  subscriptionStartDate: null,
  subscriptionEndDate: null,
  stripeCustomerId: null,
  stripeSubscriptionId: null,
  planType: null,
  lastPaymentDate: null,
            
            currentPhase: 1,
            phaseProgress: {
              1: { completedLessons: [], lessonCompletionDates: {} },
              2: { completedLessons: [], lessonCompletionDates: {} },
              3: { completedLessons: [], lessonCompletionDates: {} },
              4: { completedLessons: [], lessonCompletionDates: {} }
            },
            
            completedLessons: [],
            lessonCompletionDates: {},
            
            selectedAge: null,
            parentName: '',
            childName: '',
            childBirthday: '',
            lastVisit: Date.now(),
            currentStreak: 0,
            lastLessonDate: null,
            
            // Community features
            friends: [],
            friendRequests: [],
            sentFriendRequests: [],
            blockedUsers: [],
            circles: [],
            circleInvites: [],
            messages: []
          };
          
          if (mounted && !hasLoadedOnce.current) {
            setUserData(defaultData);
            hasLoadedOnce.current = true;
          }

          // Set up real-time listener for this user's document
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          
          if (unsubscribeFromUserDoc.current) {
            unsubscribeFromUserDoc.current();
          }

          unsubscribeFromUserDoc.current = onSnapshot(
            userDocRef,
            (docSnapshot) => {
              if (!mounted) return;

              if (docSnapshot.exists()) {
                const firestoreData = docSnapshot.data();
                
                // Migrate old data to phase structure if needed
                if (!firestoreData.phaseProgress && firestoreData.completedLessons) {
                  const currentPhase = firestoreData.currentPhase || 1;
                  const migratedPhaseProgress = {
                    1: { completedLessons: [], lessonCompletionDates: {} },
                    2: { completedLessons: [], lessonCompletionDates: {} },
                    3: { completedLessons: [], lessonCompletionDates: {} },
                    4: { completedLessons: [], lessonCompletionDates: {} }
                  };
                  migratedPhaseProgress[currentPhase] = {
                    completedLessons: firestoreData.completedLessons || [],
                    lessonCompletionDates: firestoreData.lessonCompletionDates || {}
                  };
                  firestoreData.phaseProgress = migratedPhaseProgress;
                }
                
                // Calculate streak
                const today = new Date().setHours(0, 0, 0, 0);
                const lastLesson = firestoreData.lastLessonDate 
                  ? new Date(firestoreData.lastLessonDate).setHours(0, 0, 0, 0) 
                  : null;
                const daysSinceLastLesson = lastLesson 
                  ? Math.floor((today - lastLesson) / (1000 * 60 * 60 * 24)) 
                  : null;
                
                let currentStreak = firestoreData.currentStreak || 0;
                if (daysSinceLastLesson !== null && daysSinceLastLesson > 1) {
                  currentStreak = 0;
                }
                
                setUserData({
                  ...defaultData,
                  ...firestoreData,
                  currentStreak,
                  friendRequests: firestoreData.friendRequests || [],
                  friends: firestoreData.friends || [],
                  sentFriendRequests: firestoreData.sentFriendRequests || [],
                  blockedUsers: firestoreData.blockedUsers || [],
                  circles: firestoreData.circles || [],
                  circleInvites: firestoreData.circleInvites || [],
                });
              } else {
                // Document doesn't exist - this shouldn't happen for signed up users
                console.warn('User document not found for authenticated user');
                setUserData(defaultData);
              }

              isLoadingUserData.current = false;
              if (mounted) setLoading(false);
            },
            (error) => {
              console.error('Error listening to user doc:', error);
              isLoadingUserData.current = false;
              if (mounted) setLoading(false);
            }
          );
          
        } else {
          if (mounted) {
            setUser(null);
            setUserData(null);
            setLoading(false);
            hasLoadedOnce.current = false;
            isLoadingUserData.current = false;
          }
          
          if (unsubscribeFromUserDoc.current) {
            unsubscribeFromUserDoc.current();
            unsubscribeFromUserDoc.current = null;
          }
        }
      });
    };

    setupAuth();

    return () => {
      mounted = false;
      if (unsubscribeAuth) unsubscribeAuth();
      if (unsubscribeFromUserDoc.current) {
        unsubscribeFromUserDoc.current();
        unsubscribeFromUserDoc.current = null;
      }
    };
  }, []);

  const signup = useCallback(async (email, password, username) => {
    try {
      // Create auth account FIRST (no permissions needed for this)
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = userCredential.user;

      const defaultUserData = {
  email: newUser.email,
  username: username.toLowerCase(),
  subscription: 'free',
  subscriptionStatus: null,
  subscriptionStartDate: null,
  subscriptionEndDate: null,
  stripeCustomerId: null,
  stripeSubscriptionId: null,
  planType: null,
  lastPaymentDate: null,
  createdAt: new Date().toISOString(),
        currentPhase: 1,
        phaseProgress: {
          1: { completedLessons: [], lessonCompletionDates: {} },
          2: { completedLessons: [], lessonCompletionDates: {} },
          3: { completedLessons: [], lessonCompletionDates: {} },
          4: { completedLessons: [], lessonCompletionDates: {} }
        },
        completedLessons: [],
        selectedAge: null,
        parentName: '',
        childName: '',
        childBirthday: '',
        lastVisit: Date.now(),
        currentStreak: 0,
        lastLessonDate: null,
        friends: [],
        friendRequests: [],
        sentFriendRequests: [],
        blockedUsers: [],
        circles: [],
        circleInvites: [],
        messages: []
      };
      
      // Now check username uniqueness (user is authenticated so they can read)
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', username.toLowerCase()));
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        // Username taken - delete the auth account we just created
        await newUser.delete();
        return { success: false, error: 'Username already taken' };
      }

      // Write to Firestore IMMEDIATELY
      await setDoc(doc(db, 'users', newUser.uid), defaultUserData);
      
      setUserData(defaultUserData);
      hasLoadedOnce.current = true;

      return { success: true };
    } catch (error) {
      console.error('Signup error details:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      let errorMessage = 'Signup failed. Please try again.';
      if (error.code === 'auth/email-already-in-use') errorMessage = 'Account exists.';
      if (error.code === 'permission-denied') errorMessage = 'Permission denied: ' + error.message;
      return { success: false, error: errorMessage };
    }
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (error) {
      return { success: false, error: 'Invalid credentials.' };
    }
  }, []);

  const logout = useCallback(async () => {
    hasLoadedOnce.current = false;
    await signOut(auth);
    return { success: true };
  }, []);

  const switchPhase = useCallback(async (phaseNumber) => {
    if (!user || phaseNumber < 1 || phaseNumber > 4) return { success: false };

    setTimeout(() => {
      setDoc(doc(db, 'users', user.uid), { currentPhase: phaseNumber }, { merge: true }).catch(() => {});
    }, 500);
    
    return { success: true };
  }, [user]);

  const completeLesson = useCallback(async (lessonId) => {
    if (!user || !userData) return { success: false };

    const phase = userData.currentPhase || 1;
    const phaseData = userData.phaseProgress?.[phase] || { completedLessons: [], lessonCompletionDates: {} };
    
    if (phaseData.completedLessons.includes(lessonId)) {
      return { success: true, alreadyCompleted: true };
    }
    
    const today = new Date().setHours(0, 0, 0, 0);
    const lastLesson = userData.lastLessonDate 
      ? new Date(userData.lastLessonDate).setHours(0, 0, 0, 0) 
      : null;
    const daysSince = lastLesson ? Math.floor((today - lastLesson) / (1000 * 60 * 60 * 24)) : null;
    
    let newStreak = userData.currentStreak || 0;
    if (daysSince === null || daysSince === 0) {
      newStreak = newStreak === 0 ? 1 : newStreak;
    } else if (daysSince === 1) {
      newStreak += 1;
    } else {
      newStreak = 1;
    }
    
    const updatedPhaseProgress = {
      ...userData.phaseProgress,
      [phase]: {
        completedLessons: [...phaseData.completedLessons, lessonId],
        lessonCompletionDates: {
          ...phaseData.lessonCompletionDates,
          [lessonId]: new Date().toISOString()
        }
      }
    };
    
    setTimeout(() => {
      setDoc(doc(db, 'users', user.uid), { 
        phaseProgress: updatedPhaseProgress,
        currentStreak: newStreak,
        lastLessonDate: new Date().toISOString()
      }, { merge: true }).catch(() => {});
    }, 500);
    
    return { success: true, alreadyCompleted: false };
  }, [user, userData]);

  // FRIEND REQUEST SYSTEM
  const sendFriendRequest = useCallback(async (friendUsername) => {
    if (!user || !userData || !friendUsername || friendUsername.toLowerCase() === userData.username?.toLowerCase()) {
      return { success: false, error: 'Cannot add yourself' };
    }

    try {
      if (userData.blockedUsers?.includes(friendUsername.toLowerCase())) {
        return { success: false, error: 'You have blocked this user' };
      }

      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', friendUsername.toLowerCase()));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return { success: false, error: 'User not found' };
      }
      
      const friendDoc = querySnapshot.docs[0];
      const friendId = friendDoc.id;
      const friendData = friendDoc.data();

      if (friendData.friends?.some(f => f.uid === user.uid)) {
        return { success: false, error: 'Already friends' };
      }
      
      if (friendData.friendRequests?.some(r => r.from === user.uid)) {
        return { success: false, error: 'Request already sent' };
      }

      if (friendData.blockedUsers?.includes(userData.username?.toLowerCase())) {
        return { success: false, error: 'This user is not accepting requests from you' };
      }
      
      await updateDoc(doc(db, 'users', friendId), {
        friendRequests: arrayUnion({
          from: user.uid,
          username: userData.username,
          email: user.email,
          name: userData.parentName || userData.username,
          childName: userData.childName || null,
          sentAt: new Date().toISOString()
        })
      });
      
      await updateDoc(doc(db, 'users', user.uid), {
        sentFriendRequests: arrayUnion({
          to: friendId,
          username: friendUsername.toLowerCase(),
          sentAt: new Date().toISOString()
        })
      });
      
      return { success: true };
    } catch (error) {
      console.error('Friend request error:', error);
      return { success: false, error: 'Failed to send request' };
    }
  }, [user, userData]);

  const acceptFriendRequest = useCallback(async (requesterId) => {
    if (!user || !userData) return { success: false };

    try {
      const requesterDoc = await getDoc(doc(db, 'users', requesterId));
      if (!requesterDoc.exists()) return { success: false, error: 'User not found' };
      
      const requesterData = requesterDoc.data();
      const requestToRemove = userData.friendRequests.find(r => r.from === requesterId);
      const sentRequestToRemove = requesterData.sentFriendRequests?.find(r => r.to === user.uid);
      
      const addRequesterFriend = {
        uid: requesterId,
        username: requesterData.username || '',
        email: requesterData.email || '',
        name: requesterData.parentName || requesterData.username || '',
        addedAt: new Date().toISOString()
      };
      if (requesterData.childName) addRequesterFriend.childName = requesterData.childName;
      
      const addCurrentUserFriend = {
        uid: user.uid,
        username: userData.username || '',
        email: userData.email || '',
        name: userData.parentName || userData.username || '',
        addedAt: new Date().toISOString()
      };
      if (userData.childName) addCurrentUserFriend.childName = userData.childName;
      
      await updateDoc(doc(db, 'users', user.uid), {
        friends: arrayUnion(addRequesterFriend),
        friendRequests: arrayRemove(requestToRemove)
      });
      
      if (sentRequestToRemove) {
        await updateDoc(doc(db, 'users', requesterId), {
          friends: arrayUnion(addCurrentUserFriend),
          sentFriendRequests: arrayRemove(sentRequestToRemove)
        });
      }
      
      return { success: true };
    } catch (error) {
      console.error('Accept friend request error:', error);
      return { success: false, error: 'Failed to accept request' };
    }
  }, [user, userData]);

  const rejectFriendRequest = useCallback(async (requesterId) => {
    if (!user || !userData) return { success: false };

    try {
      const requesterDoc = await getDoc(doc(db, 'users', requesterId));
      if (!requesterDoc.exists()) return { success: false };

      const requestToRemove = userData.friendRequests.find(r => r.from === requesterId);
      const sentRequestToRemove = requesterDoc.data().sentFriendRequests?.find(r => r.to === user.uid);
      
      await updateDoc(doc(db, 'users', user.uid), {
        friendRequests: arrayRemove(requestToRemove)
      });

      if (sentRequestToRemove) {
        await updateDoc(doc(db, 'users', requesterId), {
          sentFriendRequests: arrayRemove(sentRequestToRemove)
        });
      }
      
      return { success: true };
    } catch (error) {
      console.error('Reject friend request error:', error);
      return { success: false };
    }
  }, [user, userData]);

  const removeFriend = useCallback(async (friendId) => {
    if (!user || !userData) return { success: false };

    try {
      const friendDoc = await getDoc(doc(db, 'users', friendId));
      if (!friendDoc.exists()) return { success: false };

      const friendToRemove = userData.friends.find(f => f.uid === friendId);
      const friendsFromOtherSide = friendDoc.data().friends?.find(f => f.uid === user.uid);

      await updateDoc(doc(db, 'users', user.uid), {
        friends: arrayRemove(friendToRemove)
      });

      if (friendsFromOtherSide) {
        await updateDoc(doc(db, 'users', friendId), {
          friends: arrayRemove(friendsFromOtherSide)
        });
      }

      return { success: true };
    } catch (error) {
      console.error('Remove friend error:', error);
      return { success: false };
    }
  }, [user, userData]);

  const blockUser = useCallback(async (username) => {
    if (!user || !userData) return { success: false };

    try {
      const blockedUsername = username.toLowerCase();
      
      if (userData.blockedUsers?.includes(blockedUsername)) {
        return { success: false, error: 'User already blocked' };
      }

      const updatedBlockedUsers = [...(userData.blockedUsers || []), blockedUsername];
      
      await updateDoc(doc(db, 'users', user.uid), {
        blockedUsers: updatedBlockedUsers
      });

      return { success: true };
    } catch (error) {
      return { success: false, error: 'Failed to block user' };
    }
  }, [user, userData]);

  const unblockUser = useCallback(async (username) => {
    if (!user || !userData) return { success: false };

    try {
      const blockedUsername = username.toLowerCase();
      const updatedBlockedUsers = userData.blockedUsers.filter(u => u !== blockedUsername);
      
      await updateDoc(doc(db, 'users', user.uid), {
        blockedUsers: updatedBlockedUsers
      });

      return { success: true };
    } catch (error) {
      return { success: false };
    }
  }, [user, userData]);

  const createCircle = useCallback(async (circleName, description = '') => {
    if (!user || !userData || !circleName) return { success: false };

    try {
      const circleId = `circle_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const newCircle = {
        id: circleId,
        name: circleName,
        description,
        createdBy: user.uid,
        createdAt: new Date().toISOString(),
        members: [{
          uid: user.uid,
          email: userData.email,
          username: userData.username,
          name: userData.parentName || userData.username,
          role: 'admin',
          joinedAt: new Date().toISOString()
        }],
        messages: [],
        maxMembers: 10
      };
      
      await setDoc(doc(db, 'circles', circleId), newCircle);
      
      await updateDoc(doc(db, 'users', user.uid), {
        circles: arrayUnion(circleId)
      });
      
      return { success: true, circleId };
    } catch (error) {
      console.error('Create circle error:', error);
      return { success: false, error: 'Failed to create circle' };
    }
  }, [user, userData]);

  const inviteToCircle = useCallback(async (circleId, friendUsername) => {
    if (!user || !userData) return { success: false };

    try {
      const usersRef = collection(db, 'users');
      const q = query(usersRef, where('username', '==', friendUsername.toLowerCase()));
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        return { success: false, error: 'User not found' };
      }

      const invitedUserId = querySnapshot.docs[0].id;
      const circleDoc = await getDoc(doc(db, 'circles', circleId));

      if (!circleDoc.exists()) {
        return { success: false, error: 'Circle not found' };
      }

      const circleData = circleDoc.data();

      if (circleData.members.some(m => m.uid === invitedUserId)) {
        return { success: false, error: 'Already a member' };
      }

      if (circleData.members.length >= circleData.maxMembers) {
        return { success: false, error: 'Circle is full' };
      }

      await updateDoc(doc(db, 'users', invitedUserId), {
        circleInvites: arrayUnion({
          circleId,
          circleName: circleData.name,
          invitedBy: userData.username,
          invitedAt: new Date().toISOString()
        })
      });

      return { success: true };
    } catch (error) {
      console.error('Invite to circle error:', error);
      return { success: false, error: 'Failed to send invite' };
    }
  }, [user, userData]);

  const acceptCircleInvite = useCallback(async (circleId) => {
    if (!user || !userData) return { success: false };

    try {
      const circleDoc = await getDoc(doc(db, 'circles', circleId));
      if (!circleDoc.exists()) return { success: false, error: 'Circle not found' };

      const circleData = circleDoc.data();

      await updateDoc(doc(db, 'circles', circleId), {
        members: arrayUnion({
          uid: user.uid,
          email: userData.email,
          username: userData.username,
          name: userData.parentName || userData.username,
          role: 'member',
          joinedAt: new Date().toISOString()
        })
      });

      const updatedInvites = userData.circleInvites.filter(i => i.circleId !== circleId);

      await updateDoc(doc(db, 'users', user.uid), {
        circles: arrayUnion(circleId),
        circleInvites: updatedInvites
      });

      return { success: true };
    } catch (error) {
      console.error('Accept circle invite error:', error);
      return { success: false };
    }
  }, [user, userData]);

  const leaveCircle = useCallback(async (circleId) => {
    if (!user || !userData) return { success: false };

    try {
      const circleDoc = await getDoc(doc(db, 'circles', circleId));
      if (!circleDoc.exists()) return { success: false };

      const circleData = circleDoc.data();
      const memberToRemove = circleData.members.find(m => m.uid === user.uid);

      if (circleData.members.length === 1 && memberToRemove?.role === 'admin') {
        await deleteDoc(doc(db, 'circles', circleId));
      } else {
        await updateDoc(doc(db, 'circles', circleId), {
          members: arrayRemove(memberToRemove)
        });
      }

      const updatedCircles = userData.circles.filter(c => c !== circleId);
      await updateDoc(doc(db, 'users', user.uid), {
        circles: updatedCircles
      });

      return { success: true };
    } catch (error) {
      console.error('Leave circle error:', error);
      return { success: false };
    }
  }, [user, userData]);

  const updateProfile = useCallback(async (profileData) => {
    if (!user || !userData) return { success: false };
    
    if (profileData.username && profileData.username !== userData.username) {
      try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('username', '==', profileData.username.toLowerCase()));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          return { success: false, error: 'Username already taken' };
        }
      } catch (error) {
        return { success: false, error: 'Failed to validate username' };
      }
    }
    
    setTimeout(() => {
      setDoc(doc(db, 'users', user.uid), profileData, { merge: true }).catch(() => {});
    }, 500);
    
    return { success: true };
  }, [user, userData]);

  // DIRECT MESSAGING - Updated with addDoc
  const sendDirectMessage = useCallback(async (recipientId, messageText) => {
    if (!user || !userData || !messageText.trim()) return { success: false };

    try {
      const conversationId = [user.uid, recipientId].sort().join('_');
      const messagesRef = collection(db, `conversations/${conversationId}/messages`);
      
      await addDoc(messagesRef, {
        senderId: user.uid,
        senderUsername: userData.username,
        text: messageText.trim(),
        sentAt: new Date().toISOString()
      });

      return { success: true };
    } catch (error) {
      console.error('Send message error:', error);
      return { success: false, error: 'Failed to send message' };
    }
  }, [user, userData]);

  // Real-time listener for direct messages
  const subscribeToDirectMessages = useCallback((recipientId, callback) => {
    if (!user) return () => {};

    const conversationId = [user.uid, recipientId].sort().join('_');
    const messagesRef = collection(db, `conversations/${conversationId}/messages`);
    const q = query(messagesRef, orderBy('sentAt', 'asc'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = [];
      snapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });
      callback(messages);
    }, (error) => {
      console.error('Error listening to messages:', error);
      callback([]);
    });

    return unsubscribe;
  }, [user]);

  const getDirectMessages = useCallback(async (recipientId) => {
    if (!user) return [];

    try {
      const conversationId = [user.uid, recipientId].sort().join('_');
      const messagesRef = collection(db, `conversations/${conversationId}/messages`);
      const q = query(messagesRef, orderBy('sentAt', 'asc'));
      const querySnapshot = await getDocs(q);
      
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ id: doc.id, ...doc.data() });
      });

      return messages;
    } catch (error) {
      console.error('Get messages error:', error);
      return [];
    }
  }, [user]);

  // CIRCLE MESSAGING
  const sendCircleMessage = useCallback(async (circleId, messageText, messageType = 'text') => {
    if (!user || !userData || !messageText.trim()) return { success: false };

    try {
      const circleRef = doc(db, 'circles', circleId);
      const circleDoc = await getDoc(circleRef);

      if (!circleDoc.exists()) {
        return { success: false, error: 'Circle not found' };
      }

      const currentMessages = circleDoc.data().messages || [];
      let newMessage;

      if (messageType === 'achievement') {
        const achievementData = JSON.parse(messageText);
        newMessage = {
          type: 'achievement',
          senderId: user.uid,
          username: userData.username,
          achievement: achievementData.achievement,
          childName: achievementData.childName,
          parentName: achievementData.parentName,
          sentAt: new Date().toISOString(),
          reactions: {}
        };
      } else {
        newMessage = {
          type: 'text',
          senderId: user.uid,
          username: userData.username,
          text: messageText.trim(),
          sentAt: new Date().toISOString(),
          reactions: {}
        };
      }

      await updateDoc(circleRef, {
        messages: [...currentMessages, newMessage]
      });

      return { success: true };
    } catch (error) {
      console.error('Send circle message error:', error);
      return { success: false, error: 'Failed to send message' };
    }
  }, [user, userData]);

  const reactToCircleMessage = useCallback(async (circleId, messageIndex, emoji) => {
    if (!user || !userData) return { success: false };

    try {
      const circleRef = doc(db, 'circles', circleId);
      const circleDoc = await getDoc(circleRef);

      if (!circleDoc.exists()) {
        return { success: false, error: 'Circle not found' };
      }

      const circleData = circleDoc.data();
      const messages = [...circleData.messages];
      
      if (!messages[messageIndex]) {
        return { success: false, error: 'Message not found' };
      }

      // Initialize reactions object if it doesn't exist
      if (!messages[messageIndex].reactions) {
        messages[messageIndex].reactions = {};
      }

      // Toggle reaction
      if (!messages[messageIndex].reactions[emoji]) {
        messages[messageIndex].reactions[emoji] = [];
      }

      const userIndex = messages[messageIndex].reactions[emoji].indexOf(user.uid);
      if (userIndex > -1) {
        // Remove reaction
        messages[messageIndex].reactions[emoji].splice(userIndex, 1);
        if (messages[messageIndex].reactions[emoji].length === 0) {
          delete messages[messageIndex].reactions[emoji];
        }
      } else {
        // Add reaction
        messages[messageIndex].reactions[emoji].push(user.uid);
      }

      await updateDoc(circleRef, {
        messages: messages
      });

      return { success: true };
    } catch (error) {
      console.error('React to message error:', error);
      return { success: false, error: 'Failed to add reaction' };
    }
  }, [user, userData]);

  // Real-time listener for circle data and messages
  const subscribeToCircle = useCallback((circleId, callback) => {
    if (!user || !userData) return () => {};

    const circleRef = doc(db, 'circles', circleId);
    
    const unsubscribe = onSnapshot(circleRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const circleData = docSnapshot.data();
        
        // Verify user is a member
        const isMember = circleData.members?.some(m => m.uid === user.uid);
        if (isMember) {
          callback(circleData);
        } else {
          callback(null);
        }
      } else {
        callback(null);
      }
    }, (error) => {
      console.error('Error listening to circle:', error);
      callback(null);
    });

    return unsubscribe;
  }, [user, userData]);

  const getCircleData = useCallback(async (circleId) => {
    if (!user || !userData) return null;

    try {
      const circleRef = doc(db, 'circles', circleId);
      const circleDoc = await getDoc(circleRef);

      if (!circleDoc.exists()) {
        console.error('Circle not found');
        return null;
      }

      const circleData = circleDoc.data();
      
      // Verify user is a member
      const isMember = circleData.members?.some(m => m.uid === user.uid);
      if (!isMember) {
        console.error('User is not a member of this circle');
        return null;
      }

      return circleData;
    } catch (error) {
      console.error('Get circle error:', error);
      return null;
    }
  }, [user, userData]);



  // STRIPE CHECKOUT - Create checkout session and redirect to Stripe
const createCheckoutSession = useCallback(async (planType) => {
  if (!user || !userData) return { success: false, error: 'Not authenticated' };

  try {
    // Determine which price ID to use
    const priceId = planType === 'monthly' 
      ? 'price_1STa8wJz6mdvQ2vpoNfXKIzU'  // Your monthly price
      : 'price_1STaAaJz6mdvQ2vpZf4C3SZ4'; // Your annual price

    // Call Cloud Function to create checkout session
    const createCheckoutUrl = 'https://us-central1-learning-app-6f8ff.cloudfunctions.net/createCheckoutSession';
    
    const response = await fetch(createCheckoutUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.uid,
        email: user.email,
        priceId: priceId,
        planType: planType
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create checkout session');
    }

    const data = await response.json();
    
    // Redirect to Stripe checkout
    if (data.url) {
      window.location.href = data.url;
      return { success: true };
    } else {
      throw new Error('No checkout URL returned');
    }

  } catch (error) {
    console.error('Checkout session error:', error);
    return { success: false, error: error.message };
  }
}, [user, userData]);

// NEW FUNCTION - Create payment intent for embedded checkout
const createPaymentIntent = useCallback(async (planType) => {
  if (!user || !userData) return { success: false, error: 'Not authenticated' };

  try {
    // Determine which price ID to use
    const priceId = planType === 'monthly' 
      ? 'price_1STa8wJz6mdvQ2vpoNfXKIzU'  // Your monthly price
      : 'price_1STaAaJz6mdvQ2vpZf4C3SZ4'; // Your annual price

    // Call Cloud Function to create payment intent
    const createPaymentIntentUrl = 'https://us-central1-learning-app-6f8ff.cloudfunctions.net/createPaymentIntent';
    
    const response = await fetch(createPaymentIntentUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.uid,
        email: user.email,
        priceId: priceId,
        planType: planType
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create payment intent');
    }

    const data = await response.json();
    
    return { 
      success: true, 
      clientSecret: data.clientSecret,
      paymentIntentId: data.paymentIntentId
    };

  } catch (error) {
    console.error('Payment intent error:', error);
    return { success: false, error: error.message };
  }
}, [user, userData]);

// CUSTOMER PORTAL - Open Stripe billing portal
const openCustomerPortal = useCallback(async () => {
  if (!user || !userData) return { success: false, error: 'Not authenticated' };

  try {
    const portalUrl = 'https://us-central1-learning-app-6f8ff.cloudfunctions.net/createCustomerPortal';
    
    const response = await fetch(portalUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: user.uid
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create portal session');
    }

    const data = await response.json();
    
    // Open portal in new window
    if (data.url) {
      window.open(data.url, '_blank');
      return { success: true };
    } else {
      throw new Error('No portal URL returned');
    }

  } catch (error) {
    console.error('Customer portal error:', error);
    return { success: false, error: error.message };
  }
}, [user, userData]);

// CHECK SUBSCRIPTION STATUS (optional - for manual verification)
const checkSubscriptionStatus = useCallback(async () => {
  if (!user || !userData) return { success: false };

  try {
    // The real-time listener already updates subscription status
    // This is just a manual refresh if needed
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      const data = userDoc.data();
      return { 
        success: true, 
        subscription: data.subscription,
        status: data.subscriptionStatus 
      };
    }
    return { success: false };
  } catch (error) {
    console.error('Check subscription error:', error);
    return { success: false, error: error.message };
  }
}, [user, userData]);

  const value = {
    user,
    userData,
    loading,
    signup,
    login,
    logout,
    updateProfile,
    switchPhase,
    completeLesson,
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    removeFriend,
    blockUser,
    unblockUser,
    createCircle,
    inviteToCircle,
    acceptCircleInvite,
    leaveCircle,
    sendDirectMessage,
    getDirectMessages,
    subscribeToDirectMessages,
    sendCircleMessage,
    reactToCircleMessage,
    getCircleData,
    subscribeToCircle,
    createCheckoutSession,
    createPaymentIntent,  
  openCustomerPortal,          
  checkSubscriptionStatus
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}