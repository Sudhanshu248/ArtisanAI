import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../../axiosConfig';

export default function CreateShortVideo() {

  const [title, setTitle] = useState('');
  const [script, setScript] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError('Please enter a title.');
      setSuccess('');
      return;
    }

    if (!script.trim()) {
      setError('Please enter a script/description.');
      setSuccess('');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');
    setVideoUrl(null);

    try {
      const response = await axios.post( `${BASE_URL}/api/create-short-video`,
        {
          title: title.trim(),
          script: script.trim(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          timeout: 30000, 
        }
      );

      if (response.data && response.data.success && response.data.videoUrl) {
        setSuccess('Short video created successfully!');
        setVideoUrl(response.data.videoUrl);
        setError('');
        setTitle('');
        setScript('');
      } else {
        setError('Failed to create short video. Please try again.');
        setSuccess('');
      }

    } catch (err) {
      setError('An error occurred while creating the short video. Please try again.');
      setSuccess('');

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-pink-400 flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Generate a Short AI Video
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md font-semibold flex items-center space-x-2">
            <i className="fas fa-exclamation-circle"></i>
            <span>{error}</span>
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md font-semibold flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>{success}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
          <div className="relative w-64 h-80 rounded-lg overflow-hidden border border-gray-300">
            {imagePreview ? 
              (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) 
              :
              ( 
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                  <span>No Image Selected</span>
                </div>
              )
            }

            <label
              htmlFor="image"
              className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white rounded-full p-3 cursor-pointer shadow-lg flex items-center justify-center"
              title="Upload Image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>

              <input
                type="file"
                id="image"
                accept="image/*"
                className="hidden"
              />
            </label>
          </div>

          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter video title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Script Input */}
          <div>
            <label htmlFor="script" className="block mt-5 text-gray-700 font-semibold mb-2">
              Description / Script
            </label>
            <textarea
              id="script"
              placeholder="Enter description or script for the AI video generation"
              value={script}
              onChange={(e) => setScript(e.target.value)}
              disabled={loading}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`py-3 rounded-full cursor-pointer font-semibold text-white transition-transform transform ${
              loading
                ? 'bg-purple-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105'
            }`}
          >
            {loading ? 'Generating...' : 'Generate Video'}
          </button>
        </form>

        {/* Display Video Preview if available */}
        {videoUrl && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-700">
              Your Generated Video Preview
            </h2>
            <video
              src={videoUrl}
              controls
              className="mx-auto rounded-lg border border-gray-300 max-w-full"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
}