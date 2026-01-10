import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faSave, faImage } from '@fortawesome/free-solid-svg-icons';
import MediaPickerModal from './MediaPickerModal';

export default function AdminProjectsHeroForm({ initialData }) {
    const { data, setData, post, processing, isDirty } = useForm({
        slides: initialData || [
            { 
                title: 'Solar–Powered Healthcare Facility', 
                description: 'Default description...', 
                tag: 'Commercial', 
                location: 'Los Angeles, CA', 
                image: '' 
            }
        ],
    });

    const [showMediaModal, setShowMediaModal] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState(null);

    const addSlide = () => {
        setData('slides', [
            ...data.slides, 
            { title: 'New Project', description: '', tag: 'Commercial', location: '', image: '' }
        ]);
    };

    const removeSlide = (index) => {
        const newSlides = data.slides.filter((_, i) => i !== index);
        setData('slides', newSlides);
    };

    const updateSlide = (index, field, value) => {
        const newSlides = [...data.slides];
        newSlides[index][field] = value;
        setData('slides', newSlides);
    };

    const openMediaModal = (index) => {
        setActiveSlideIndex(index);
        setShowMediaModal(true);
    };

    const handleImageSelected = (url) => {
        if (activeSlideIndex !== null) {
            updateSlide(activeSlideIndex, 'image', url);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/admin/projects-hero', {
            preserveScroll: true,
            onSuccess: () => alert('Slider Saved!'),
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column gap-3">
                {data.slides.map((slide, index) => (
                    <div key={index} className="card border bg-light">
                        <div className="card-body">
                            <div className="row g-3">
                                
                                {/* Image Preview & Picker */}
                                <div className="col-md-3">
                                    <div 
                                        className="ratio ratio-16x9 bg-white border rounded d-flex align-items-center justify-content-center cursor-pointer overflow-hidden position-relative hover-shadow"
                                        style={{ cursor: 'pointer', borderStyle: 'dashed !important' }}
                                        onClick={() => openMediaModal(index)}
                                    >
                                        {slide.image ? (
                                            <img src={slide.image} alt="Slide" className="w-100 h-100 object-fit-cover" />
                                        ) : (
                                            <div className="d-flex flex-column align-items-center justify-content-center text-secondary">
                                                <FontAwesomeIcon icon={faImage} size="lg" />
                                                <small className="mt-1">Select Image</small>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Text Fields */}
                                <div className="col-md-8">
                                    <div className="row g-2 mb-2">
                                        <div className="col-6">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Title"
                                                value={slide.title}
                                                onChange={(e) => updateSlide(index, 'title', e.target.value)}
                                            />
                                        </div>
                                        <div className="col-6">
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Tag (e.g. Commercial)"
                                                value={slide.tag}
                                                onChange={(e) => updateSlide(index, 'tag', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-2">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Location & Date"
                                            value={slide.location}
                                            onChange={(e) => updateSlide(index, 'location', e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <textarea 
                                            rows="2"
                                            className="form-control"
                                            placeholder="Description"
                                            value={slide.description}
                                            onChange={(e) => updateSlide(index, 'description', e.target.value)}
                                        />
                                    </div>
                                </div>

                                {/* Delete Button */}
                                <div className="col-md-1 d-flex align-items-start justify-content-end">
                                    <button 
                                        type="button" 
                                        onClick={() => removeSlide(index)}
                                        className="btn btn-outline-danger btn-sm"
                                        title="Remove Slide"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <button 
                    type="button" 
                    onClick={addSlide}
                    className="btn btn-link text-success text-decoration-none fw-bold p-0"
                >
                    <FontAwesomeIcon icon={faPlus} className="me-2" /> Add Slide
                </button>

                <button 
                    type="submit" 
                    disabled={processing || !isDirty}
                    className={`btn px-4 fw-bold ${isDirty ? 'btn-success' : 'btn-secondary disabled'}`}
                >
                    {processing ? 'Saving...' : <><FontAwesomeIcon icon={faSave} className="me-2"/> Save Slider</>}
                </button>
            </div>

            <MediaPickerModal 
                isOpen={showMediaModal}
                onClose={() => setShowMediaModal(false)}
                onSelectImage={handleImageSelected}
            />
        </form>
    );
}