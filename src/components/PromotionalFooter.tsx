import React from 'react';
import { Youtube, Globe, BookOpen, Star, Award, Users } from 'lucide-react';

const PromotionalFooter: React.FC = () => {
  return (
    <footer className="bg-slate-100 text-gray-800 py-6 mt-12 text-sm">
      <div className="max-w-5xl mx-auto px-4">
        {/* Logo and Title */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src="/RE.webp"
            alt="Rising Education Logo"
            className="w-16 h-16"
          />
          <div>
            <h2 className="text-2xl font-bold">Rising Education</h2>
            <p className="text-base text-gray-600">Experts in MHT-CET Preparation</p>
          </div>
        </div>

        {/* Sections */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Award className="h-4 w-4" /> Why Choose Rising Education?
            </h3>
            <ul className="space-y-2">
              {[
                "Top MHT-CET coaching with proven results",
                "Expert faculty with years of experience",
                "Comprehensive study materials & mock tests",
                "Personalized guidance for every student",
                "Track record of creating top rankers",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Star className="h-4 w-4 mt-0.5 text-yellow-400 flex-shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> Our Programs
            </h3>
            <ul className="space-y-2">
              {[
                "MHT-CET Complete Preparation Course",
                "Short-term Crash Course for Quick Results",
                "Subject-wise Mastery Programs",
                "Online Live Classes & Recorded Sessions",
                "Mock Test Series with Detailed Analysis",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-400 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                    {idx + 1}
                  </div>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="grid md:grid-cols-3 gap-6 border-t border-gray-300 pt-6">
          <a
            href="https://www.youtube.com/risingeducation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:bg-slate-200 p-3 rounded-lg transition"
          >
            <Youtube className="h-8 w-8 mb-1 text-red-400" />
            <h4 className="font-medium">YouTube Channel</h4>
            <p className="text-gray-600 text-center text-xs">Free lessons, tips & strategies</p>
          </a>

          <a
            href="https://www.risingeducation.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center hover:bg-slate-200 p-3 rounded-lg transition"
          >
            <Globe className="h-8 w-8 mb-1 text-green-500" />
            <h4 className="font-medium">Official Website</h4>
            <p className="text-gray-600 text-center text-xs">Course & admission details</p>
          </a>

          <a
            href="tel:+919876543210"
            className="flex flex-col items-center hover:bg-slate-200 p-3 rounded-lg transition"
          >
            <Users className="h-8 w-8 mb-1 text-yellow-500" />
            <h4 className="font-medium">Contact Us</h4>
            <p className="text-gray-600 text-center text-xs">+91 98765 43210</p>
          </a>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-gray-500 mt-6">
          <p>&copy; {new Date().getFullYear()} Rising Education. All rights reserved.</p>
          <p className="mt-1">Helping students achieve their engineering dreams through MHT-CET excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default PromotionalFooter;
