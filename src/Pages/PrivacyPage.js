import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Home, Shield, Lock, Eye, Database, Users, Globe, Mail, MapPin, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const PrivacyPage = () => {
  const navigate = useNavigate();
  const [isPageLoading, setIsPageLoading] = useState(false);

  const sections = [
    {
      id: 1,
      icon: <Database className="text-blue-600" size={28} />,
      title: "1. Information We Collect",
      intro: "We collect only the information necessary to operate and improve the Service:",
      subsections: [
        {
          subtitle: "1.1 Account Information",
          list: [
            "Username and password",
            "Contact email"
          ]
        },
        {
          subtitle: "1.2 Subscription and Payment Data",
          list: [
            "Subscription plan and status",
            "Transaction or billing identifiers (from our payment processor)"
          ],
          note: "BrightReading does not collect or store payment card numbers. All transactions are processed securely through third-party providers such as Stripe or PayPal."
        },
        {
          subtitle: "1.3 Usage Data",
          list: [
            "Features used, activity progress, and game engagement",
            "Device type, browser, and technical performance information"
          ]
        },
        {
          subtitle: "1.4 Optional Content",
          list: [
            "Notes or reflections added by the parent or caregiver"
          ]
        }
      ],
      important: "We do not collect any personally identifiable information from children."
    },
    {
      id: 2,
      icon: <Eye className="text-purple-600" size={28} />,
      title: "2. How We Use Your Information",
      intro: "We use the collected data to:",
      list: [
        "Create and manage your account and subscription",
        "Deliver and personalize content",
        "Improve functionality and performance",
        "Communicate updates and support",
        "Maintain security and legal compliance"
      ],
      important: "We do not sell or share your information for advertising or marketing."
    },
    {
      id: 3,
      icon: <Users className="text-green-600" size={28} />,
      title: "3. Data Sharing",
      intro: "We may share limited data with:",
      list: [
        "Trusted service providers (e.g., hosting, payment processing, analytics) under strict confidentiality and data protection agreements",
        "Legal authorities if required by law or to protect the rights, safety, or integrity of BrightReading or its users"
      ],
      important: "We will never sell or rent your personal data."
    },
    {
      id: 4,
      icon: <Database className="text-orange-600" size={28} />,
      title: "4. Data Retention",
      content: "We retain user data only while your account is active. When you cancel or request deletion, we delete your personal data within 30 days, except where retention is required by law (e.g., payment records)."
    },
    {
      id: 5,
      icon: <Lock className="text-red-600" size={28} />,
      title: "5. Data Security",
      content: "We use industry-standard encryption (SSL/TLS), secure servers, and limited-access systems to protect your information. While we take strong precautions, no digital system is completely immune to unauthorized access."
    },
    {
      id: 6,
      icon: <Shield className="text-indigo-600" size={28} />,
      title: "6. Children's Privacy (COPPA Compliance)",
      content: "BrightReading is intended for parents and caregivers. We do not knowingly collect, store, or track any child's personal information. If you believe a child's data has been submitted, please contact us immediately at privacy@brightreading.com for deletion."
    },
    {
      id: 7,
      icon: <CheckCircle className="text-teal-600" size={28} />,
      title: "7. Your Rights",
      intro: "Depending on your location, you may have rights to:",
      list: [
        "Access, correct, or delete your data",
        "Withdraw consent for data use",
        "Request a copy (data portability)"
      ],
      footer: "To exercise your rights, email privacy@brightreading.com."
    },
    {
      id: 8,
      icon: <Globe className="text-cyan-600" size={28} />,
      title: "8. International Users",
      content: "If you access the Service from outside the U.S., your data may be transferred and processed in the United States or other jurisdictions. By using the Service, you consent to these transfers."
    },
    {
      id: 9,
      icon: <FileText className="text-purple-600" size={28} />,
      title: "9. Changes to This Policy",
      content: "We may update this Privacy Policy from time to time. The latest version will always be available within the Service and dated accordingly. Your continued use after any update constitutes acceptance of the revised Policy."
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
            <Lock className="text-white" size={40} />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
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
            At BrightReading, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and related services (collectively, the "Service").
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
            <p className="text-gray-800 font-semibold">
              We comply with all applicable privacy laws, including the Children's Online Privacy Protection Act (COPPA) and the General Data Protection Regulation (GDPR) where applicable.
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
                  
                  {section.intro && (
                    <p className="text-gray-700 leading-relaxed mb-4">{section.intro}</p>
                  )}
                  
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
                  
                  {section.subsections && (
                    <div className="space-y-4 mb-4">
                      {section.subsections.map((sub, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-xl p-4">
                          <h3 className="font-bold text-gray-900 mb-2">{sub.subtitle}</h3>
                          {sub.list && (
                            <ul className="space-y-2 mb-2">
                              {sub.list.map((item, itemIdx) => (
                                <li key={itemIdx} className="flex gap-3 items-start">
                                  <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                                  <span className="text-gray-700 text-sm">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {sub.note && (
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded mt-2">
                              <p className="text-sm text-gray-700"><strong>Note:</strong> {sub.note}</p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {section.footer && (
                    <p className="text-gray-700 font-semibold">{section.footer}</p>
                  )}
                  
                  {section.important && (
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg mt-4">
                      <p className="text-gray-800 font-bold">{section.important}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl shadow-xl p-8 text-white mb-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-2">10. Contact Information</h2>
            <p className="text-lg opacity-90">
              For privacy inquiries or data requests:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-2xl p-6 text-center">
              <Mail className="mx-auto mb-3" size={32} />
              <h3 className="font-bold mb-2">Privacy Inquiries</h3>
              <a 
                href="mailto:privacy@brightreading.com" 
                className="text-white hover:text-gray-200 transition underline"
              >
                privacy@brightreading.com
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

        {/* COPPA Notice */}
        <div className="bg-green-50 border-2 border-green-300 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <Shield className="text-green-600 flex-shrink-0" size={32} />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Children's Privacy Protected</h3>
              <p className="text-gray-700 mb-2">
                BrightReading is designed for parents and caregivers only. We do not knowingly collect any information from children under 13.
              </p>
              <p className="text-gray-700 font-semibold">
                This service is COPPA-compliant and takes children's online privacy seriously.
              </p>
            </div>
          </div>
        </div>

        {/* Acceptance Notice */}
        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-6 text-center">
          <AlertCircle className="mx-auto mb-3 text-blue-600" size={32} />
          <p className="text-gray-800 font-semibold mb-2">
            By using BrightReading, you acknowledge that you have read and understood this Privacy Policy and consent to our data practices as described.
          </p>
          <p className="text-gray-600 text-sm">
            If you have any questions or concerns about your privacy, please contact us before using the Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;