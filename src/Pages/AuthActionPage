import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase';
import { applyActionCode, verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import { Check, X, Loader } from 'lucide-react';

const AuthActionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');
  const [mode, setMode] = useState('');

  useEffect(() => {
    const handleAction = async (mode, code, continueUrl) => {
      try {
        console.log('Handling action:', { mode, code, continueUrl });
        
        switch (mode) {
          case 'verifyEmail':
            await applyActionCode(auth, code);
            setStatus('success');
            setMessage('Email verified successfully!');
            
            let redirectUrl = '/upgrade?verified=true';
            if (continueUrl) {
              try {
                redirectUrl = decodeURIComponent(continueUrl);
                if (redirectUrl.startsWith('http')) {
                  const url = new URL(redirectUrl);
                  redirectUrl = url.pathname + url.search;
                }
              } catch (e) {
                console.error('Error parsing continueUrl:', e);
              }
            }
            
            setTimeout(() => {
              navigate(redirectUrl);
            }, 2000);
            break;

          case 'resetPassword':
            await verifyPasswordResetCode(auth, code);
            setStatus('success');
            setMessage('Redirecting to password reset...');
            setTimeout(() => {
              navigate(`/reset-password?oobCode=${code}`);
            }, 1500);
            break;

          case 'recoverEmail':
            await applyActionCode(auth, code);
            setStatus('success');
            setMessage('Email recovered successfully!');
            setTimeout(() => navigate('/dashboard'), 2000);
            break;

          default:
            setStatus('error');
            setMessage('Invalid action type.');
        }
      } catch (error) {
        console.error('Auth action error:', error);
        setStatus('error');
        
        if (error.code === 'auth/expired-action-code') {
          setMessage('This link has expired. Please request a new one.');
        } else if (error.code === 'auth/invalid-action-code') {
          setMessage('This link is invalid or has already been used.');
        } else {
          setMessage('Something went wrong. Please try again.');
        }
      }
    };

    const processAction = async () => {
      console.log('Processing action from URL');
      
      try {
        const params = new URLSearchParams(location.search);
        const actionMode = params.get('mode');
        const actionCode = params.get('oobCode');
        const continueUrl = params.get('continueUrl');

        console.log('URL params:', { actionMode, actionCode, continueUrl });

        setMode(actionMode);

        if (!actionCode) {
          console.log('No action code - showing error');
          setStatus('error');
          setMessage('Invalid or expired link.');
          return;
        }

        await handleAction(actionMode, actionCode, continueUrl);
      } catch (error) {
        console.error('Error processing action:', error);
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    };

    processAction();
  }, [location, navigate]);

  console.log('Rendering with status:', status);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center border-4 border-purple-200">
        {status === 'loading' && (
          <>
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Loader className="text-white animate-spin" size={40} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Processing...</h2>
            <p className="text-gray-600 font-semibold">Please wait while we verify your request.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="bg-gradient-to-br from-green-400 to-emerald-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
              <Check className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Success!</h2>
            <p className="text-gray-700 font-semibold text-lg">{message}</p>
          </>
        )}

        {status === 'error' && (
          <>
            <div className="bg-gradient-to-br from-red-400 to-rose-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <X className="text-white" size={40} />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Oops!</h2>
            <p className="text-gray-700 font-semibold text-lg mb-6">{message}</p>
            <button
              onClick={() => navigate('/login')}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-black hover:shadow-xl transition"
            >
              Back to Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthActionPage;