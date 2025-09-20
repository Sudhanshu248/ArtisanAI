import React, { useEffect, useState } from 'react';   
import axios from 'axios';
import { BASE_URL } from '../../../axiosConfig.js';

export default function RecentActivity(){

  const [title, setTitle] = useState("");
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");
  const [isData, SetIsData] = useState(false);

  const getImages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/get-images`, {
        headers: { Authorization: localStorage.getItem("token") },
      });

      console.log(response.data);

      if(response.data){
        SetIsData(true);
        setTitle(response.data.title);
        setGeneratedImageUrl(response.data.generatedImageUrl);
        console.log("Image URL", response.data.generatedImageUrl);
      }
      
    } catch (err) {
      console.error(err);
    }
  };

   // 📥 Download Function
  const handleDownload = async () => {
  try {
    const imageUrl = `${BASE_URL}/backend/${generatedImageUrl.replace(/\\/g, "/")}`;
    
    // Fetch the image as a blob
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    
    // Create a temporary URL for the blob
    const url = window.URL.createObjectURL(blob);
    
    // Create an <a> tag to trigger download
    const link = document.createElement("a");
    link.href = url;
    link.download = title || "downloaded-image.jpg"; // File name for download
    document.body.appendChild(link);
    link.click();
    
    // Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

  } catch (err) {
    console.error("Download failed", err);
  }
};

  // 📤 Share Function
  const handleShare = async () => {
    const imageUrl = `${BASE_URL}/backend/${generatedImageUrl.replace(/\\/g, "/")}`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: "Check out this image!",
          url: imageUrl,
        });
        console.log("Image shared successfully!");
      } catch (err) {
        console.error("Sharing failed", err);
      }
    } else {
      // Fallback: Copy URL to clipboard
      navigator.clipboard.writeText(imageUrl);
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

      {isData ? 
        <div className="flex gap-6">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow group">
            <div className="relative mb-4">
              <img 
                src={`/backend/uploads/${generatedImageUrl.replace(/\\/g, "/")}`}
                alt='Product Image'
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>

            <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
              {title}
            </h4>

            <div className="flex space-x-2">
              <button 
                onClick={handleDownload}
                className="flex-1 bg-purple-600 cursor-pointer text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
              >
                <i className="fas fa-download mr-2 p-2"></i>Download
              </button>

              <button 
                onClick={handleShare}
                className="flex-1 border border-gray-300 cursor-pointer text-gray-600 py-2 rounded-lg text-sm font-semibold hover:border-purple-400 hover:text-purple-600 transition"
              >
                <i className="fas fa-share-alt mr-2"></i>Share
              </button>
            </div>
          </div>
        </div>
      :

        <div className="text-center py-12">
          <i className="fas fa-folder-open text-4xl text-gray-300 mb-4"></i>
          <p className="text-gray-500">No projects found</p>
          <p className="text-sm text-gray-400 mt-1">Start by creating your first project!</p>
        </div>
      }
    </>
  );
}