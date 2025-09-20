import React, { useState } from 'react';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Spanish' },
  { code: 'fr', label: 'French' },
  // add more languages as needed
];

export default function CreateAIPoster() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [language, setLanguage] = useState('en');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const imagePreview = image ? URL.createObjectURL(image) : null;

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !title || !description || !language) {
      alert('Please fill in all fields');
      return;
    }

    setLoading(true);

    // Mock AI poster generation (replace with your API integration)
    setTimeout(() => {
      setLoading(false);
      setResult({
        imageUrl: URL.createObjectURL(image), // just the uploaded image for demo
        title,
        description,
        language,
      });
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Create AI Poster</h1>

      <form onSubmit={handleSubmit} className="flex space-x-8 items-start">

        {/* Left side: Image Upload + Preview with overlay button */}
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

        {/* Right side: Form fields */}
        <div className="flex flex-col flex-1 space-y-4">
          {/* Title */}
          <div>
            <label htmlFor="title" className="text-sm font-medium text-gray-900 mb-1 block">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter poster title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={loading}
              className="w-full border-b border-gray-400 focus:border-purple-600 focus:outline-none py-1 px-0 placeholder-gray-500 text-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="text-sm font-medium text-gray-900 mb-1 block">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              placeholder="Type your script here or upload / record audio"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={loading}
              rows={4}
              className="w-full border-b border-gray-400 focus:border-purple-600 focus:outline-none py-1 px-0 placeholder-gray-500 text-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-auto self-start rounded-full font-semibold text-white px-8 py-2 transition-transform transform ${
              loading
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105"
            } text-sm`}
          >
            {loading ? "Creating..." : "Create Poster"}
          </button>
        </div>
      </form>

      {result && (
        <div className="mt-8 p-4 border border-indigo-300 rounded-lg bg-indigo-50">
          <h2 className="text-xl font-semibold mb-4">Poster Preview</h2>
          <img 
            src={result.imageUrl} 
            alt={result.title} 
            className="w-full max-h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-bold">{result.title} ({result.language})</h3>
          <p className="mt-2">{result.description}</p>
        </div>
      )}
    </div>
  );
}