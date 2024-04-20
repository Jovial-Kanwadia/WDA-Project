import React,{useState} from 'react'
import '../components/stylesheets/Events.css';
import img1 from '../components/Pictures/IIIT-Lucknow-Featured-Image.jpg';
import img2 from '../components/Pictures/afterdark.jpeg';
import img3 from '../components/Pictures/crotonia.jpeg';
import img4 from '../components/Pictures/zephyr.jpeg';
import Modal from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  
  const openModal = () => setIsModalOpen(true);
  const openModal2 = () => setIsModal2Open(true);
  const openModal3 = () => setIsModal3Open(true);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModal2Open(false);
    setIsModal3Open(false);
  };
  return (
    <div className='box'>
    <div className='box1'>
      <div className='text1'>
        <h1>IIIT LUCKNOW</h1>
        <h2>down the memory lane...</h2>
      </div>
      <div className='abx'></div>
      <div className='img1'><img src={img1}></img></div>
    </div>
    <div className='grid'>
      <div className='box11' onClick={openModal}><img src={img2}></img></div>
      <div className='box22' onClick={openModal2}><img src={img3}></img></div>
      <div className='box33' onClick={openModal3}><img src={img4}></img></div>
    </div>
    <Modal isOpen={isModalOpen} onClose={closeModal} />
    <Modal2 isOpen={isModal2Open} onClose={closeModal} />
    <Modal3 isOpen={isModal3Open} onClose={closeModal} />
    </div>
    
  )
}

export default Events