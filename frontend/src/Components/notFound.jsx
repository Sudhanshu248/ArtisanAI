import { useNavigate } from 'react-router-dom';

export default function NotFound() {

  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-pink-600 to-pink-400 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-lg p-10 sm:p-8 md:p-12">

        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-purple-700 mb-2 text-center"> 404 </h1>
        <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-700 mb-12 text-center"> Page Not Found </h4>

        {/* Error Message */}
        <div className="mb-8 p-4 bg-red-100 text-red-700 text-center rounded-md font-semibold flex items-center justify-center space-x-2">
          <i className="fas fa-exclamation-circle text-xl"></i>
          <span className="text-sm sm:text-base">Sorry! The page you are looking for does not exist.</span>
        </div>

        {/* Button to redirect to homepage */}
        <div className="text-center">
          <button
            onClick={handleBtn}
            className="px-6 py-3 cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
}