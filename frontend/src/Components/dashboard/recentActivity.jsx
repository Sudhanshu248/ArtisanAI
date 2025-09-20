import React, { useEffect, useState } from 'react';   
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../../axiosConfig.js';

export default function RecentActivity(){

      const navigate = useNavigate();
      const [recentCreations, setRecentCreations] = useState([]);
      const [searchQuery, setSearchQuery] = useState('');

const getImages = async () => {
  try {
const response = await axios.get(`${BASE_URL}/getGoals`, {
                headers: { Authorization: localStorage.getItem("token") },
            });

    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};


useEffect(() => { 
  getImages();
}, []);

    

   useEffect(() => {
    // Mock recent creations data
    setRecentCreations([
      {
        id: 1,
        type: 'poster',
        title: 'Handmade Pottery Collection',
        date: '2 hours ago',
        status: 'completed',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e8d3833-671c-4c05-9f6b-97602ff90f30.png',
        category: 'E-commerce'
      },
      {
        id: 2,
        type: 'video',
        title: 'Traditional Weaving Story',
        date: '1 day ago',
        status: 'completed',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a110e9d2-e697-4bac-a008-563cd535711b.png',
        category: 'Social Media'
      },
      {
        id: 3,
        type: 'poster',
        title: 'Wooden Crafts Summer Sale',
        date: '3 days ago',
        status: 'completed',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f67ce7d8-08c8-4b02-ac68-cf922a9e5fc3.png',
        category: 'Promotion'
      }
    ]);
  }, [navigate]);
  
  const filteredCreations = recentCreations.filter(creation =>
    creation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    creation.category.toLowerCase().includes(searchQuery.toLowerCase())
  );




  const CreationCard = ({ creation }) => (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="relative mb-4">
        <img 
          src={creation.image} 
          alt={creation.title}
          className="w-full h-48 object-cover rounded-lg"
        />

      </div>
      <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
        {creation.title}
      </h4>
      <div className="flex justify-between items-center mb-3">

      </div>
      <div className="flex space-x-2">
        <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition">
          <i className="fas fa-download mr-2"></i>Download
        </button>
        <button className="flex-1 border border-gray-300 text-gray-600 py-2 rounded-lg text-sm font-semibold hover:border-purple-400 hover:text-purple-600 transition">
          <i className="fas fa-share-alt mr-2"></i>Share
        </button>
      </div>
    </div>
  );            
            
            return (
<>
       <div className="flex justify-between items-center mb-6">
                       <h2 className="text-xl font-semibold text-gray-800">Recent Activity</h2>
                     </div>

              {filteredCreations.length > 0 ? (
                <div className="flex gap-6">
                  {filteredCreations.map((creation) => (
                    <CreationCard key={creation.id} creation={creation} />
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