import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrash, FaSave, FaFilePdf, FaSpinner, FaExclamationTriangle } from 'react-icons/fa';
import MediaPickerModal from '../../components/admin/MediaPickerModal';

export default function AdminSolutions() {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    
    // --- 1. SET DEFAULTS HERE ---
    const defaultData = {
        'off-grid': [
            { label: '5MW', pdf: '', size: '0 MB' },
            { label: '10MW', pdf: '', size: '0 MB' },
            { label: '50MW', pdf: '', size: '0 MB' },
        ],
        'hybrid': [
            { label: '5MW', pdf: '', size: '0 MB' },
            { label: '10MW', pdf: '', size: '0 MB' },
            { label: '50MW', pdf: '', size: '0 MB' },
        ],
        'on-grid': [
            { label: '5MW', pdf: '', size: '0 MB' },
            { label: '10MW', pdf: '', size: '0 MB' },
            { label: '50MW', pdf: '', size: '0 MB' },
        ]
    };

    const [systems, setSystems] = useState(defaultData);
    const [initialState, setInitialState] = useState(null); // Snapshot for dirty check

    const [showPicker, setShowPicker] = useState(false);
    const [pickerTarget, setPickerTarget] = useState({ system: '', index: 0 });

    // --- DIRTY CHECK LOGIC ---
    const isDirty = JSON.stringify(systems) !== JSON.stringify(initialState);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await axios.get('/admin/solutions-data');
            let loadedData = defaultData;

            // Merge DB data if exists
            if (res.data && Object.keys(res.data).length > 0) {
                 loadedData = { ...defaultData, ...res.data };
            }
            
            setSystems(loadedData);
            setInitialState(JSON.parse(JSON.stringify(loadedData))); // Create deep copy snapshot
        } catch (err) {
            console.error("Error fetching solutions, using defaults", err);
            setInitialState(defaultData);
        } finally {
            setLoading(false);
        }
    };

    const handleAddCapacity = (key) => {
        const newCap = { label: 'New Capacity', pdf: '', size: '0 MB' };
        setSystems(prev => ({
            ...prev,
            [key]: [...prev[key], newCap]
        }));
    };

    const handleRemoveCapacity = (key, index) => {
        if(!confirm('Remove this capacity option?')) return;
        const updatedList = [...systems[key]];
        updatedList.splice(index, 1);
        setSystems(prev => ({ ...prev, [key]: updatedList }));
    };

    const handleChange = (key, index, field, value) => {
        const updatedList = [...systems[key]];
        updatedList[index][field] = value;
        setSystems(prev => ({ ...prev, [key]: updatedList }));
    };

    const openMediaPicker = (key, index) => {
        setPickerTarget({ system: key, index });
        setShowPicker(true);
    };

    const handleSelectMedia = (url) => {
        const { system, index } = pickerTarget;
        const updatedList = [...systems[system]];
        updatedList[index]['pdf'] = url;
        updatedList[index]['size'] = 'PDF File'; 
        setSystems(prev => ({ ...prev, [system]: updatedList }));
    };

    const handleSave = async () => {
        if (!isDirty) return;
        setSaving(true);
        try {
            await axios.post('/admin/solutions', systems);
            setInitialState(JSON.parse(JSON.stringify(systems))); // Update snapshot after save
            alert('Solutions updated successfully!');
        } catch (err) {
            console.error(err);
            alert('Failed to save.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="p-5 text-center">Loading Data...</div>;

    const systemLabels = {
        'off-grid': 'Off-Grid Systems',
        'hybrid': 'Hybrid Systems',
        'on-grid': 'On-Grid Systems'
    };

    return (
        <div className="container-fluid p-4 bg-light min-vh-100">
            
            {/* Header with Dirty Indicator */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="d-flex align-items-center gap-3">
                    <h3 className="fw-bold text-success m-0">Manage Solution Capacities</h3>
                    {isDirty && (
                        <span className="badge bg-warning text-dark d-flex align-items-center shadow-sm">
                            <FaExclamationTriangle className="me-1" /> Unsaved Changes
                        </span>
                    )}
                </div>
                
                <button 
                    onClick={handleSave} 
                    disabled={saving || !isDirty} // Disabled if saving OR not dirty
                    className={`btn fw-bold px-4 rounded-pill shadow transition-all ${isDirty ? 'btn-success' : 'btn-secondary opacity-50'}`}
                >
                    {saving ? <><FaSpinner className="spin me-2" /> Saving...</> : <><FaSave className="me-2"/> Save Changes</>}
                </button>
            </div>

            <div className="row g-4">
                {['off-grid', 'hybrid', 'on-grid'].map(key => (
                    <div key={key} className="col-lg-4">
                        <div className="card border-0 shadow-sm h-100">
                            <div className="card-header bg-white py-3 border-bottom border-success border-2">
                                <h5 className="mb-0 fw-bold text-dark">{systemLabels[key]}</h5>
                            </div>
                            <div className="card-body bg-light">
                                <div className="d-flex flex-column gap-3">
                                    {systems[key] && systems[key].map((item, idx) => (
                                        <div key={idx} className="bg-white p-3 rounded shadow-sm border">
                                            <label className="small fw-bold text-muted mb-1">Capacity Label</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-sm mb-3 fw-bold"
                                                value={item.label}
                                                onChange={(e) => handleChange(key, idx, 'label', e.target.value)}
                                                placeholder="e.g. 100MW"
                                            />

                                            <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded border">
                                                <div className="d-flex align-items-center text-truncate me-2">
                                                    <FaFilePdf className={item.pdf ? "text-danger me-2" : "text-muted me-2"} />
                                                    <small className="text-muted text-truncate" style={{maxWidth: '120px'}}>
                                                        {item.pdf ? item.pdf.split('/').pop() : 'No PDF selected'}
                                                    </small>
                                                </div>
                                                <button 
                                                    className="btn btn-outline-primary btn-sm py-0"
                                                    style={{fontSize: '0.75rem'}}
                                                    onClick={() => openMediaPicker(key, idx)}
                                                >
                                                    Select
                                                </button>
                                            </div>

                                            <div className="text-end mt-2">
                                                <button 
                                                    className="btn btn-link text-danger p-0 small text-decoration-none"
                                                    onClick={() => handleRemoveCapacity(key, idx)}
                                                >
                                                    <FaTrash className="me-1"/> Remove
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                    <button 
                                        onClick={() => handleAddCapacity(key)}
                                        className="btn btn-outline-dark btn-sm border-dashed w-100"
                                    >
                                        <FaPlus className="me-1"/> Add Capacity
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <MediaPickerModal 
                isOpen={showPicker} 
                onClose={() => setShowPicker(false)}
                onSelectImage={handleSelectMedia}
            />
        </div>
    );
}