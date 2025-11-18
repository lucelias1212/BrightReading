import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider, useUser } from './UserContext';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import DashboardPage from './Pages/DashboardPage';
import CurriculumPage from './Pages/CurriculumPage';
import LoginPage from './Pages/LoginPage';
import LessonPage from './Pages/LessonPage';
import ProfilePage from './Pages/ProfilePage';
import ResearchPage from './Pages/ResearchPage';
import ParentGuidePage from './Pages/ParentGuidePage';
import FAQPage from './Pages/FAQPage';
import GamePage from './Pages/GamePage';
import TermsPage from './Pages/TermsPage';
import PrivacyPage from './Pages/PrivacyPage';
import ContactPage from './Pages/ContactPage';
import UpgradePage from './Pages/UpgradePage';
import PaymentSuccess from './Pages/PaymentSuccess';
import PaymentCancelled from './Pages/PaymentCancelled';
import AuthActionPage from './Pages/AuthActionPage';
import './App.css';

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useUser();
  
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50">
        <div className="text-center">
          <div className="text-4xl mb-4">📚</div>
          <div className="text-xl text-gray-700">Loading...</div>
        </div>
      </div>
    );
  }
  
  return user ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/__/auth/action" element={<AuthActionPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/parent-guide" element={<ParentGuidePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Free Lesson - Public Access */}
          <Route path="/lesson/1" element={<LessonPage />} />
          
          {/* Upgrade Page - Protected */}
          <Route 
            path="/upgrade" 
            element={
              <ProtectedRoute>
                <UpgradePage />
              </ProtectedRoute>
            } 
          />
          
          {/* Payment Routes - Protected */}
          <Route 
            path="/payment-success" 
            element={
              <ProtectedRoute>
                <PaymentSuccess />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/payment-cancelled" 
            element={
              <ProtectedRoute>
                <PaymentCancelled />
              </ProtectedRoute>
            } 
          />
          
          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/curriculum" 
            element={
              <ProtectedRoute>
                <CurriculumPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/lesson/:lessonId" 
            element={
              <ProtectedRoute>
                <LessonPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/games" 
            element={
              <ProtectedRoute>
                <GamePage />
              </ProtectedRoute>
            } 
          />
          
          {/* Catch-all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;