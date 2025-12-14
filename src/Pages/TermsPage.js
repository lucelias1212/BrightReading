import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Home, FileText, Shield, CreditCard, AlertCircle, CheckCircle, Mail, MapPin } from 'lucide-react';

const TermsPage = () => {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(false);

  const sections = [
    {
      id: 1,
      icon: <FileText className="text-purple-600" size={28} />,
      title: "1. Purpose of the Service",
      content: "BrightReading provides parents and caregivers with structured, evidence-informed activities, activities, and games designed to support early literacy, language, and cognitive development for children aged 1–5. BrightReading is not a school, research organization, or accredited educational institution. The Service is an informational tool for parents and caregivers. We make no guarantees of learning outcomes or developmental milestones."
    },
    {
      id: 2,
      icon: <CheckCircle className="text-green-600" size={28} />,
      title: "2. Eligibility",
      content: "You must be 18 years or older to create an account or subscribe. The Service is intended for adults teaching or engaging with children, not for unsupervised child use."
    },
    {
      id: 3,
      icon: <Shield className="text-blue-600" size={28} />,
      title: "3. Account Registration",
      content: "To access the Service, you may need to create an account. By registering, you agree to:",
      list: [
        "Provide accurate and current information",
        "Maintain the confidentiality of your login credentials",
        "Use the Service for lawful, personal, non-commercial purposes"
      ],
      footer: "You are responsible for all activity under your account."
    },
    {
      id: 4,
      icon: <CreditCard className="text-orange-600" size={28} />,
      title: "4. Subscription and Payment",
      subsections: [
        {
          subtitle: "4.1 Free Accounts",
          text: "Free accounts include access to up to 10 activities and 1 game."
        },
        {
          subtitle: "4.2 Paid Subscription",
          text: "Paid users gain access to all available activities, games, and additional learning materials. The subscription price is $10.99 (USD) per month."
        },
        {
          subtitle: "4.3 Billing and Renewal",
          text: "All payments are processed securely through a third-party payment processor (e.g., Stripe, PayPal, or similar). Your subscription renews automatically each month unless canceled before the next billing date."
        },
        {
          subtitle: "4.4 Cancellation and Refunds",
          list: [
            "You may cancel your subscription at any time from your account settings or by contacting support@brightreading.com",
            "Cancellation will stop future billing, but no partial or retroactive refunds are issued for previously charged periods",
            "All payment disputes or refund requests will be handled in accordance with our payment processor's policies and applicable consumer laws"
          ]
        }
      ]
    },
    {
      id: 5,
      icon: <Shield className="text-indigo-600" size={28} />,
      title: "5. Intellectual Property",
      content: "All activity book materials, games, designs, activity structures, and related content within the Service are the intellectual property of BrightReading or its licensors. You are granted a limited, non-exclusive, non-transferable right to use the content for personal, non-commercial purposes only. You may not copy, distribute, modify, or create derivative works without prior written consent."
    },
    {
      id: 6,
      icon: <FileText className="text-teal-600" size={28} />,
      title: "6. User Content",
      content: "If you submit, upload, or enter any materials (such as notes, feedback, or reviews), you retain ownership of that content. By submitting it, you grant BrightReading a limited, non-exclusive, royalty-free license to use, display, and store that content solely for improving and operating the Service."
    },
    {
      id: 7,
      icon: <AlertCircle className="text-yellow-600" size={28} />,
      title: "7. No Educational or Developmental Guarantees",
      content: "The Service is based on recognized educational frameworks and research but is not a replacement for professional educational, medical, or developmental advice. We do not guarantee that any child will achieve specific learning outcomes or milestones."
    },
    {
      id: 8,
      icon: <AlertCircle className="text-red-600" size={28} />,
      title: "8. Disclaimer of Professional Advice",
      content: "All materials are provided for informational purposes only. If you have concerns about your child's learning or development, consult a qualified educator, therapist, or healthcare professional."
    },
    {
      id: 9,
      icon: <Shield className="text-gray-600" size={28} />,
      title: "9. Limitation of Liability",
      content: "To the maximum extent permitted by law:",
      list: [
        "BrightReading shall not be liable for any indirect, incidental, consequential, or special damages arising from your use of the Service",
        "Our total liability shall not exceed the total amount paid by you to BrightReading during the twelve (12) months preceding the claim",
        "You agree to indemnify and hold harmless BrightReading from any claims arising from your misuse of the Service or breach of these Terms"
      ]
    },
    {
      id: 10,
      icon: <FileText className="text-purple-600" size={28} />,
      title: "10. Modifications",
      content: "We may update, change, or discontinue parts of the Service or its pricing at any time. We will notify users of material changes via email or within the Service. Continued use after notification constitutes acceptance of the updated Terms."
    },
    {
      id: 11,
      icon: <AlertCircle className="text-orange-600" size={28} />,
      title: "11. Termination",
      content: "We may suspend or terminate access if you violate these Terms or misuse the Service. You may terminate your account at any time by contacting support."
    },
    {
      id: 12,
      icon: <Shield className="text-blue-600" size={28} />,
      title: "12. Governing Law",
      content: "These Terms are governed by the laws of the State of Illinois, excluding its conflict-of-law principles. Any dispute shall be resolved through binding arbitration or small claims court in Illinois, unless otherwise required by law."
    }
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

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-6">
            <FileText className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600 mb-2">
            Effective Date: January 1, 2025
          </p>
          <p className="text-sm text-gray-500">
            Last Updated: January 1, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white/70 backdrop-blur rounded-3xl shadow-lg p-8 mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to BrightReading ("BrightReading," "we," "us," or "our"). These Terms of Service ("Terms") govern your access to and use of our website, mobile application (when available), and related services (collectively, the "Service").
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold">
              By creating an account, subscribing, or using the Service, you agree to these Terms. If you do not agree, do not use the Service.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-6 mb-12">
          {sections.map((section) => (
            <div key={section.id} className="bg-white/70 backdrop-blur rounded-2xl shadow-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gray-50 p-3 rounded-xl flex-shrink-0">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
                  
                  {section.content && (
                    <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                  )}
                  
                  {section.list && (
                    <ul className="space-y-2 mb-4">
                      {section.list.map((item, idx) => (
                        <li key={idx} className="flex gap-3 items-start">
                          <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.footer && (
                    <p className="text-gray-700 font-semibold">{section.footer}</p>
                  )}
                  
                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((sub, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4">
                          <h3 className="font-bold text-gray-900 mb-2">{sub.subtitle}</h3>
                          {sub.text && <p className="text-gray-700 mb-2">{sub.text}</p>}
                          {sub.list && (
                            <ul className="space-y-2">
                              {sub.list.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex gap-3 items-start">
                                  <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                                  <span className="text-gray-700 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl shadow-xl p-8 text-white mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">13. Contact Information</h2>
            <p className="text-lg opacity-90">
              For questions, support, or billing issues, please contact us:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <Mail className="mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Email Support</h3>
              <a 
                href="mailto:support@brightreading.com" 
                className="text-white hover:text-gray-200 transition underline"
              >
                support@brightreading.com
              </a>
            </div>
            
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <MapPin className="mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-sm opacity-90">
                Champaign, Illinois, USA
              </p>
            </div>
          </div>
        </div>

        {/* Acceptance Notice */}
        <div className="bg-yellow-50 border-2 border-yellow-300 rounded-2xl p-6 text-center">
          <AlertCircle className="mx-auto mb-3 text-yellow-600" size={32} />
          <p className="text-gray-800 font-semibold mb-2">
            By using BrightReading, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
          </p>
          <p className="text-gray-600 text-sm">
            If you have any questions about these Terms, please contact us before using the Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;