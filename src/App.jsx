import { useState } from 'react';
import './App.css';
import Form from './form/form';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleClickOutside = (e) => {
    if (e.target.classList.contains('modal-section')) { // Use classList.contains for better compatibility
      closeModal();
    }
  };

  return (
    <>
      <div
        className={`modal-section ${isModalOpen ? 'overlay' : ''}`}
        onClick={handleClickOutside}
      >
        <h1>User Details Modal</h1>
        <button onClick={openModal}>Open Form</button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <Form setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
