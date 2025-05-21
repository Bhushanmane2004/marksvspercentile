// src/components/DownloadDataButton.tsx
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Download } from 'lucide-react';

interface DownloadDataButtonProps {
  className?: string;
}

const DownloadDataButton: React.FC<DownloadDataButtonProps> = ({ className }) => {
  const [loading, setLoading] = useState(false);

  const downloadData = async () => {
    try {
      setLoading(true);
      
      // Get all documents from the students collection
      const querySnapshot = await getDocs(collection(db, 'students'));
      
      // Map the documents to an array of objects
      const data = querySnapshot.docs.map(doc => {
        const docData = doc.data();
        
        // Format timestamp - needed since Firestore timestamps aren't directly serializable
        const timestamp = docData.timestamp?.toDate ? 
          docData.timestamp.toDate().toISOString() : 
          docData.timestamp;
        
        return {
          id: doc.id,
          name: docData.name || '',
          email: docData.email || '',
          mobile: docData.mobile || '',
          twelfthPercentile: docData.twelfthPercentile || '',
          score: docData.score || 0,
          difficulty: docData.difficulty || '',
          percentile: docData.percentile || 0,
          submittedOn: timestamp || '',
        };
      });
      
      // Convert to CSV
      const headers = ['ID', 'Name', 'Email', 'Mobile', '12th Percentile', 'Score', 'Difficulty', 'Percentile', 'Submitted On'];
      
      const csvContent = [
        // Add headers
        headers.join(','),
        // Add data rows
        ...data.map(item => [
          item.id,
          `"${item.name.replace(/"/g, '""')}"`, // Handle quotes in names
          `"${item.email}"`,
          item.mobile,
          item.twelfthPercentile,
          item.score,
          item.difficulty,
          item.percentile,
          item.submittedOn
        ].join(','))
      ].join('\n');
      
      // Create a blob with the data
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      
      // Create a download link and trigger the download
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `student_data_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading data:', error);
      alert('Failed to download data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={downloadData}
      disabled={loading}
      className={`flex items-center gap-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors ${className}`}
    >
      {loading ? (
        <>
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
          <span>Processing...</span>
        </>
      ) : (
        <>
          <Download size={18} />
          <span>Download Data (CSV)</span>
        </>
      )}
    </button>
  );
};

export default DownloadDataButton;