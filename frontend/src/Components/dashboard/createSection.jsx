import { useNavigate } from 'react-router-dom';

export default function CreateSection() {

  const navigate = useNavigate();

  const handleCreateImage = () => {
    navigate('/enhance-image');
  };

  const handleCreateAIPoster = () => {
    navigate('/create-ai-poster');
  };

  const handleCreateVideo = () => {
    navigate('/create-ai-video');
  };

  return (
    <>
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mr-4">
            <i className="fas fa-image text-2xl text-purple-600"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Image Enhancer</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Transforms your product's ordinary pictures into professional-grade visuals.
        </p>
        <button onClick={handleCreateImage} className="bg-purple-600 cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition">
          Start Creating
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mr-4">
            <i className="fas fa-robot text-2xl text-indigo-600"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Create Poster</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Get AI powered poster by uploading an image, writing a title, description, and choosing your language.
        </p>
        <button onClick={handleCreateAIPoster} className="bg-indigo-600 cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition">
          Start Creating
        </button>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mr-4">
            <i className="fas fa-video text-2xl text-pink-600"></i>
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Create Story Video</h3>
        </div>
        <p className="text-gray-600 mb-4">
          Get AI powered short story video of product by uploading product's image and description.
        </p>
        <button onClick={handleCreateVideo} className="bg-pink-600 cursor-pointer text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-700 transition">
          Start Creating
        </button>
      </div>
    </>
  );
}