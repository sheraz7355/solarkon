import { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUsers, faPhone, faEnvelope, faClock, faTrash, faSpinner 
} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Data on Load
  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      // ✅ FIX: Changed to match your route: Route::get('/userDetails', ...)
      const res = await axios.get('/userDetails');
      setLeads(res.data);
    } catch (error) {
      console.error("Failed to fetch leads", error);
    } finally {
      setLoading(false);
    }
  };

  // 2. Delete Handler
  const handleDelete = async (id) => {
    if(!window.confirm("Are you sure you want to remove this lead?")) return;
    try {
        // ✅ FIX: Changed to match your route: Route::delete('/userDetails/{id}', ...)
        await axios.delete(`/userDetails/${id}`);
        setLeads(leads.filter(lead => lead.id !== id));
    } catch (error) {
        alert("Failed to delete");
    }
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      
      {/* Header */}
      <div className="mb-4 fade-up">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
          padding: '2rem 2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          marginBottom: '2rem',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 className="fw-bold mb-2" style={{ 
            background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.25rem',
            fontWeight: 800,
          }}>
            Client Inquiries
          </h2>
          <p className="mb-0 text-muted" style={{ fontSize: '1.05rem', fontWeight: 500 }}>
            Real-time requests from the "Ready To Go Solar" form.
          </p>
        </div>
      </div>

      {/* Leads Table */}
      <div className="card border-0 shadow-sm rounded-4 overflow-hidden fade-up">
        <div className="card-header bg-white p-4 border-bottom d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold text-success">
                <FontAwesomeIcon icon={faUsers} className="me-2"/> Recent Requests
            </h5>
            <span className="badge bg-success bg-opacity-10 text-success rounded-pill px-3">
                {leads.length} Pending
            </span>
        </div>
        
        <div className="table-responsive">
            {loading ? (
                <div className="text-center py-5">
                    <FontAwesomeIcon icon={faSpinner} spin size="2x" className="text-success"/>
                </div>
            ) : (
                <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light">
                        <tr>
                            <th className="ps-4 py-3 text-uppercase small fw-bold text-muted">Client Name</th>
                            <th className="py-3 text-uppercase small fw-bold text-muted">Phone</th>
                            <th className="py-3 text-uppercase small fw-bold text-muted">Email</th>
                            <th className="py-3 text-uppercase small fw-bold text-muted">Date</th>
                            <th className="pe-4 py-3 text-uppercase small fw-bold text-muted text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leads.length > 0 ? leads.map((lead) => (
                            <tr key={lead.id} style={{ transition: 'all 0.2s' }}>
                                <td className="ps-4 py-3 fw-bold text-dark">{lead.name}</td>
                                <td className="py-3 text-dark">
                                    <FontAwesomeIcon icon={faPhone} className="text-success me-2 small"/>
                                    {lead.phone}
                                </td>
                                <td className="py-3 text-dark">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-success me-2 small"/>
                                    {lead.email}
                                </td>
                                <td className="py-3 text-muted small">
                                    <FontAwesomeIcon icon={faClock} className="me-1"/>
                                    {formatDate(lead.created_at)}
                                </td>
                                <td className="pe-4 py-3 text-end">
                                    <button 
                                        className="btn btn-sm btn-outline-danger border-0 rounded-circle" 
                                        style={{ width: '32px', height: '32px' }}
                                        onClick={() => handleDelete(lead.id)}
                                        title="Delete Lead"
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="5" className="text-center py-5 text-muted">
                                    No inquiries received yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;