import { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faSave, faImage, faRotateLeft, faExclamationTriangle, faUpload } from '@fortawesome/free-solid-svg-icons';

export default function AdminPartnersForm({ initialData, onRefresh }) {
    // initialData comes as a simple array of strings (URLs)
    const { data, setData, post, processing, isDirty, reset } = useForm({
        logos: initialData ? initialData.map(url => ({ url, file: null })) : []
    });

    const handleFileUpload = (e) => {
        const files = Array.from(e.target.files);
        const newLogos = files.map(file => ({
            url: URL.createObjectURL(file),
            file: file
        }));
        setData('logos', [...data.logos, ...newLogos]);
    };

    const removeLogo = (index) => {
        setData('logos', data.logos.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/logos', {
            forceFormData: true,
            onSuccess: () => onRefresh(),
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-5">
            {isDirty && (
                <div className="position-fixed top-0 start-0 w-100 bg-warning text-dark p-3 text-center fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2" style={{ zIndex: 1060 }}>
                    <FontAwesomeIcon icon={faExclamationTriangle} />
                    <span>Unsaved changes in Partner Logos.</span>
                </div>
            )}

            <div className="card border-0 shadow-sm rounded-4">
                <div className="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
                    <h5 className="mb-0 fw-bold text-success"><FontAwesomeIcon icon={faImage} className="me-2"/> Partner Logos</h5>
                    <label className="btn btn-sm btn-success text-white shadow-sm cursor-pointer">
                        <FontAwesomeIcon icon={faUpload} className="me-2"/> Add Logos
                        <input type="file" multiple accept="image/*" hidden onChange={handleFileUpload} />
                    </label>
                </div>
                <div className="card-body p-4">
                    <div className="row g-3">
                        {data.logos.map((logo, index) => (
                            <div key={index} className="col-6 col-md-3 col-lg-2">
                                <div className="position-relative rounded-3 overflow-hidden border shadow-sm bg-light d-flex align-items-center justify-content-center" style={{ height: '100px', padding: '10px' }}>
                                    <img src={logo.url} alt="Partner" className="mw-100 mh-100 object-fit-contain" />
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
                        {data.logos.length === 0 && (
                            <div className="col-12 py-5 text-center text-muted border rounded bg-light border-dashed">
                                No custom logos added. The website will show default partners.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-end mt-3">
                {isDirty && <button type="button" onClick={() => reset()} className="btn btn-outline-danger rounded-pill px-4 me-2"><FontAwesomeIcon icon={faRotateLeft} className="me-2" /> Discard</button>}
                <button type="submit" disabled={processing || !isDirty} className={`btn px-5 rounded-pill ${isDirty ? 'btn-success' : 'btn-secondary'}`}>
                    <FontAwesomeIcon icon={faSave} className="me-2" /> {processing ? 'Saving...' : 'Save Changes'}
                </button>
            </div>
        </form>
    );
}