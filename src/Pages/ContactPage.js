import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Home, Mail, User, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';

const ContactPage = () => {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Paste your Google Apps Script Web App URL here (from Deploy step)
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz3cmWEd_55Ol_3gct_z4QvvcdNM94yVb8hPMiME1EA4U1DU9ViyLV3TU70V9Dv_Mfp9g/exec';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all required fields.' });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'General Inquiry',
          message: formData.message,
          timestamp: new Date().toISOString()
        })
      });

      // Note: no-cors mode doesn't allow reading response, but submission still works
      setStatus({ 
        type: 'success', 
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!' 
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus({ 
        type: 'error', 
        message: 'Oops! Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    { value: '', label: 'Select a subject...' },
    { value: 'General Inquiry', label: 'General Inquiry' },
    { value: 'Technical Support', label: 'Technical Support' },
    { value: 'Billing Question', label: 'Billing Question' },
    { value: 'Feature Request', label: 'Feature Request' },
    { value: 'Bug Report', label: 'Bug Report' },
    { value: 'Partnership', label: 'Partnership Opportunity' },
    { value: 'Other', label: 'Other' }
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-pink-50 transition-opacity duration-300 ${isPageLoading ? 'opacity-0' : 'opacity-100'}`}>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm p-4 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/assets/brlogo2.png" alt="BrightReading Logo" className="h-10 w-auto object-contain" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              BrightReading
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                setIsPageLoading(true);
                setTimeout(() => {
                  navigate('/dashboard');
                  window.scrollTo(0, 0);
                }, 300);
              }}
              className="text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-lg transition font-medium"
            >
              Dashboard
            </button>
            <button 
              onClick={() => {
                setIsPageLoading(true);
                setTimeout(() => {
                  navigate('/');
                  window.scrollTo(0, 0);
                }, 300);
              }}
              className="text-purple-600 hover:bg-purple-50 p-2 rounded-lg transition"
            >
              <Home size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
            <Mail className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question or feedback? We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-1 gap-6 mb-12">
          <div className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <MessageCircle className="mx-auto mb-4 text-blue-600" size={32} />
            <h3 className="font-bold text-gray-900 mb-2 text-lg">Quick Links</h3>
            <div className="space-y-2">
              <button 
                onClick={() => navigate('/faq')}
                className="text-blue-600 hover:text-blue-700 transition block mx-auto font-semibold"
              >
                View FAQs
              </button>
              <button 
                onClick={() => navigate('/parent-guide')}
                className="text-blue-600 hover:text-blue-700 transition block mx-auto font-semibold"
              >
                Parent Guide
              </button>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/70 backdrop-blur rounded-3xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Send Us a Message</h2>
          
          {/* Status Messages */}
          {status.message && (
            <div className={`mb-6 p-4 rounded-xl border-2 flex items-start gap-3 ${
              status.type === 'success' 
                ? 'bg-green-50 border-green-300' 
                : 'bg-red-50 border-red-300'
            }`}>
              {status.type === 'success' ? (
                <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
              ) : (
                <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
              )}
              <p className={`${
                status.type === 'success' ? 'text-green-800' : 'text-red-800'
              } font-semibold`}>
                {status.message}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                Your Name *
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                Your Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us what's on your mind..."
                rows="6"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold text-lg transition shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={20} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 text-center">
          <p className="text-gray-700 font-semibold">
            💡 Looking for immediate answers? Check out our <button onClick={() => navigate('/faq')} className="text-blue-600 hover:text-blue-700 underline font-bold">FAQ page</button> for common questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;