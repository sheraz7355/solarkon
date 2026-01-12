import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import { FaFilePdf, FaImage, FaVideo, FaLayerGroup } from 'react-icons/fa';

const MediaManager = ({ onSelect, isModalMode = false, allowedTypes = 'all' }) => {
    const [mediaFiles, setMediaFiles] = useState([]);
    const [filter, setFilter] = useState(allowedTypes === 'pdf' ? 'document' : 'all');
    const [uploading, setUploading] = useState(false);
    const [uploadStatus, setUploadStatus] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchMedia();
    }, []);

    const fetchMedia = async () => {
        try {
            const res = await axios.get('/media');
            setMediaFiles(res.data);
        } catch (err) {
            console.error("Failed to load media", err);
        } finally {
            setLoading(false);
        }
    };

    const handleFileUpload = async (e) => {
        const files = Array.from(e.target.files);
        if (files.length === 0) return;

        setUploading(true);
        const MAX_SIZE_MB = 20; // 20 MB Limit

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            
            // 1. Check Size
            const fileSizeMB = file.size / 1024 / 1024;
            const isImage = file.type.startsWith('image/');

            if (fileSizeMB > MAX_SIZE_MB) {
                if (isImage) {
                    setUploadStatus(`Compressing ${file.name} (Too large)...`);
                    try {
                        // Aggressive compression for large images
                        const options = { maxSizeMB: 1, maxWidthOrHeight: 1920, useWebWorker: true };
                        file = await imageCompression(file, options);
                    } catch (error) {
                        console.warn('Compression failed', error);
                    }
                } else {
                    // Browsers cannot safely compress PDFs/Videos without breaking them
                    alert(`File "${file.name}" is ${fileSizeMB.toFixed(1)}MB. Limit is 20MB. Please compress it manually.`);
                    continue; // Skip this file
                }
            }

            setUploadStatus(`Uploading ${i + 1}/${files.length}: ${file.name}...`);
            const formData = new FormData();
            formData.append('file', file);

            try {
                const res = await axios.post('/media/upload', formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                setMediaFiles(prev => [res.data, ...prev]);
            } catch (err) {
                console.error("Upload failed", err);
                if (err.response && err.response.status === 413) {
                    alert('Server rejected file: Too Large. Check php.ini settings.');
                }
            }
        }
        
        setUploading(false);
        setUploadStatus('');
        e.target.value = null;
    };

    const handleDelete = async (id, e) => {
        e.stopPropagation();
        if(!window.confirm("Delete this file?")) return;
        try {
            await axios.delete(`/media/${id}`);
            setMediaFiles(prev => prev.filter(f => f.id !== id));
        } catch (err) { console.error(err); }
    };

    // --- VIEW / SELECT HANDLER ---
    const handleItemClick = (file) => {
        if (isModalMode) {
            // If selecting for admin, pass URL back
            onSelect(file.url);
        } else {
            // If in Media Manager, open in new tab (PDFs/Images)
            window.open(file.url, '_blank');
        }
    };

    // Filter Logic
    const getFileType = (mime) => {
        if (!mime) return 'other';
        if (mime.includes('image')) return 'image';
        if (mime.includes('video')) return 'video';
        if (mime.includes('pdf')) return 'document';
        return 'other';
    };

    const filteredFiles = mediaFiles.filter(file => {
        const type = getFileType(file.mime_type);
        if (filter === 'all') return true;
        return type === filter;
    });

    return (
        <div className="media-manager p-3 bg-white h-100 d-flex flex-column">
            {/* Header & Upload */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="m-0">Media Library</h5>
                <div>
                    <input type="file" id="mediaUpload" hidden multiple onChange={handleFileUpload} accept="image/*,video/*,.pdf" />
                    <label htmlFor="mediaUpload" className={`btn btn-primary btn-sm ${uploading ? 'disabled' : ''}`}>
                        {uploading ? 'Uploading...' : '+ Upload'}
                    </label>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="d-flex gap-2 mb-3 border-bottom pb-2">
                {[
                    { key: 'all', icon: <FaLayerGroup />, label: 'All' },
                    { key: 'image', icon: <FaImage />, label: 'Images' },
                    { key: 'video', icon: <FaVideo />, label: 'Videos' },
                    { key: 'document', icon: <FaFilePdf />, label: 'PDFs' },
                ].map(tab => (
                    <button
                        key={tab.key}
                        onClick={() => setFilter(tab.key)}
                        className={`btn btn-sm d-flex align-items-center gap-2 ${filter === tab.key ? 'btn-dark' : 'btn-light border'}`}
                    >
                        {tab.icon} {tab.label}
                    </button>
                ))}
            </div>

            {uploadStatus && <div className="alert alert-info py-1 small">{uploadStatus}</div>}

            <div className="flex-grow-1 overflow-auto bg-light p-2 rounded">
                {loading ? <div className="text-center py-5">Loading...</div> : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '10px' }}>
                        {filteredFiles.map((file) => (
                            <div 
                                key={file.id} 
                                className="position-relative bg-white border rounded shadow-sm overflow-hidden group"
                                style={{ aspectRatio: '1/1', cursor: 'pointer' }}
                                onClick={() => handleItemClick(file)}
                            >
                                {/* Thumbnail Logic */}
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center p-2">
                                    {getFileType(file.mime_type) === 'image' && (
                                        <img src={file.url} alt={file.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    )}
                                    {getFileType(file.mime_type) === 'video' && (
                                        <FaVideo size={40} className="text-secondary" />
                                    )}
                                    {getFileType(file.mime_type) === 'document' && (
                                        <div className="text-center text-danger">
                                            <FaFilePdf size={40} />
                                            <div className="small fw-bold mt-1 text-dark text-truncate" style={{fontSize: '10px', maxWidth: '100px'}}>
                                                {file.name}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Overlay for Delete */}
                                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-between p-2"
                                     style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent, rgba(0,0,0,0.6))', opacity: 0 }}
                                     onMouseEnter={e => e.currentTarget.style.opacity = 1}
                                     onMouseLeave={e => e.currentTarget.style.opacity = 0}
                                >
                                    <div className="text-end">
                                        <button className="btn btn-danger btn-sm py-0 px-1" onClick={(e) => handleDelete(file.id, e)}>&times;</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MediaManager;