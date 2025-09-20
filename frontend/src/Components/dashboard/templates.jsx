import { useState } from 'react';

export default function Template() {
  const [selectedImage, setSelectedImage] = useState(null); // State to store clicked image

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal
  };

  return (
    <>
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Templates</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* Template Card 1 */}
        <div
          className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
          onClick={() => handleImageClick('/image/template1.png')}
        >
          <img
            src="/image/template1.png"
            alt="Template 1"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-gray-800 mb-2">Flower Pot Poster</h3>
            <p className="text-gray-600 text-sm flex-grow">
              Bright and vibrant poster perfect for product promotions on social media.
            </p>
          </div>
        </div>

        {/* Template Card 2 */}
        <div
          className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
          onClick={() => handleImageClick('/image/template2.png')}
        >
          <img
            src="/image/template2.png"
            alt="Template 2"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-gray-800 mb-2">Hand-Made Craft Poster</h3>
            <p className="text-gray-600 text-sm flex-grow">
              Clean and modern design to showcase new products on online shopping application like-Amazon.
            </p>
          </div>
        </div>

        {/* Template Card 3 */}
        <div
          className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex flex-col"
          onClick={() => handleImageClick('/image/template3.png')}
        >
          <img
            src="/image/template3.png"
            alt="Template 3"
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-gray-800 mb-2">Craft Poster</h3>
            <p className="text-gray-600 text-sm flex-grow">
              Eye-catching template to promote product on social platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Modal to display the clicked image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-[#000000b3]  bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal on background click
        >
          <div className="relative max-w-4xl max-h-4xl">
            <img
              src={selectedImage}
              alt="Selected Template"
              className="w-[90vw] h-[85vh] object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-2 cursor-pointer right-2 text-white bg-black bg-opacity-50 rounded-full p-3"
            >
              X
            </button>
          </div>
        </div>
      )}
    </>
  );
}
