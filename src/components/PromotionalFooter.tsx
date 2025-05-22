import React from 'react';
import { Youtube, Globe, Users, BookOpen, Star, Award, CheckCircle, Phone, Mail } from 'lucide-react';

const PromotionalFooter: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-xl shadow-sm p-3 flex items-center justify-center">
              <img
                src="/RE.webp"
                alt="Rising Education Logo"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rising Education
              </h2>
              <p className="text-lg text-gray-600 font-medium">Experts in MHT-CET Preparation</p>
            </div>
          </div>
          <div className="md:ml-auto flex gap-3">
            <div className="bg-green-50 px-4 py-2 rounded-full border border-green-200">
              <span className="text-green-700 font-semibold text-sm">🎯 99% Success Rate</span>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              <span className="text-blue-700 font-semibold text-sm">⭐ 10K+ Students</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-10">
          {/* Engineering Admission Counseling */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Engineering Admission Counseling</h3>
                <p className="text-orange-600 font-semibold">2025 Batch Now Open 🎓</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Top engineering college list across Maharashtra',
                'Region-wise personalized college list',
                'Complete CAP registration form filling support',
                'Proper Guidance for Option Form Filling',
                'Live sessions to solve all your doubts',
                'WhatsApp support for quick assistance',
                'Step-by-step documentation guidance',
                'Regular updates, alerts & admission tracking',
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle className="h-5 w-5 mt-0.5 text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-sm text-red-700 font-semibold flex items-center gap-2">
                <span className="text-red-500">🔒</span>
                Important: Once enrolled, no refund will be provided under any circumstances.
              </p>
            </div>
          </div>

          {/* Our Programs */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Our Premium Programs</h3>
                <p className="text-blue-600 font-semibold">Comprehensive Learning Solutions</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { title: 'MHT-CET Complete Preparation Course', desc: 'Full syllabus coverage with expert guidance' },
                { title: 'Short-term Crash Course', desc: 'Quick results for last-minute preparation' },
                { title: 'Subject-wise Mastery Programs', desc: 'Deep focus on individual subjects' },
                { title: 'Online Live Classes & Recorded Sessions', desc: 'Flexible learning at your own pace' },
                { title: 'Mock Test Series with Analysis', desc: 'Performance tracking and improvement' },
              ].map((program, idx) => (
                <div key={idx} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{program.title}</h4>
                      <p className="text-sm text-gray-600">{program.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <a
            href="https://www.youtube.com/@sameer_shaikh22"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-100 transition-colors">
              <Youtube className="h-8 w-8 text-red-500" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">YouTube Channel</h4>
            <p className="text-gray-600 text-sm">Free lessons, tips & exam strategies</p>
          </a>

          <a
            href="https://www.risingeducation.in"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
              <Globe className="h-8 w-8 text-green-500" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Official Website</h4>
            <p className="text-gray-600 text-sm">Course details & admission info</p>
          </a>

          <a
            href="tel:+919876543210"
            className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 text-center"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
              <Phone className="h-8 w-8 text-blue-500" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Contact Us</h4>
            <p className="text-gray-600 text-sm">+91 98765 43210</p>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} Rising Education. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Support</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto">
            Empowering students to achieve their engineering dreams through comprehensive MHT-CET preparation and expert guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PromotionalFooter;