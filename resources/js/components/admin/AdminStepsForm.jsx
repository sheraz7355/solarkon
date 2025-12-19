import { useEffect } from "react";
import { useForm } from "@inertiajs/react";
import { HiPlus, HiTrash } from "react-icons/hi2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSave, faExclamationTriangle, faCheckCircle, 
  faRotateLeft, faListCheck 
} from '@fortawesome/free-solid-svg-icons';

function AdminStepsForm({ initialData, onRefresh }) {
  // 1. Initialize Inertia Form
  const { data, setData, post, processing, isDirty, reset } = useForm({
    main_heading: initialData?.main_heading || "Our Process Simplified",
    main_description: initialData?.main_description || "",
    // Ensure steps is always an array
    steps: (initialData?.steps && initialData.steps.length > 0) 
      ? initialData.steps 
      : [{ title: "", description: "", duration: "" }]
  });

  // 2. Safety Lock (Warn before closing if unsaved)
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (isDirty) { e.preventDefault(); e.returnValue = ''; }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  // --- Handlers ---

  // Handle Heading/Description
  const handleMainChange = (field, value) => {
    setData(field, value);
  };

  // Handle Step Inputs (Array)
  const handleStepChange = (index, field, value) => {
    const updatedSteps = [...data.steps];
    updatedSteps[index][field] = value;
    setData('steps', updatedSteps);
  };

  // Add Step
  const addStep = () => {
    setData('steps', [...data.steps, { title: "", description: "", duration: "" }]);
  };

  // Remove Step
  const removeStep = (index) => {
    const updatedSteps = data.steps.filter((_, i) => i !== index);
    setData('steps', updatedSteps);
  };

  // Submit via Inertia
  const handleSubmit = (e) => {
    e.preventDefault();
    post('/work-data', {
      preserveScroll: true,
      onSuccess: () => {
        onRefresh(); // Trigger parent refresh
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 position-relative">
      
      {/* --- UNSAVED CHANGES ALERT TOP BAR --- */}
      {isDirty && (
        <div className="position-fixed top-0 start-0 w-100 bg-warning text-dark p-3 text-center fw-bold shadow-lg d-flex align-items-center justify-content-center gap-2" 
             style={{ zIndex: 1060, animation: 'slideDown 0.3s ease' }}>
          <FontAwesomeIcon icon={faExclamationTriangle} />
          <span>You have unsaved changes in the Methodology Section.</span>
        </div>
      )}

      {/* --- CARD START --- */}
      <div className="card shadow-sm border-0 rounded-4 mb-4">
        <div className="card-header bg-white border-bottom py-3">
          <h5 className="mb-0 fw-bold text-success">
            <FontAwesomeIcon icon={faListCheck} className="me-2"/> Edit Methodology
          </h5>
        </div>
        <div className="card-body p-4">
          
          {/* 1. STICKY HEADER INPUTS */}
          <div className="mb-5 p-4 rounded-3" style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}>
            <h6 className="fw-bold text-success mb-3">Sticky Header (Left Side)</h6>
            
            <div className="mb-3">
              <label className="form-label small text-muted fw-bold">Main Heading</label>
              <input
                type="text"
                className="form-control fw-bold form-control-lg"
                value={data.main_heading}
                onChange={(e) => handleMainChange("main_heading", e.target.value)}
              />
            </div>
            
            <div>
              <label className="form-label small text-muted fw-bold">Main Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={data.main_description}
                onChange={(e) => handleMainChange("main_description", e.target.value)}
              />
            </div>
          </div>

          <hr className="my-4"/>

          {/* 2. STEPS LOOP */}
          <h6 className="fw-bold text-dark mb-3">Timeline Steps (Right Side)</h6>
          
          {data.steps.map((step, index) => (
            <div key={index} className="mb-4 p-3 rounded-3" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-secondary">Step {index + 1}</span>
                {data.steps.length > 1 && (
                  <button type="button" className="btn btn-sm btn-outline-danger border-0" onClick={() => removeStep(index)}>
                    <HiTrash size={18} />
                  </button>
                )}
              </div>

              <div className="row g-3">
                <div className="col-md-8">
                  <label className="form-label small text-muted fw-bold">Step Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={step.title}
                    onChange={(e) => handleStepChange(index, "title", e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label small text-muted fw-bold">Duration</label>
                  <input
                    type="text"
                    className="form-control"
                    value={step.duration}
                    onChange={(e) => handleStepChange(index, "duration", e.target.value)}
                    required
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small text-muted fw-bold">Step Description</label>
                  <textarea
                    className="form-control"
                    rows="2"
                    value={step.description}
                    onChange={(e) => handleStepChange(index, "description", e.target.value)}
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          ))}

          {/* ADD BUTTON */}
          <button type="button" className="btn btn-light border w-100 py-3 fw-bold" onClick={addStep}>
            <HiPlus className="me-1"/> Add Another Step
          </button>
        </div>
      </div>

      {/* --- STICKY BOTTOM ACTION BAR --- */}
      <div className="sticky-bottom bg-white border-top py-3 px-4 shadow-lg d-flex justify-content-between align-items-center rounded-top-3" style={{ zIndex: 999 }}> 
           <div className="d-flex align-items-center gap-3">
              {isDirty ? (
                  <span className="text-warning fw-bold small"><FontAwesomeIcon icon={faExclamationTriangle}/> Unsaved Changes</span>
              ) : (
                  <span className="text-success fw-bold small"><FontAwesomeIcon icon={faCheckCircle}/> All Saved</span>
              )}
              
              {isDirty && (
                <button type="button" onClick={() => reset()} className="btn btn-sm btn-outline-danger rounded-pill px-3">
                    <FontAwesomeIcon icon={faRotateLeft} className="me-2" /> Discard
                </button>
              )}
           </div>
           
           <button type="submit" disabled={processing || !isDirty} className={`btn btn-lg px-5 rounded-pill ${isDirty ? 'btn-success' : 'btn-secondary'}`}>
                <FontAwesomeIcon icon={faSave} className="me-2" /> 
                {processing ? 'Saving...' : 'Save Methodology'}
           </button>
      </div>

    </form>
  );
}

export default AdminStepsForm;