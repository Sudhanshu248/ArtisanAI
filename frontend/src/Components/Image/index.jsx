import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../axiosConfig";

export default function CreateImage() {

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageData, setImageData] = useState(null);

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
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

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

    setLoading(true);
    setError("");
    setSuccess("");
    setImageData(null);

    try {
      const formData = new FormData();
      formData.append("title", title.trim());
      formData.append("image", imageFile);

      const response = await axios.post(`${BASE_URL}/api/create-image`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        timeout: 50000,
      });

      if (response.data?.success) {
        setSuccess("Image created successfully!");
        setImageData(response.data.image);
        setImageFile(null);
        setImagePreview(null);
        setTitle("");

      } else {
        setError(response.data?.message || "Failed to create image.");
      }

    } catch (err) {
      console.error("Create Image error:", err.response?.data || err.message);
      setError(
        err.response?.data?.message ||
          (err.request ? "No response from server." : "Unexpected error: " + err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-pink-400 flex flex-col items-center py-12 px-4">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-lg p-6 sm:p-10">
        <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center">
          Enhance your product's Image
        </h1>

        {/* Error / Success Messages */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md font-semibold flex items-center space-x-2">
            <i className="fas fa-exclamation-circle"></i>
            <span>{error}</span>
          </div>
        )}

        {success && !imageData && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md font-semibold flex items-center space-x-2">
            <i className="fas fa-check-circle"></i>
            <span>{success}</span>
          </div>
        )}

        {/* Form */}
        {!imageData ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Enter image title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Left: Image Upload + Preview */}
            <div className="flex flex-col my-8 items-center md:items-start">
              <p className="block text-gray-700 font-semibold mb-2">Upload Image</p>
              <div className="relative w-64 h-80 rounded-lg overflow-hidden border border-gray-300">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-4 rounded-lg w-64 h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <span>No Image Selected</span>
                  </div>
                )}
                <label
                  htmlFor="image"
                  className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white rounded-full p-4 cursor-pointer shadow-lg flex items-center justify-center"
                  title="Upload Image"
                >
                  <i className="fa-solid fa-plus"></i>
                  <input
                    type="file"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    disabled={loading}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Right: Title + Submit */}
            <div className="flex-1 flex flex-col space-y-6 justify-between">
              <button
                type="submit"
                disabled={loading}
                className={`py-3 rounded-full cursor-pointer font-semibold text-white transition-transform transform ${
                  loading
                    ? "bg-purple-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105"
                }`}
              >
                {loading ? "Creating..." : "Enhance Image with AI"}
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-lg text-center">
            {imageData.generatedImageUrl && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">AI Enhanced Image</h3>
                <img
                  src={imageData.generatedImageUrl}
                  alt="Generated"
                  className="mx-auto rounded-lg shadow-md max-w-[75%] h-auto"
                />
                <a
                  href={imageData.generatedImageUrl}
                  download={`image-${Date.now()}.png`}
                  className="mt-4 inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
                >
                  Download Image
                </a>
              </div>
            )}

            <button
              onClick={() => {
                setImageData(null);
                setSuccess("");
              }}
              className="mt-6 cursor-pointer inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
            >
              Create Another Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
}