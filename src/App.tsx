import React, { useState } from "react";
import {
  BarChart,
  Calculator,
  TrendingUp,
  Award,
  Users,
  BookOpen,
  Smartphone,
  LogIn,
  Store,
  CreditCard,
  Phone,
} from "lucide-react";
import StudentDetailsForm, { StudentDetails } from "./components/StudentDetailsForm";
import percentileData from "./data/percentileData";
import PromotionalBanner from "./components/PromotionalBanner";
import PromotionalFooter from "./components/PromotionalFooter";
import SuccessTestimonials from "./components/SuccessTestimonials";
import PercentileChart from "./components/PercentileChart";

type DifficultyLevel = "Easy" | "Moderate" | "Difficult";

function App() {
  const [score, setScore] = useState<number | null>(null);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>("Easy");
  const [percentile, setPercentile] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [studentDetails, setStudentDetails] = useState<StudentDetails | null>(null);

  const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? parseInt(e.target.value) : null;
    setScore(value);
    setPercentile(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (score !== null && score >= 0 && score <= 200) {
      const data = percentileData[difficulty][score];
      if (data) {
        setPercentile(data.percentile);
        setShowForm(true);
      } else {
        alert("Invalid score or difficulty level.");
      }
    }
  };

  const handleStudentDetailsSubmit = (details: StudentDetails) => {
    setStudentDetails(details);
    setShowForm(false);
  };

  const getColor = (value: number) => {
    if (value >= 90) return "bg-green-600";
    if (value >= 75) return "bg-green-400";
    if (value >= 60) return "bg-blue-600";
    if (value >= 45) return "bg-yellow-400";
    if (value >= 30) return "bg-orange-500";
    return "bg-red-500";
  };

  const enrollmentSteps = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Download App",
      description: "Get the Rising Education app from the Play Store or App Store, or visit our website.",
      stores: {
        playStore: "https://play.google.com/store/apps/details?id=com.risingeducation",
        appStore: "https://apps.apple.com/app/rising-education/id123456789",
      },
    },
    {
      icon: <LogIn className="w-6 h-6" />,
      title: "Login",
      description: "Sign in with your mobile number to access your account.",
    },
    {
      icon: <Store className="w-6 h-6" />,
      title: "Select Package",
      description: "Choose the Personal Counseling 2025 package from our store.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Complete Payment",
      description: "Make the payment to start your counseling journey.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
      <PromotionalBanner />

      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-100 rounded-xl shadow-sm flex items-center justify-center p-2">
                <img
                  src="/RE.webp"
                  alt="Rising Education Logo"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                  Rising Education
                </h1>
                <p className="text-sm text-gray-600 font-medium">
                  MHT-CET Percentile Predictor
                </p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full border border-gray-200 shadow-sm">
                <Users className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700 font-semibold text-sm">
                  10K+ Students
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calculator className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Percentile Calculator</h2>
          </div>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Select Difficulty Level
              </label>
              <div className="grid grid-cols-3 gap-4">
                {(["Easy", "Moderate", "Difficult"] as DifficultyLevel[]).map((level) => (
                  <button
                    key={level}
                    type="button"
                    onClick={() => setDifficulty(level)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      difficulty === level
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="score"
                className="block text-sm font-semibold text-gray-700 mb-4"
              >
                Enter Your Score (0-200)
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="score"
                  min="0"
                  max="200"
                  value={score === null ? "" : score}
                  onChange={handleScoreChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-base bg-white shadow-sm"
                  placeholder="Enter your score..."
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <span className="text-sm font-medium">/200</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-md"
            >
              Calculate Percentile
            </button>
          </div>

          {studentDetails && percentile !== null && (
            <div className="mt-8 flex flex-col items-center">
              <div
                className={`w-36 h-36 ${getColor(
                  percentile
                )} rounded-full flex items-center justify-center mb-4 transition-all duration-500 transform hover:scale-105 shadow-lg`}
              >
                <span className="text-4xl font-bold text-white">{percentile}%</span>
              </div>
              <p className="text-sm text-gray-600 font-medium mb-2">
                Your percentile rank at {difficulty} difficulty level
              </p>
              <p className="text-sm text-gray-600 italic text-center">
                This percentile is based on our prediction. Your final percentile will be as per the official MHT-CET result.
              </p>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-xl p-8 mt-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-1/2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Get Into Your</h3>
                <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
                  Dream Engineering College!
                </h2>
              </div>
              <div className="space-y-4 text-gray-300">
                <p className="text-lg">
                  Maharashtra's Most Trusted Counseling for Engineering Aspirants!
                </p>
                <p>
                  We guide students to secure admissions in top engineering colleges
                  across Pune, Mumbai, and Maharashtra. From CAP registration to
                  option form filling and live expert sessions — we handle it all!
                </p>
                <p>
                  Get personalized support, region-wise college lists, and
                  documentation help with our proven counseling process.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md"
                >
                  Join Now
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="./banner.jpg"
                alt="Engineering Students"
                className="rounded-xl shadow-lg w-full object-fit h-64"
              />
              <div className="bg-white p-6 rounded-xl shadow-lg mt-4">
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">Features:</h4>
                <ul className="grid grid-cols-2 gap-3">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Best Engineering College List
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Region Wise College List
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> CAP Registration Help
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Documentation Process
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Option Form Filling
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Live Sessions
                  </li>
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600">₹1499</div>
                  <span className="text-sm text-gray-500">Early Bird Offer</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Enroll</h2>
            <p className="text-gray-600">
              Follow these simple steps to start your counseling journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {enrollmentSteps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <div className="text-blue-600">{step.icon}</div>
                </div>
                <div className="relative">
                  <div className="text-2xl font-bold text-blue-600 mb-2">Step {index + 1}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              Reach out to us for any queries or join our community for updates!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="WhatsApp Logo"
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp Community</h3>
                  <a
                    href="https://chat.whatsapp.com/KgfM0J3gPJd7QFhzJXUGsq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Join our WhatsApp Community
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                  alt="Telegram Logo"
                  className="w-8 h-8"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Telegram Group</h3>
                  <a
                    href="https://t.me/risingeducation2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Join our Telegram Group
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-blue-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Contact Number</h3>
                  <a
                    href="tel:+919665021534 "
                    className="text-blue-600 hover:underline"
                  >
                    +91 9665021534 
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Have a Query?</h3>
              <a
                href="https://wa.me/message/52KTQQGRJYXBI1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md"
              >
                Make an Enquiry
              </a>
            </div>
          </div>
          <p className="text-sm text-gray-600 italic text-center mt-6">
            If your call is not answered, please share your query via WhatsApp or Telegram.
          </p>
        </div>
      </main>

      <StudentDetailsForm
        isOpen={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleStudentDetailsSubmit}
        score={score ?? undefined}
        difficulty={difficulty}
        percentile={percentile ?? undefined}
      />
      <SuccessTestimonials />
      <PromotionalFooter />
    </div>
  );
}

export default App;