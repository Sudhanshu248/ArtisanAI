import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [activeTab, setActiveTab] = useState('create');
  const [recentCreations, setRecentCreations] = useState([]);

  useEffect(() => {
    // Get user email from localStorage
    const email = localStorage.getItem('userEmail');
    if (email) {
      setUserEmail(email);
    } else {
      // Redirect to login if no user email found
      navigate('/login');
    }

    // Mock recent creations data
    setRecentCreations([
      {
        id: 1,
        type: 'poster',
        title: 'Handmade Pottery Collection',
        date: '2 hours ago',
        status: 'completed',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e8d3833-671c-4c05-9f6b-97602ff90f30.png'
      },
      {
        id: 2,
        type: 'video',
        title: 'Traditional Weaving Story',
        date: '1 day ago',
        status: 'completed',
        image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a110e9d2-e697-4bac-a008-563cd535711b.png'
      }
    ]);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  const handleCreatePoster = () => {
    navigate('/create-poster');
  };

  const handleCreateVideo = () => {
    navigate('/create-video');
  };

  const handleUploadToPlatform = (creationId, platform) => {
    console.log(`Uploading ${creationId} to ${platform}`);
    // Implement upload logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-purple-600">ArtisanAI</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {userEmail}</span>
              <button
                onClick={handleLogout}
                className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">Welcome back, Artisan!</h2>
          <p className="text-purple-100 text-lg">
            Ready to create stunning marketing content for your handmade products?
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div 
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={handleCreatePoster}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-image text-2xl text-purple-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Create Poster</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Design beautiful product posters with AI-powered templates and layouts.
            </p>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
              Start Creating
            </button>
          </div>

          <div 
            className="bg-white rounded-2xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition-shadow"
            onClick={handleCreateVideo}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mr-4">
                <i className="fas fa-video text-2xl text-pink-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Create Story Video</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Tell your product's story with engaging AI-generated videos.
            </p>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition">
              Start Creating
            </button>
          </div>
        </div>

        {/* Recent Creations */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Recent Creations</h3>
          {recentCreations.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {recentCreations.map((creation) => (
                <div key={creation.id} className="border rounded-2xl p-4 hover:shadow-md transition-shadow">
                  <img 
                    src={creation.image} 
                    alt={creation.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="font-semibold text-gray-800 mb-2">{creation.title}</h4>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">{creation.date}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      creation.status === 'completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {creation.status}
                    </span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition">
                      <i className="fas fa-download mr-2"></i>Download
                    </button>
                    <button className="flex-1 border border-purple-600 text-purple-600 py-2 rounded-lg text-sm font-semibold hover:bg-purple-50 transition">
                      <i className="fas fa-share-alt mr-2"></i>Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <i className="fas fa-box-open text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">No creations yet. Start creating your first masterpiece!</p>
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-image text-purple-600"></i>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">12</p>
                <p className="text-sm text-gray-600">Posters Created</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-video text-pink-600"></i>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">8</p>
                <p className="text-sm text-gray-600">Videos Created</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-share-alt text-green-600"></i>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">24</p>
                <p className="text-sm text-gray-600">Total Shares</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-eye text-blue-600"></i>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800">1.2K</p>
                <p className="text-sm text-gray-600">Total Views</p>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Integration */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Upload to Platforms</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <button className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-2xl hover:border-purple-400 hover:bg-purple-50 transition">
              <i className="fab fa-amazon text-3xl text-orange-500 mb-2"></i>
              <span className="text-sm font-semibold">Amazon</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition">
              <i className="fab fa-flipkart text-3xl text-blue-600 mb-2"></i>
              <span className="text-sm font-semibold">Flipkart</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-2xl hover:border-pink-400 hover:bg-pink-50 transition">
              <i className="fab fa-instagram text-3xl text-pink-500 mb-2"></i>
              <span className="text-sm font-semibold">Instagram</span>
            </button>
            
            <button className="flex flex-col items-center p-4 border-2 border-gray-200 rounded-2xl hover:border-blue-400 hover:bg-blue-50 transition">
              <i className="fab fa-facebook text-3xl text-blue-600 mb-2"></i>
              <span className="text-sm font-semibold">Facebook</span>
            </button>
          </div>
        </div>
      </main>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 ArtisanAI. Empowering local artists with AI technology.</p>
        </div>
      </footer>
    </div>
  );
}
