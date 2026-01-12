import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrash, FaEdit, FaSave, FaImage, FaSpinner } from 'react-icons/fa';
import MediaPickerModal from '../../components/admin/MediaPickerModal';

export default function AdminStore() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showMediaPicker, setShowMediaPicker] = useState(false);
    
    // Form State
    const initialForm = {
        id: null,
        title: '',
        type: '',
        voltage: '',
        annual_output: '', 
        warranty: '',
        description: '',
        original_price: '',
        discount_price: '',
        image: ''
    };
    const [formData, setFormData] = useState(initialForm);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('/admin/products-data');
            setProducts(res.data);
        } catch (err) { console.error(err); } 
        finally { setLoading(false); }
    };

    const handleEdit = (product) => {
        setFormData(product);
        setIsEditing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this product?')) return;
        try {
            await axios.delete(`/admin/products/${id}`);
            setProducts(prev => prev.filter(p => p.id !== id));
        } catch (err) { alert('Failed to delete'); }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        try {
            await axios.post('/admin/products', formData);
            await fetchProducts(); // Refresh list
            setFormData(initialForm);
            setIsEditing(false);
            alert('Product Saved!');
        } catch (err) {
            alert('Error saving product');
            console.error(err);
        } finally {
            setSaving(false);
        }
    };

    const handleImageSelect = (url) => {
        setFormData(prev => ({ ...prev, image: url }));
        setShowMediaPicker(false);
    };

    // --- HELPER TO HANDLE CAPACITY INPUT ---
    // User types "5", we save "5kW". 
    // If DB has "5kW", we show "5".
    const handleVoltageChange = (e) => {
        const val = e.target.value;
        // Append 'kW' immediately to state if value exists
        setFormData({ ...formData, voltage: val ? `${val}kW` : '' });
    };

    const getVoltageNumber = () => {
        if (!formData.voltage) return '';
        // Remove 'kW' (case insensitive) to show just the number
        return formData.voltage.replace(/kW/gi, '');
    };

    return (
        <div className="container-fluid p-4 bg-light min-vh-100">
            <h3 className="fw-bold text-success mb-4">Manage Store Products</h3>

            {/* --- PRODUCT FORM --- */}
            <div className="card border-0 shadow-sm mb-5">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 fw-bold">{isEditing ? 'Edit Product' : 'Add New Product'}</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            {/* Image Upload */}
                            <div className="col-md-4">
                                <div 
                                    className="border rounded d-flex align-items-center justify-content-center bg-light position-relative" 
                                    style={{ height: '300px', cursor: 'pointer', overflow: 'hidden' }}
                                    onClick={() => setShowMediaPicker(true)}
                                >
                                    {formData.image ? (
                                        <img src={formData.image} alt="Preview" style={{width:'100%', height:'100%', objectFit:'cover'}} />
                                    ) : (
                                        <div className="text-center text-muted">
                                            <FaImage size={40} className="mb-2" />
                                            <p className="small mb-0">Select Product Image</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Inputs */}
                            <div className="col-md-8">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label small fw-bold">Product Title</label>
                                        <input type="text" className="form-control" required 
                                            value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} 
                                            placeholder="e.g. Solar Hybrid Package 5kW" />
                                    </div>

                                    {/* --- TECHNICAL SPECS ROW --- */}
                                    
                                    {/* 1. Type */}
                                    <div className="col-md-3">
                                        <label className="form-label small fw-bold">Type</label>
                                        <select 
                                            className="form-select" 
                                            required
                                            value={formData.type} 
                                            onChange={e => setFormData({...formData, type: e.target.value})}
                                        >
                                            <option value="">Select Type</option>
                                            <option value="On-Grid">On-Grid</option>
                                            <option value="Hybrid">Hybrid</option>
                                            <option value="Off-Grid">Off-Grid</option>
                                        </select>
                                    </div>

                                    {/* 2. Capacity (Fixed kW) */}
                                    <div className="col-md-3">
                                        <label className="form-label small fw-bold">Capacity</label>
                                        <div className="input-group">
                                            <input 
                                                type="number" 
                                                className="form-control" 
                                                required 
                                                value={getVoltageNumber()} 
                                                onChange={handleVoltageChange} 
                                                placeholder="5" 
                                            />
                                            <span className="input-group-text bg-light text-muted fw-bold">kW</span>
                                        </div>
                                    </div>

                                    {/* 3. Annual Output (New) */}
                                    <div className="col-md-3">
                                        <label className="form-label small fw-bold">Est. Output</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={formData.annual_output} 
                                            onChange={e => setFormData({...formData, annual_output: e.target.value})} 
                                            placeholder="e.g. 7200 kWh" 
                                        />
                                    </div>

                                    {/* 4. Warranty (New) */}
                                    <div className="col-md-3">
                                        <label className="form-label small fw-bold">Warranty</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            value={formData.warranty} 
                                            onChange={e => setFormData({...formData, warranty: e.target.value})} 
                                            placeholder="e.g. 25 Years" 
                                        />
                                    </div>

                                    {/* --- END TECH SPECS --- */}

                                    <div className="col-12">
                                        <label className="form-label small fw-bold">Description</label>
                                        <textarea className="form-control" rows="3" required 
                                            value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} 
                                            placeholder="Short product description..." />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label small fw-bold">Original Price (PKR)</label>
                                        <input type="text" className="form-control" 
                                            value={formData.original_price} onChange={e => setFormData({...formData, original_price: e.target.value})} 
                                            placeholder="e.g. 1,200,000" />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label small fw-bold text-success">Discount Price (PKR)</label>
                                        <input type="text" className="form-control border-success" required 
                                            value={formData.discount_price} onChange={e => setFormData({...formData, discount_price: e.target.value})} 
                                            placeholder="e.g. 1,000,000" />
                                    </div>
                                </div>
                                <div className="mt-4 text-end">
                                    {isEditing && (
                                        <button type="button" className="btn btn-light me-2" onClick={() => { setIsEditing(false); setFormData(initialForm); }}>
                                            Cancel
                                        </button>
                                    )}
                                    <button type="submit" disabled={saving} className="btn btn-success fw-bold px-4">
                                        {saving ? <FaSpinner className="spin" /> : <><FaSave className="me-2" /> {isEditing ? 'Update' : 'Save'} Product</>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* --- PRODUCTS LIST TABLE --- */}
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 fw-bold">Product List</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th style={{width: '80px'}}>Image</th>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Voltage</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? <tr><td colSpan="6" className="text-center p-4">Loading...</td></tr> : 
                             products.length === 0 ? <tr><td colSpan="6" className="text-center p-4">No products found.</td></tr> :
                             products.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <img src={product.image} className="rounded" style={{width: '50px', height: '50px', objectFit: 'cover'}} alt="" />
                                    </td>
                                    <td className="fw-bold">{product.title}</td>
                                    <td><span className="badge bg-light text-dark border">{product.type}</span></td>
                                    <td className="fw-bold text-success">PKR {product.discount_price}</td>
                                    <td><span className="badge bg-warning text-dark">{product.voltage}</span></td>
                                    <td className="text-end">
                                        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(product)}>
                                            <FaEdit />
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(product.id)}>
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <MediaPickerModal 
                isOpen={showMediaPicker} 
                onClose={() => setShowMediaPicker(false)} 
                onSelectImage={handleImageSelect}
                allowedTypes="image"
            />
        </div>
    );
}