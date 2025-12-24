import React, { useState, useEffect } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
// Import FontAwesome for better icons (optional, but standard)
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
// import { faTrash, faPlay } from '@fortawesome/free-solid-svg-icons';

const MediaManager = ({ onSelect, isModalMode = false }) => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState(''); 
  const [loading, setLoading] = useState(true);

  // 1. FETCH DATA
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

  // 2. UPLOAD LOGIC
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    
    try {
      let fileToUpload = file;
      const isImage = file.type.startsWith('image/');
      const isVideo = file.type.startsWith('video/');

      if (isImage) {
        setUploadStatus(`Compressing image...`);
        const options = {
          maxSizeMB: 1,           
          maxWidthOrHeight: 1920, 
          useWebWorker: true,      
          fileType: 'image/webp'   
        };
        const compressedFile = await imageCompression(file, options);
        const newFileName = file.name.split('.')[0] + '.webp';
        fileToUpload = new File([compressedFile], newFileName, { type: 'image/webp' });
      } 
      else if (isVideo) {
         if (file.size > 50 * 1024 * 1024) { 
             alert("Video is too large! Please upload under 50MB.");
             setUploading(false);
             return;
         }
         setUploadStatus(`Preparing video...`);
      }

      setUploadStatus('Uploading to server...');
      const formData = new FormData();
      formData.append('file', fileToUpload); 

      const res = await axios.post('/media/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setMediaFiles([res.data, ...mediaFiles]); 
      setUploadStatus('Done!');

    } catch (err) {
      console.error(err);
      const errMsg = err.response?.data?.message || "Upload failed.";
      alert(errMsg);
    } finally {
      setUploading(false);
      setUploadStatus('');
      e.target.value = null;
    }
  };

  // ---------------------------------------------------------
  // ✅ 3. DELETE LOGIC (This is what you asked for)
  // ---------------------------------------------------------
  const handleDelete = async (id, e) => {
    // Stop the click from bubbling up (prevents selecting the image while deleting)
    e.stopPropagation(); 
    
    // 1. Ask for confirmation
    if(!window.confirm("Are you sure you want to permanently delete this file?")) return;
    
    try {
      // 2. Send DELETE request to Laravel Route: Route::delete('/media/{id}')...
      await axios.delete(`/media/${id}`);
      
      // 3. Update UI immediately (remove the item from the array)
      setMediaFiles(prevFiles => prevFiles.filter(img => img.id !== id && img._id !== id)); 
    } catch (err) {
      console.error("Delete failed", err);
      alert("Failed to delete image.");
    }
  };

  const isVideo = (mime) => mime && mime.startsWith('video');

  return (
    <div className="media-manager p-3 bg-white border rounded h-100 d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <h5 className="m-0">Media Library</h5>
        <div>
          <input 
            type="file" 
            id="fileUpload" 
            hidden 
            onChange={handleFileUpload} 
            accept="image/*,video/*"
          />
          <label 
            htmlFor="fileUpload" 
            className={`btn btn-primary ${uploading ? 'disabled' : ''}`}
          >
            {uploading ? 'Processing...' : '+ Upload Media'}
          </label>
        </div>
      </div>

      {uploading && <div className="alert alert-info py-1 mb-3 small">{uploadStatus}</div>}

      <div className="flex-grow-1 overflow-auto">
        {loading ? <div className="text-center py-5">Loading...</div> : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
            {mediaFiles.map((file) => (
                <div 
                  key={file.id || file._id} 
                  className="position-relative border rounded overflow-hidden shadow-sm bg-light group" // Added 'group' for hover
                  style={{ cursor: 'pointer', aspectRatio: '1/1' }}
                  onClick={() => isModalMode && onSelect(file.url)} 
                  onMouseEnter={(e) => {
                     // Manual hover logic if CSS group-hover isn't set up
                     const overlay = e.currentTarget.querySelector('.overlay-actions');
                     if(overlay) overlay.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                     const overlay = e.currentTarget.querySelector('.overlay-actions');
                     if(overlay) overlay.style.opacity = '0';
                  }}
                >
                  {isVideo(file.mime_type) ? (
                    // --- VIDEO DISPLAY ---
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-dark text-white">
                        <video 
                           src={file.url} 
                           style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                           muted
                        />
                        <div className="position-absolute d-flex align-items-center justify-content-center" style={{ pointerEvents: 'none' }}>
                             {/* Play Icon */}
                             <svg width="40" height="40" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                             </svg>
                        </div>
                    </div>
                  ) : (
                    // --- IMAGE DISPLAY (FIXED LOGOS) ---
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center p-2 bg-white">
                        <img 
                            src={file.url} 
                            alt="media" 
                            style={{ 
                                maxWidth: '100%', 
                                maxHeight: '100%', 
                                objectFit: 'contain', // ✅ FIX: Prevents cropping of logos
                                filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.1))' 
                            }} 
                        />
                    </div>
                  )}
                
                  {/* --- DELETE OVERLAY --- */}
                  <div 
                      className="overlay-actions position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-2" 
                      style={{ 
                          transition: 'opacity 0.2s', 
                          background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                          opacity: 0 // Hidden by default, shown on hover
                      }}
                  >
                      <div className="d-flex justify-content-between align-items-center w-100">
                          <small className="text-white text-truncate" style={{maxWidth: '70%', fontSize: '0.75rem'}}>
                            {file.name}
                          </small>
                          
                          {/* DELETE BUTTON */}
                          <button 
                              className="btn btn-danger btn-sm p-0 d-flex justify-content-center align-items-center" 
                              style={{ width: '28px', height: '28px', borderRadius: '4px' }}
                              onClick={(e) => handleDelete(file.id || file._id, e)}
                              title="Delete File"
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