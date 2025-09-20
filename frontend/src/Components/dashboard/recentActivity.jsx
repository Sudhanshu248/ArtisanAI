import React, { useEffect, useState } from 'react';   
import axios from 'axios';
import { BASE_URL } from '../../../axiosConfig.js';

export default function RecentActivity() {

  const [images, setImages] = useState([]);

  // Fetch images from API
  const getImages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/get-images`, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      if (response.data) {
        setImages(response.data);
      }

    } catch (err) {
      console.error(err);
    }
  };

  // Download image
  const handleDownload = async (img) => {
    try {
      const response = await fetch(img.generatedImageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = img.title || "downloaded-image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  // Share image
  const handleShare = async (img) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: img.title,
          text: "Check out this image!",
          url: img.generatedImageUrl,
        });
      } catch (err) {
        console.error("Sharing failed", err);
      }
    } else {
      navigator.clipboard.writeText(img.generatedImageUrl);
      alert("Image link copied to clipboard!");
    }
  };

  useEffect(() => { 
    getImages();
  }, []);   

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
      </div>

      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
              <div className="relative mb-4">
                <img 
                  src={img.generatedImageUrl}
                  alt={img.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                {img.title}
              </h4>

              <div className="flex space-x-2">
                <button 
                  onClick={() => handleDownload(img)}
                  className="flex-1 bg-purple-600 cursor-pointer text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
                >
                  <i className="fas fa-download mr-2 p-2"></i>Download
                </button>

                <button 
                  onClick={() => handleShare(img)}
                  className="flex-1 border border-gray-300 cursor-pointer text-gray-600 py-2 rounded-lg text-sm font-semibold hover:border-purple-400 hover:text-purple-600 transition"
                >
                  <i className="fas fa-share-alt mr-2"></i>Share
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <i className="fas fa-folder-open text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">No projects found</p>
          <p className="text-sm text-gray-400 mt-1">Start by creating your first project!</p>
        </div>
      )}
    </>
  );
}
