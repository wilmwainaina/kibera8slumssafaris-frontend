import React from "react";

const ImageGallery = () => {
  // Sample image URLs
  const imageUrls = [
    "url_to_your_image_1.jpg",
    "url_to_your_image_2.jpg",
    // Add more image URLs as needed
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="bg-gray-200 p-2 rounded-md">
          <img
            src={imageUrl}
            alt={`Image ${index}`}
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
