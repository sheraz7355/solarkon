import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSolarPanel, faCheckCircle, faClock, faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';

import AdminProjectEditor from '../../components/admin/AdminProjectEditor';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    // 1. Fetch Data via Axios
    const fetchProjects = async () => {
        try {
            const res = await axios.get('/admin/projects-data');
            setProjects(res.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching projects:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const handleCreate = () => {
        setEditingProject(null);
        setIsEditorOpen(true);
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setIsEditorOpen(true);
    };

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            try {
                await axios.delete(`/admin/projects/${id}`);
                fetchProjects(); // Refresh list
            } catch (error) {
                alert('Failed to delete project');
            }
        }
    };

    const handleSaved = () => {
        setIsEditorOpen(false);
        fetchProjects(); // Refresh list after save
    };

    if (loading) return <div className="p-5 text-center"><FontAwesomeIcon icon={faSpinner} spin size="2x" className="text-success"/></div>;

    return (
        <div className="container-fluid px-4 py-4" style={{ background: '#f8faf9', minHeight: '100%' }}>
            
            {/* HEADER */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                <div>
                    <h2 className="fw-bold mb-1" style={{ color: '#14532d' }}>Projects Manager</h2>
                    <p className="text-muted mb-0">Manage projects. Mark as "Featured" to show on the Home Slider.</p>
                </div>
                <button 
                    onClick={handleCreate} 
                    className="btn btn-success text-white rounded-pill px-4 fw-bold shadow-sm"
                >
                    <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Project
                </button>
            </div>

            {/* PROJECT GRID */}
            <div className="row g-4">
                {projects.map((p) => (
                    <div key={p.id} className="col-12 col-md-6 col-xl-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden bg-white">
                            
                            {/* Image Header */}
                            <div className="position-relative" style={{ height: '220px' }}>
                                <img 
                                    src={p.image} 
                                    alt={p.title} 
                                    className="w-100 h-100 object-fit-cover" 
                                />
                                <div className="position-absolute top-0 end-0 m-3 d-flex flex-column gap-2 align-items-end">
                                    {p.is_featured === 1 && (
                                        <span className="badge rounded-pill bg-warning text-dark shadow-sm border border-white">
                                            <FontAwesomeIcon icon={faStar} className="me-1" /> Featured
                                        </span>
                                    )}
                                    <span className="badge rounded-pill bg-white text-dark shadow-sm border border-light">
                                        {p.status === 'Completed' ? (
                                            <><FontAwesomeIcon icon={faCheckCircle} className="text-success me-1" /> Completed</>
                                        ) : (
                                            <><FontAwesomeIcon icon={faClock} className="text-warning me-1" /> Ongoing</>
                                        )}
                                    </span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="card-body p-4 d-flex flex-column">
                                <small className="fw-bold text-success text-uppercase ls-1 mb-2 d-block">{p.tag}</small>
                                <h5 className="fw-bold text-dark mb-2 text-truncate">{p.title}</h5>
                                <p className="text-muted small mb-4" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                    {p.description}
                                </p>
                                
                                <div className="mt-auto d-flex gap-2 pt-3 border-top">
                                    <button onClick={() => handleEdit(p)} className="btn btn-light flex-grow-1 fw-semibold border">
                                        <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit
                                    </button>
                                    <button onClick={() => handleDelete(p.id)} className="btn btn-light text-danger flex-grow-1 fw-semibold border">
                                        <FontAwesomeIcon icon={faTrash} className="me-2" /> Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {projects.length === 0 && (
                    <div className="col-12">
                        <div className="text-center py-5 bg-white rounded-4 border border-dashed">
                            <FontAwesomeIcon icon={faSolarPanel} className="text-secondary opacity-50 mb-3" size="3x" />
                            <h5 className="fw-bold text-secondary">No projects found</h5>
                            <p className="text-muted">Click "Add New Project" to get started.</p>
                        </div>
                    </div>
                )}
            </div>

            {/* EDITOR MODAL */}
            {isEditorOpen && (
                <AdminProjectEditor 
                    project={editingProject} 
                    onClose={() => setIsEditorOpen(false)} 
                    onSuccess={handleSaved}
                />
            )}
        </div>
    );
}