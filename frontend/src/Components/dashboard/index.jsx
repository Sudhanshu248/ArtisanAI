import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AvatarIVDashboard from './chatBot';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [recentCreations, setRecentCreations] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

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
        <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-sm">
          <i className={`fas ${creation.type === 'poster' ? 'fa-image text-purple-600' : 'fa-video text-pink-600'}`}></i>
        </div>
      </div>
      <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
        {creation.title}
      </h4>
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm text-gray-500">{creation.date}</span>
        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
          {creation.category}
        </span>
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
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white border-r border-gray-200 transition-all duration-300`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && (
              <h1 className="text-xl font-bold text-purple-600">ArtisanAI</h1>
            )}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              <i className="fas fa-bars text-gray-600"></i>
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <button
            onClick={() => setActiveTab('home')}
            className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
              activeTab === 'home' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <i className="fas fa-home w-6"></i>
            {sidebarOpen && <span className="ml-3">Home</span>}
          </button>

          <button
            onClick={() => setActiveTab('create')}
            className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
              activeTab === 'create' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <i className="fas fa-plus-circle w-6"></i>
            {sidebarOpen && <span className="ml-3">Create</span>}
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
              activeTab === 'projects' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <i className="fas fa-folder w-6"></i>
            {sidebarOpen && <span className="ml-3">Projects</span>}
          </button>

          <button
            onClick={() => setActiveTab('templates')}
            className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
              activeTab === 'templates' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <i className="fas fa-palette w-6"></i>
            {sidebarOpen && <span className="ml-3">Templates</span>}
          </button>

          <button
            onClick={() => setActiveTab('brand')}
            className={`w-full flex items-center p-3 rounded-lg text-left transition-colors ${
              activeTab === 'brand' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <i className="fas fa-star w-6"></i>
            {sidebarOpen && <span className="ml-3">Brand Kit</span>}
          </button>
        </nav>

        {sidebarOpen && (
          <div className="p-4 border-t border-gray-200 mt-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-2">SHARE</h3>
            <div className="space-y-1">
              <button className="w-full flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <i className="fab fa-amazon w-6 text-orange-500"></i>
                <span className="ml-3">Amazon</span>
              </button>
              <button className="w-full flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <i className="fab fa-instagram w-6 text-pink-500"></i>
                <span className="ml-3">Instagram</span>
              </button>
              <button className="w-full flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
                <i className="fab fa-facebook w-6 text-blue-600"></i>
                <span className="ml-3">Facebook</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search your projects..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  {userEmail.charAt(0).toUpperCase()}
                </div>
                <span className="text-gray-700">{userEmail}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </header>




        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
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

          {/* Recent Projects Section */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Recent Projects</h2>
              <button className="text-purple-600 hover:text-purple-700 font-semibold">
                View all →
              </button>
            </div>

            {filteredCreations.length > 0 ? (
              <div className="flex  gap-6">
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
          </div>

          {/* Stats Section
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">24</p>
                  <p className="text-sm text-gray-600">Total Projects</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-folder text-purple-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">1.2K</p>
                  <p className="text-sm text-gray-600">Total Views</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-eye text-blue-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">89</p>
                  <p className="text-sm text-gray-600">Downloads</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-download text-green-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-gray-800">4.8</p>
                  <p className="text-sm text-gray-600">Avg. Rating</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                  <i className="fas fa-star text-yellow-600"></i>
                </div>
              </div>
            </div>
          </div> */}
        </main>
      </div>
    </div>

    <AvatarIVDashboard/>
     {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 text-center">
          <p>© 2025 ArtisanAI. Empowering local artists with AI technology.</p>
        </div>
      </footer>
</>
  );
}