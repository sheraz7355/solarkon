import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';

const MediaManager = ({ onSelect, isModalMode = false }) => {
  const [mediaFiles, setMediaFiles] = useState([]);
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

  // --- HELPER: FORMAT BYTES TO KB/MB ---
  const formatBytes = (bytes, decimals = 0) => {
    if (!bytes) return '0 B';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  };

  // --- MULTI-UPLOAD LOGIC ---
  const handleFileUpload = async (e) => {
    // 1. Get all selected files
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setUploading(true);
    let successCount = 0;
    
    // 2. Process each file one by one
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        try {
            setUploadStatus(`Processing ${i + 1}/${files.length}: ${file.name}...`);
            
            let fileToUpload = file;
            const isImage = file.type.startsWith('image/');
            const isVideo = file.type.startsWith('video/');

            // ==================================================
            // ✅ AGGRESSIVE COMPRESSION LOGIC (UPDATED HERE)
            // ==================================================
            if (isImage) {
                const options = {
                    // Target ~200KB (WhatsApp Size)
                    maxSizeMB: 0.2,           
                    
                    // Reduce dimensions to HD (1280px) 
                    // 1920px is often too big for simple website assets
                    maxWidthOrHeight: 1280, 
                    
                    // Start compression at 70% quality immediately
                    initialQuality: 0.7,

                    useWebWorker: true,      
                    fileType: 'image/webp'   
                };

                const compressedFile = await imageCompression(file, options);
                
                // Debug: Check size reduction in console
                console.log(`Compressed ${file.name}: ${(file.size/1024).toFixed(0)}KB -> ${(compressedFile.size/1024).toFixed(0)}KB`);

                const newFileName = file.name.split('.')[0] + '.webp';
                fileToUpload = new File([compressedFile], newFileName, { type: 'image/webp' });
            } 
            else if (isVideo) {
                 if (file.size > 50 * 1024 * 1024) { 
                     console.warn(`Skipped ${file.name}: Too large`);
                     continue; 
                 }
            }

            const formData = new FormData();
            formData.append('file', fileToUpload); 

            // Upload
            const res = await axios.post('/media/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            // Add to list immediately
            setMediaFiles(prev => [res.data, ...prev]); 
            successCount++;

        } catch (err) {
            console.error(`Failed to upload ${file.name}`, err);
        }
    }

    setUploadStatus(`Done! Uploaded ${successCount}/${files.length} files.`);
    setUploading(false);
    
    // Clear status after 3 seconds
    setTimeout(() => setUploadStatus(''), 3000);
    e.target.value = null;
  };

  const handleDelete = async (id, e) => {
    e.stopPropagation();
    if(!window.confirm("Delete this media?")) return;
    try {
      await axios.delete(`/media/${id}`);
      setMediaFiles(prevFiles => prevFiles.filter(img => img.id !== id && img._id !== id)); 
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  const isVideo = (mime) => mime && mime.startsWith('video');

  return (
    <div className="media-manager p-3 bg-white border rounded h-100 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h5 className="m-0">Media Library</h5>
        <div>
          {/* ENABLE MULTIPLE SELECTION */}
          <input 
            type="file" 
            id="fileUpload" 
            hidden 
            multiple 
            onChange={handleFileUpload} 
            accept="image/*,video/*"
          />
          <label 
            htmlFor="fileUpload" 
            className={`btn btn-primary ${uploading ? 'disabled' : ''}`}
          >
            {uploading ? 'Uploading...' : '+ Upload Media'}
          </label>
        </div>
      </div>

      {uploadStatus && <div className="alert alert-info py-1 mb-3 small">{uploadStatus}</div>}

      <div className="flex-grow-1 overflow-auto">
        {loading ? <div className="text-center py-5">Loading...</div> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
            {mediaFiles.map((file) => (
                <div 
                  key={file.id || file._id} 
                  className="position-relative border rounded overflow-hidden shadow-sm bg-light group"
                  style={{ cursor: 'pointer', aspectRatio: '1/1' }}
                  onClick={() => isModalMode && onSelect(file.url)} 
                >
                  {isVideo(file.mime_type) ? (
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-dark text-white">
                        <video src={file.url} style={{ width: '100%', height: '100%', objectFit: 'cover' }} muted />
                        <div className="position-absolute d-flex align-items-center justify-content-center" style={{ pointerEvents: 'none' }}>
                             <svg width="40" height="40" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/></svg>
                        </div>
                    </div>
                  ) : (
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center p-2 bg-white">
                        <img 
                            src={file.url} 
                            alt="media" 
                            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                        />
                    </div>
                  )}
                
                  {/* --- SIZE BADGE --- */}
                  <div className="position-absolute top-0 end-0 m-1">
                      <span className="badge bg-dark bg-opacity-75" style={{fontSize: '0.65rem'}}>
                          {formatBytes(file.size)}
                      </span>
                  </div>

                  <div className="overlay-actions position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-2" 
                       style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)', opacity: 0, transition: 'opacity 0.2s' }}
                       onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                       onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                  >
                      <div className="d-flex justify-content-between align-items-center w-100">
                          <small className="text-white text-truncate" style={{maxWidth: '70%', fontSize: '0.75rem'}}>{file.name}</small>
                          <button 
                              className="btn btn-danger btn-sm p-0 d-flex justify-content-center align-items-center" 
                              style={{ width: '28px', height: '28px' }}
                              onClick={(e) => handleDelete(file.id || file._id, e)}
                          >
                             <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>&times;</span>
                          </button>
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