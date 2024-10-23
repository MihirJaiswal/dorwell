// components/product/DownloadButton.tsx
'use client';
import React from 'react';

interface DownloadButtonProps {
  catalogUrl?: string;
  categoryName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ catalogUrl, categoryName }) => {
  const handleDownload = () => {
    if (catalogUrl) {
      const link = document.createElement('a');
      link.href = catalogUrl;
      link.download = `${categoryName}-catalog.pdf`;
      link.click();
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700 transition-all"
    >
      Download Full Catalog
    </button>
  );
};

export default DownloadButton;
