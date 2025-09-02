import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreatePoster() {
  const navigate = useNavigate();

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [posterData, setPosterData] = useState(null); // AI response

  // Handle image file selection and preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Please select a valid image file.");
        setImageFile(null);
        setImagePreview(null);
        return;
      }
      setError("");
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Please enter a title.");
      setSuccess("");
      return;
    }

    if (!imageFile) {
      setError("Please upload an image.");
      setSuccess("");
      return;
    }

    if (!description.trim()) {
      setError("Please enter a description.");
      setSuccess("");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");
    setPosterData(null);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("description", description.trim());
      formData.append("image", imageFile);

      const response = await axios.post(
        "http://localhost:8080/api/create-poster",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          timeout: 15000,
        }
      );

      if (response.data && response.data.success) {
        setSuccess("Poster created successfully!");
        setPosterData(response.data.poster);
        // reset form
        setImageFile(null);
        setImagePreview(null);
        setTitle("");
        setDescription("");
      } else {
        setError("Failed to create poster. Please try again.");
      }
    } catch (err) {
      setError("An error occurred while creating the poster. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-pink-400 flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-lg p-10">
        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Create a New Poster
        </h1>

        {/* Error / Success */}
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

        {/* Form */}
        {/* Container for Left (Image Upload) and Right (Form Fields) */}
        <form onSubmit={handleSubmit} className="flex space-x-10">

          {/* Left side: Image Upload + Preview */}
          <div className="flex-shrink-0 w-64 justify-between">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={handleImageChange}
              disabled={loading}
              className="block w-full text-gray-700 border border-gray-300 rounded-lg py-3 text-center "
            />
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="mt-4 rounded-lg w-64 h-64 object-cover border border-gray-300"
              />
            )}
          </div>

          {/* Right side: Title, Description, Submit */}
          <div className="flex-1 flex flex-col space-y-6">
            {/* Title */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter poster title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Description */}
            <div>
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Enter a short description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={loading}
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`py-3 rounded-full font-semibold text-white transition-transform transform ${loading
                  ? 'bg-purple-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105'
                }`}
            >
              {loading ? 'Creating...' : 'Create Poster'}
            </button>
          </div>
        </form>


        {/* Poster Preview After Creation */}
        {posterData && posterData.generatedImageUrl && (
          <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">
              Your AI Poster
            </h2>

            <img
              src={posterData.generatedImageUrl}
              alt="Generated Poster"
              className="mx-auto rounded-lg shadow-md max-w-md"
            />

            {/* Download Button */}
            <a
              href={posterData.generatedImageUrl}
              download={`poster-${Date.now()}.png`}
              className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Download Poster
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
