import React, { useState } from 'react';
import '../components/stylesheets/Modal.css';
import img1 from '../../public/images/DSC_0063.jpeg';
import img2 from '../components/Pictures/DSC_0538.jpg';

const Modal = ({ isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const images = [img1, img2];

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image">
          <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
        <div className="modal-controls">
          <button onClick={previousImage} className="previous-button">&lt;</button>
          <button onClick={onClose} className="close-button">&#10006;</button>
          <button onClick={nextImage} className="next-button">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;