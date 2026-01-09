import React, { useState } from 'react';
import { Head, router } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faSolarPanel, faCheckCircle, faClock, faStar } from '@fortawesome/free-solid-svg-icons';

import AdminProjectEditor from '../../components/admin/AdminProjectEditor';

export default function Projects({ projects }) {
    const [isEditorOpen, setIsEditorOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);

    const handleCreate = () => {
        setEditingProject(null);
        setIsEditorOpen(true);
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setIsEditorOpen(true);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            router.delete(`/admin/projects/${id}`);
        }
    };

    return (
        <div className="container-fluid p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <Head title="Manage Projects" />

            <div className="mb-5">
                <h2 className="fw-bold" style={{ color: '#14532d' }}>Projects Manager</h2>
                <p className="text-muted">Manage all your projects here. Mark them as "Featured" to show them on the Hero Slider.</p>
            </div>

            {/* HEADER ACTIONS */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="fw-bold text-dark m-0">All Projects</h4>
                <button onClick={handleCreate} className="btn btn-success text-white rounded-pill px-4 fw-semibold shadow-sm">
                    <FontAwesomeIcon icon={faPlus} className="me-2" /> Add New Project
                </button>
            </div>

            {/* PROJECT GRID */}
            <div className="row g-4">
                {projects && projects.map((p) => (
                    <div key={p.id} className="col-md-6 col-lg-4">
                        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                            {/* Image Header */}
                            <div className="position-relative" style={{ height: '200px' }}>
                                <img src={p.image} alt={p.title} className="w-100 h-100 object-fit-cover" />
                                
                                {/* Status Badge */}
                                <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
                                    {p.is_featured === 1 && (
                                        <span className="badge rounded-pill bg-warning text-dark shadow-sm border" title="Featured on Hero">
                                            <FontAwesomeIcon icon={faStar} /> Featured
                                        </span>
                                    )}
                                    <span className="badge rounded-pill bg-white text-dark shadow-sm border">
                                        {p.status === 'Completed' ? <span className="text-success"><FontAwesomeIcon icon={faCheckCircle} /> Completed</span> : <span className="text-warning"><FontAwesomeIcon icon={faClock} /> Ongoing</span>}
                                    </span>
                                </div>
                            </div>

                            {/* Body */}
                            <div className="card-body p-4 d-flex flex-column">
                                <small className="fw-bold text-success mb-2 text-uppercase">{p.tag}</small>
                                <h5 className="fw-bold text-dark mb-2 text-truncate">{p.title}</h5>
                                <p className="text-muted small mb-4 flex-grow-1" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.description}</p>
                                
                                <div className="d-flex gap-2 pt-3 border-top">
                                    <button onClick={() => handleEdit(p)} className="btn btn-light flex-fill fw-medium border"><FontAwesomeIcon icon={faEdit} className="me-1" /> Edit</button>
                                    <button onClick={() => handleDelete(p.id)} className="btn btn-outline-danger flex-fill fw-medium"><FontAwesomeIcon icon={faTrash} className="me-1" /> Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                
                {(!projects || projects.length === 0) && (
                    <div className="col-12">
                        <div className="text-center py-5 bg-white rounded-4 border border-dashed">
                            <FontAwesomeIcon icon={faSolarPanel} className="text-secondary opacity-25 mb-3" size="3x" />
                            <p className="text-muted fw-medium">No projects found. Add one to get started.</p>
                        </div>
                    </div>
                )}
            </div>

            {isEditorOpen && <AdminProjectEditor project={editingProject} onClose={() => setIsEditorOpen(false)} />}
        </div>
    );
}