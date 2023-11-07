import React from "react";
import ImageGallery from "../components/ImageGallery"; // Import the ImageGallery component

const App = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Image Gallery</h1>
      <ImageGallery /> {/* Render the ImageGallery component */}
    </div>
  );
};

export default App;
