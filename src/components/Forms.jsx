import React, { useState } from 'react';
import Modal from './Modal';
import CreateForm from './CreateForm';

const Forms = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forms, setForms] = useState([

  ]);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleCreateForm = (formData) => {
    // Simulate image upload
    const imageUrl = URL.createObjectURL(formData.get('image'));
    const newForm = {
      id: forms.length + 1,
      title: formData.get('title'),
      description: formData.get('description'),
      imageUrl: imageUrl,
    };
    setForms([...forms, newForm]);
    handleModalClose();
  };

  return (
    <div className="bg-black h-screen w-full p-4">
      <div className="w-full max-w-3xl mx-auto">
        <button
          onClick={handleModalOpen}
          className="mb-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200"
        >
          Create Form
        </button>

        {forms.map((form) => (
          <div key={form.id} className="bg-gray-800 p-6 mb-4 rounded-lg shadow-lg transition duration-200 hover:shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-2">{form.title}</h2>
            <p className="text-gray-400">{form.description}</p>
            {form.imageUrl && (
              <img src={form.imageUrl} alt={form.title} className="mt-4 rounded-lg" style={{ width: '100%', maxHeight: '300px' }} />
            )}
          </div>
        ))}

        {isModalOpen && (
          <Modal onClose={handleModalClose}>
            <CreateForm onCreateForm={handleCreateForm} onClose={handleModalClose} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Forms;


    //     <div className='bg-black h-screen w-full grid place-content-center'>
    //   <div className='bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg'>
    //     <h1 className='text-4xl text-white mb-3'>Create Form</h1>
    //     <p className='text-gray-400 text-xl mb-4'>Create responses to share with community!</p>

    //     <label htmlFor='formTitle' className='text-2xl text-white mt-4 block'>Form Title</label>
    //     <input
    //       id='formTitle'
    //       type='text'
    //       placeholder="What's the title of your form?"
    //       className='bg-slate-800 text-white mt-2 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
    //     />

    //     <label htmlFor='formDescription' className='text-2xl text-white mt-6 block'>Form Description</label>
    //     <textarea
    //       id='formDescription'
    //       placeholder="Content"
    //       className='bg-slate-800 text-white mt-2 p-3 rounded-md w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
    //     />

    //     <div className='mt-6'>
    //       <label htmlFor='emailCheckbox' className='flex items-center text-white'>
    //         <input
    //           id='emailCheckbox'
    //           type='checkbox'
    //           className='form-checkbox h-5 w-5 text-blue-600'
    //         />
    //         <span className='ml-2 text-xl'>Ask for email address</span>
    //       </label>
    //     </div>

    //     <button className='mt-8 w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'>
    //       Create Form
    //     </button>
    //   </div>
    // </div>