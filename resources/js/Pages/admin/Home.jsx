import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// COMPONENTS
import AdminHeroForm from "../../components/admin/AdminHeroForm"; // New Import
import AdminPartnersForm from "../../components/admin/AdminPartnersForm"; 
import AdminStepsForm from "../../components/admin/AdminStepsForm";       
import AdminServicesForm from '../../components/admin/AdminServicesForm'; 

export default function AdminHome() {
  const [heroData, setHeroData] = useState(null);
  const [stepsData, setStepsData] = useState(null);
  const [logosData, setLogosData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0); 

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
        try {
            const [heroRes, stepsRes, logosRes] = await Promise.all([
                axios.get('/hero-sections'),
                axios.get('/work-data'),
                axios.get('/logos')
            ]);
            setHeroData(heroRes.data);
            setStepsData(stepsRes.data);
            setLogosData(logosRes.data);
            setLoading(false);
        } catch (error) {
            console.error("API Error:", error);
            setLoading(false);
        }
    };
    fetchData();
  }, [refreshKey]); 

  if (loading) return <div className="vh-100 d-flex justify-content-center align-items-center"><FontAwesomeIcon icon={faSpinner} spin size="3x" className="text-success"/></div>;

  return (
    <div className="container-fluid px-4 py-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
        <div className="mb-4">
            <h2 className="fw-bold mb-1" style={{ color: '#14532d' }}>Website Content Manager</h2>
            <p className="text-muted mb-0">Manage the content for the Home Page.</p>
        </div>

        {/* 1. HERO SECTION */}
        {/* Now using the separate component */}
        <AdminHeroForm 
            key={`hero-${refreshKey}`} 
            initialData={heroData || {}} 
            onRefresh={() => setRefreshKey(k => k + 1)} 
        />

        <hr className="my-5 opacity-25" />

        {/* 2. SERVICES SECTION */}
        <div className="d-flex align-items-center mb-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                <span className="fw-bold">2</span>
            </div>
            <div>
                <h4 className="fw-bold mb-0 text-dark">Services Showcase</h4>
                <p className="text-muted small mb-0">The 4 expanding service cards</p>
            </div>
        </div>
        <AdminServicesForm />

        <hr className="my-5 opacity-25" />

        {/* 3. METHODOLOGY SECTION */}
        <div className="d-flex align-items-center mb-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                <span className="fw-bold">3</span>
            </div>
            <div>
                <h4 className="fw-bold mb-0 text-dark">Methodology Steps</h4>
                <p className="text-muted small mb-0">The scrolling workflow section</p>
            </div>
        </div>
        <AdminStepsForm key={`steps-${refreshKey}`} initialData={stepsData} onRefresh={() => setRefreshKey(k => k + 1)} />

        <hr className="my-5 opacity-25" />

        {/* 4. PARTNER LOGOS SECTION */}
        <div className="d-flex align-items-center mb-4">
            <div className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                <span className="fw-bold">4</span>
            </div>
            <div>
                <h4 className="fw-bold mb-0 text-dark">Partner Logos</h4>
                <p className="text-muted small mb-0">Brands shown in the partners slider</p>
            </div>
        </div>
        <AdminPartnersForm key={`logos-${refreshKey}`} initialData={logosData} onRefresh={() => setRefreshKey(k => k + 1)} />
        
        <div style={{ height: '80px' }}></div>
    </div>
  );
}