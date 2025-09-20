import React, { useState, useRef } from 'react';
import AvatarIVDashboard from './chatBot';
import RecentActivity from './recentActivity.jsx';
import Template from './templates.jsx';
import CreateSection from './createSection.jsx';
import Header from './header.jsx';
import Hero from './hero.jsx';

export default function Dashboard() {

  const [activeTab, setActiveTab] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Refs for scrolling
  const createRef = useRef(null);
  const templatesRef = useRef(null);
  const recentActivityRef = useRef(null);
  const homeRef = useRef(null);

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
                className="p-2 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <i className="fas fa-bars text-gray-600"></i>
              </button>
            </div>
          </div>

          <nav className="p-4 space-y-2">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-full cursor-pointer  flex items-center p-3 rounded-lg text-left transition-colors ${
                activeTab === 'home' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-home w-6"></i>
              {sidebarOpen && <span className="ml-3">Home</span>}
            </button>

            <button
              onClick={() => {
                setActiveTab('create');
                createRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full cursor-pointer  flex items-center p-3 rounded-lg text-left transition-colors ${
                activeTab === 'create' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-plus-circle w-6"></i>
              {sidebarOpen && <span className="ml-3">Create</span>}
            </button>

            <button
              onClick={() => {
                setActiveTab('templates');
                templatesRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full cursor-pointer  flex items-center p-3 rounded-lg text-left transition-colors ${
                activeTab === 'templates' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-palette w-6"></i>
              {sidebarOpen && <span className="ml-3">Templates</span>}
            </button>

            <button
              onClick={() => {
                setActiveTab('projects');
                recentActivityRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`w-full cursor-pointer flex items-center p-3 rounded-lg text-left transition-colors ${
                activeTab === 'projects' ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <i className="fas fa-folder w-6"></i>
              {sidebarOpen && <span className="ml-3">Recent Activity</span>}
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div  className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header/>

          {/* Main Content Area */}
          <main ref={homeRef} className="flex-1 overflow-y-auto p-6">
            {/* Welcome Section */}
            <Hero/>

            {/* Create Section */}
            <div ref={createRef} className="grid md:grid-cols-2 gap-6 mb-8">
              <CreateSection/>
            </div>

            {/* Templates Section */}
            <div ref={templatesRef} className="mb-8">
              <Template/>
            </div>

            {/* Recent Activity Section */}
            <div ref={recentActivityRef} className="bg-white rounded-xl p-6 border border-gray-200">
              <RecentActivity  />
            </div>
          </main>
        </div>
      </div>
      < AvatarIVDashboard/>
    </>
  );
}