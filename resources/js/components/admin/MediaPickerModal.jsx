import React from 'react';
// IMPORTANT: Update this import path to point to where you saved your MediaManager page
// Example: if MediaManager is in resources/js/Pages/admin/MediaManager.jsx
import MediaManager from '../../Pages/admin/MediaManager'; 

const MediaPickerModal = ({ isOpen, onClose, onSelectImage }) => {
  // If the modal is not "open", return null (render nothing)
  if (!isOpen) return null;

  return (
    // Bootstrap Modal Backdrop
    <div 
        className="modal show d-block" 
        tabIndex="-1" 
        style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1055 }}
        onClick={onClose} // Close if clicking outside
    >
      <div 
        className="modal-dialog modal-xl modal-dialog-scrollable modal-dialog-centered"
        onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <div className="modal-content" style={{ height: '90vh' }}>
          
          <div className="modal-header">
            <h5 className="modal-title">Select Media</h5>
            <button 
                type="button" 
                className="btn-close" 
                onClick={onClose}
                aria-label="Close"
            ></button>
          </div>

          <div className="modal-body p-0 bg-light">
            {/* 
               We reuse your existing MediaManager here.
               We pass isModalMode={true} so it knows to behave like a picker.
            */}
            <MediaManager 
              isModalMode={true} 
              onSelect={(url) => {
                onSelectImage(url); // Pass the URL back to the form
                onClose();          // Close the modal automatically
              }} 
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default MediaPickerModal;