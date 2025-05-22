import React from 'react';
import { Youtube, Globe, Users, BookOpen, Star, Award, CheckCircle, Phone, Mail } from 'lucide-react';

const PromotionalFooter: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 py-12 mt-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white rounded-xl shadow-sm p-3 flex items-center justify-center">
              <img
                src="/RE.webp"
                alt="Rising Education Logo"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Rising Education
              </h2>
              <p className="text-lg text-gray-600 font-medium">Engineering Counseling Experts</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="bg-green-50 px-4 py-2 rounded-full border border-green-200">
              <span className="text-green-700 font-semibold text-sm">🎯 99% Success Rate</span>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              <span className="text-blue-700 font-semibold text-sm">⭐ 10K+ Students</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex justify-center mb-10">
          {/* Engineering Admission Counseling */}
          <div className="max-w-2xl space-y-6">
            {/* Centered heading and icon */}
            <div className="flex flex-col items-center gap-3 mb-6 text-center">
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
                <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  <span className="text-sm font-medium text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-sm text-red-700 font-semibold flex items-center justify-center gap-2">
                <span className="text-red-500">🔒</span>
                Important: Once enrolled, no refund will be provided under any circumstances.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Links */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 justify-items-center">
          <a
            href="https://www.youtube.com/@sameer_shaikh22"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-red-200 transition-all duration-300 text-center w-full max-w-sm"
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
            className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 text-center w-full max-w-sm"
          >
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-colors">
              <Globe className="h-8 w-8 text-green-500" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Official Website</h4>
            <p className="text-gray-600 text-sm">Course details & admission info</p>
          </a>

          <a
            href="tel:+919665021534 "
            className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 text-center w-full max-w-sm"
          >
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
              <Phone className="h-8 w-8 text-blue-500" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Contact Us</h4>
            <p className="text-gray-600 text-sm">+91 9665021534</p>
            <p className="text-gray-600 text-sm">+91 9579415618</p>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
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