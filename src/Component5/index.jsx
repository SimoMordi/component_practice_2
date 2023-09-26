import { useState } from "react";
import './index.css'

const ImageCarousel = () => {
  const [images] = useState([
    "https://images.theconversation.com/files/541015/original/file-20230803-19-fmuwe.jpg?ixlib=rb-1.1.0&rect=62%2C416%2C6960%2C3480&q=45&auto=format&w=1356&h=668&fit=crop",
    "https://www.hartz.com/wp-content/uploads/2023/05/do-cats-only-meow-to-humans-1.jpg",
    "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_square.png",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <button onClick={previousImage} disabled={currentIndex === 0}>Previous</button>
      <img className="images" src={images[currentIndex]} alt="" />
      <button
        onClick={nextImage}
        disabled={currentIndex === images.length - 1}
      >next</button>
    </div>
  );
};

export default ImageCarousel;
