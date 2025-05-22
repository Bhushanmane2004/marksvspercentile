import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export interface StudentDetails {
  name: string;
  mobile: string;
  email: string;
  twelfthPercentage: number; // Changed to number
  score?: number;
  difficulty?: string;
  percentile?: number;
}

interface StudentDetailsFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: StudentDetails) => void;
  score?: number;
  difficulty?: string;
  percentile?: number;
}

const StudentDetailsForm: React.FC<StudentDetailsFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  score,
  difficulty,
  percentile,
}) => {
  const [details, setDetails] = useState<StudentDetails>({
    name: '',
    mobile: '',
    email: '',
    twelfthPercentage: 0, // Initialize as number
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate percentage input
      const percentage = details.twelfthPercentage;
      if (isNaN(percentage)) {
        alert('Please enter a valid 12th percentage (0–100).');
        return;
      }
      if (percentage < 0 || percentage > 100) {
        alert('12th percentage must be between 0 and 100.');
        return;
      }

      const completeData = {
        ...details,
        twelfthPercentage: percentage, // Store as number
        score,
        difficulty,
        percentile,
        timestamp: new Date(),
      };

      console.log('Saving data:', completeData);

      // Save to Firestore
      await addDoc(collection(db, 'students'), completeData);

      // Call the parent onSubmit
      onSubmit({
        ...details,
        score,
        difficulty,
        percentile,
      });

      // Reset form
      setDetails({
        name: '',
        mobile: '',
        email: '',
        twelfthPercentage: 0,
      });

      onClose(); // Close the form after submission
    } catch (error) {
      console.error('Error saving to Firestore:', error);
      alert('Failed to save details. Please try again.');
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl">
          <Dialog.Title className="text-xl font-semibold text-gray-900 mb-4">
            Student Details
          </Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={details.name}
                onChange={(e) => setDetails({ ...details, name: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={details.mobile}
                onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="10 digit mobile number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={details.email}
                onChange={(e) => setDetails({ ...details, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                12th Percentage
              </label>
              <input
                type="number"
                required
                min="0"
                max="100"
                step="0.01"
                value={details.twelfthPercentage || ''}
                onChange={(e) =>
                  setDetails({
                    ...details,
                    twelfthPercentage: parseFloat(e.target.value) || 0,
                  })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your 12th percentage"
              />
            </div>
            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default StudentDetailsForm;