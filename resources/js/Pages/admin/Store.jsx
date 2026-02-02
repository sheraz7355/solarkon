import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus, FaTrash, FaEdit, FaSave, FaImage, FaSpinner, FaTimes } from 'react-icons/fa';
import MediaPickerModal from '../../components/admin/MediaPickerModal';

export default function AdminStore() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    
    // Media Picker State
    const [showMediaPicker, setShowMediaPicker] = useState(false);
    const [pickerContext, setPickerContext] = useState(null); // 'main' or 'gallery'

    // Form State
    const initialForm = {
        id: null,
        title: '',
        brand: '',      // Brand is now main category
        voltage: '',    
        unit: 'kW',     
        annual_output: '', 
        warranty: '',
        description: '',
        original_price: '',
        discount_price: '',
        image: '',
        gallery_images: []
    };
    const [formData, setFormData] = useState(initialForm);
    const [isEditing, setIsEditing] = useState(false);

    // Brands List
    const brandList = [
        "Trina Solar", "Jinko Solar", "ABB", "Canadian Solar", "Fronius", "Longi",
        "Voltronic Power", "Tesvolt", "GoodWe", "Schneider Electric", "AGS Battery",
        "SMA", "Astronergy", "Ritar", "Solis", "Huawei", "Pakistan Cables", "Other"
    ];

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const res = await axios.get('/admin/products-data');
            setProducts(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSaving(true);
        // Ensure type defaults to something if DB requires it, or just ignore if nullable
        const dataToSend = { ...formData, type: 'Solar' }; 

        try {
            await axios.post('/admin/products', dataToSend);
            await fetchProducts(); // Refresh list immediately
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

    const handleEdit = (product) => {
        setFormData(product);
        setIsEditing(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete product?')) return;
        try {
            await axios.delete(`/admin/products/${id}`);
            setProducts(prev => prev.filter(p => p.id !== id));
        } catch (err) { alert('Failed to delete'); }
    };

    // --- GALLERY LOGIC ---
    const openPicker = (context) => {
        setPickerContext(context);
        setShowMediaPicker(true);
    };

    const handleImageSelect = (url) => {
        if (pickerContext === 'main') {
            setFormData(prev => ({ ...prev, image: url }));
        } else if (pickerContext === 'gallery') {
            setFormData(prev => ({ 
                ...prev, 
                gallery_images: [...(prev.gallery_images || []), url] 
            }));
        }
        setShowMediaPicker(false);
    };

    const removeGalleryImage = (index) => {
        const newGallery = [...(formData.gallery_images || [])];
        newGallery.splice(index, 1);
        setFormData({ ...formData, gallery_images: newGallery });
    };

    return (
        <div className="container-fluid p-4 bg-light min-vh-100">
            <h3 className="fw-bold text-success mb-4">Manage Store Products</h3>

            {/* --- FORM SECTION --- */}
            <div className="card border-0 shadow-sm mb-5">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 fw-bold">{isEditing ? 'Edit Product' : 'Add New Product'}</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3">
                            
                            {/* Images Row */}
                            <div className="col-md-4">
                                <label className="form-label small fw-bold">Main Image</label>
                                <div className="border rounded d-flex align-items-center justify-content-center bg-light position-relative overflow-hidden" 
                                    style={{ height: '180px', cursor: 'pointer' }} onClick={() => openPicker('main')}>
                                    {formData.image ? <img src={formData.image} style={{width:'100%', height:'100%', objectFit:'cover'}} /> 
                                    : <div className="text-center text-muted"><FaImage size={24}/><p className="small m-0">Select</p></div>}
                                </div>
                            </div>

                            <div className="col-md-8">
                                <label className="form-label small fw-bold">Gallery Images</label>
                                <div className="d-flex gap-2 overflow-auto border rounded p-2 bg-light" style={{height: '180px'}}>
                                    {formData.gallery_images && formData.gallery_images.map((img, idx) => (
                                        <div key={idx} className="position-relative flex-shrink-0" style={{width: '150px', height: '100%'}}>
                                            <img src={img} className="w-100 h-100 object-fit-cover rounded border" />
                                            <button type="button" className="btn btn-danger btn-sm position-absolute top-0 end-0 p-0 rounded-circle" 
                                                style={{width:24, height:24, transform: 'translate(25%, -25%)'}} onClick={() => removeGalleryImage(idx)}>
                                                <FaTimes size={12} />
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" className="btn btn-outline-secondary d-flex flex-column align-items-center justify-content-center flex-shrink-0" 
                                        style={{width: '100px'}} onClick={() => openPicker('gallery')}>
                                        <FaPlus /> <span className="small mt-1">Add</span>
                                    </button>
                                </div>
                            </div>

                            {/* Info Row */}
                            <div className="col-12">
                                <label className="form-label small fw-bold">Title</label>
                                <input type="text" className="form-control" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} />
                            </div>

                            {/* NO SYSTEM TYPE INPUT HERE - REMOVED AS REQUESTED */}

                            <div className="col-md-4">
                                <label className="form-label small fw-bold">Brand</label>
                                <select className="form-select" required value={formData.brand} onChange={e => setFormData({...formData, brand: e.target.value})}>
                                    <option value="">Select Brand</option>
                                    {brandList.map(b => <option key={b} value={b}>{b}</option>)}
                                </select>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label small fw-bold">Capacity</label>
                                <div className="input-group">
                                    <input type="number" className="form-control" value={formData.voltage} onChange={e => setFormData({...formData, voltage: e.target.value})} placeholder="10" />
                                    <select className="form-select bg-light" style={{maxWidth:'80px'}} value={formData.unit} onChange={e => setFormData({...formData, unit: e.target.value})}>
                                        <option value="kW">kW</option>
                                        <option value="MW">MW</option>
                                        <option value="W">W</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label className="form-label small fw-bold">Warranty</label>
                                <input type="text" className="form-control" value={formData.warranty} onChange={e => setFormData({...formData, warranty: e.target.value})} placeholder="e.g. 10 Years" />
                            </div>

                            <div className="col-12">
                                <label className="form-label small fw-bold">Description</label>
                                <textarea className="form-control" rows="3" required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label small fw-bold text-success">Price</label>
                                <input type="text" className="form-control border-success" value={formData.discount_price} onChange={e => setFormData({...formData, discount_price: e.target.value})} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label small fw-bold">Original Price</label>
                                <input type="text" className="form-control" value={formData.original_price} onChange={e => setFormData({...formData, original_price: e.target.value})} />
                            </div>
                        </div>

                        <div className="mt-4 text-end">
                            {isEditing && <button type="button" className="btn btn-light me-2" onClick={() => { setIsEditing(false); setFormData(initialForm); }}>Cancel</button>}
                            <button type="submit" disabled={saving} className="btn btn-success fw-bold px-4">
                                {saving ? <FaSpinner className="spin" /> : <><FaSave className="me-2" /> Save Product</>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* --- LIST TABLE SECTION (RESTORED) --- */}
            <div className="card border-0 shadow-sm">
                <div className="card-header bg-white py-3">
                    <h5 className="mb-0 fw-bold">All Products</h5>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover align-middle mb-0">
                        <thead className="table-light">
                            <tr>
                                <th style={{width: '80px'}}>Image</th>
                                <th>Title</th>
                                <th>Brand</th>
                                <th>Capacity</th>
                                <th>Price</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? <tr><td colSpan="6" className="text-center p-4">Loading...</td></tr> : 
                             products.length === 0 ? <tr><td colSpan="6" className="text-center p-4 text-muted">No products created yet.</td></tr> :
                             products.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        <img src={product.image} className="rounded" style={{width: '50px', height: '50px', objectFit: 'cover'}} alt="" />
                                    </td>
                                    <td className="fw-bold">{product.title}</td>
                                    <td><span className="badge bg-light text-dark border">{product.brand}</span></td>
                                    <td>{product.voltage} {product.unit}</td>
                                    <td className="fw-bold text-success">{product.discount_price || '-'}</td>
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

            <MediaPickerModal isOpen={showMediaPicker} onClose={() => setShowMediaPicker(false)} onSelectImage={handleImageSelect} allowedTypes="image" />
        </div>
    );
}