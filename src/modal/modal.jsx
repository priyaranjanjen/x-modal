import Modal from 'react-modal'

Modal.setAppElement('#root');

export default function ModalWrapper({ isOpen, setIsOpen, children }) {

    const handleClose = () => {
        setIsOpen(false)
    }

    const customStyles = {
        content: {
            width : '95%',
            maxWidth: '572px',
            top: '50%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-50%)',
            height: 'fit-content',
            maxHeight: '90vh',
            background : '#fff',
            border: '0',
            borderRadius : '15px',
            padding:'2rem',
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={handleClose}
            shouldCloseOnOverlayClick={true}
            style={customStyles}
            className='modal'
        >
            {/* <div className='modal-content'>
                {children}
            </div> */}
                {children}

        </Modal>
    )
}