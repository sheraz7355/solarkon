import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSave, faImage, faRotateLeft, faExclamationTriangle, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

// 1. IMPORT THE MODAL YOU JUST MADE
import MediaPickerModal from './MediaPickerModal'; // <--- Check this path!

export default function AdminPartnersForm({ initialData, onRefresh }) {
    
    // 2. State to control if the modal is visible
    const [showMediaModal, setShowMediaModal] = useState(false);

    const { data, setData, post, processing, isDirty, reset } = useForm({
        logos: initialData || [] 
    });

    // 3. This function runs when you click an image in the modal
    const handleImageSelected = (url) => {
        setData('logos', [...data.logos, url]); // Add URL to list
        // Modal closes automatically via the onClose prop in the component
    };

    const removeLogo = (index) => {
        setData('logos', data.logos.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/logos', {
            onSuccess: () => onRefresh(),
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mb-5">
                {/* ... (Your Alert for Unsaved Changes) ... */}
                
                <div className="card border-0 shadow-sm rounded-4">
                    <div className="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 fw-bold text-success"><FontAwesomeIcon icon={faImage} className="me-2"/> Partner Logos</h5>
                        
                        {/* 4. BUTTON TO OPEN MODAL */}
                        <button 
                            type="button"
                            className="btn btn-sm btn-success text-white shadow-sm"
                            onClick={() => setShowMediaModal(true)} // <--- Sets state to true
                        >
                            <FontAwesomeIcon icon={faFolderOpen} className="me-2"/> 
                            Select from Library
                        </button>
                    </div>

                    <div className="card-body p-4">
                        <div className="row g-3">
                            {data.logos.map((url, index) => (
                                <div key={index} className="col-6 col-md-3 col-lg-2">
                                    <div className="position-relative rounded-3 overflow-hidden border shadow-sm bg-light d-flex align-items-center justify-content-center" style={{ height: '100px', padding: '10px' }}>
                                        {/* Simple Image Preview */}
                                        <img src={url} alt="Partner" className="mw-100 mh-100 object-fit-contain" />
                                        
                                        <button 
                                            type="button" 
                                            onClick={() => removeLogo(index)} 
                                            className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1 rounded-circle p-0 d-flex align-items-center justify-content-center" 
                                            style={{ width: '25px', height: '25px' }}
                                        >
                                            <FontAwesomeIcon icon={faTrash} size="xs"/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Save Buttons ... */}
                <div className="d-flex justify-content-end mt-3">
                    {/* ... buttons ... */}
                    <button type="submit" disabled={processing || !isDirty} className={`btn px-5 rounded-pill ${isDirty ? 'btn-success' : 'btn-secondary'}`}>
                        {processing ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>

            {/* 5. RENDER THE MODAL AT THE BOTTOM */}
            <MediaPickerModal 
                isOpen={showMediaModal}
                onClose={() => setShowMediaModal(false)}
                onSelectImage={handleImageSelected}
            />
        </>
    );
}