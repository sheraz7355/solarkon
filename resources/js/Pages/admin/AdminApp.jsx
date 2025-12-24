import { lazy, Suspense } from 'react'; // 1. Import lazy & Suspense
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '@/Layouts/AdminLayout';

// 2. CONVERT STATIC IMPORTS TO LAZY IMPORTS
// const Dashboard = lazy(() => import('./Dashboard'));
// This splits the code into small chunks.
const Dashboard = lazy(() => import('./Dashboard'));
const Home = lazy(() => import('./Home'));
const AdminProjects = lazy(() => import('./Projects'));
const AdminProfile = lazy(() => import('./Profile'));
const MediaManager = lazy(() => import('./MediaManager'));
const Settings = lazy(() => import('./Settings'));
const AboutUs = lazy(() => import('./AboutUs'));
const AdminFinancing = lazy(() => import('./Financing')); 
const AdminContact = lazy(() => import('./Contact'));     
const AdminSolutions = lazy(() => import('./Solutions')); 

// 3. Create a simple Loading Spinner for page transitions
const AdminLoader = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem' }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default function AdminApp() {
  return (
    <BrowserRouter>
      {/* 4. Wrap Routes in Suspense to handle the loading state */}
      <Suspense fallback={<AdminLoader />}>
        <Routes>
          <Route path="/admin" element={<AdminLayout />}>
            
            <Route index element={<Navigate to="dashboard" replace />} />
            
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<Home />} />
            <Route path="about-us" element={<AboutUs/>} />
            <Route path="solutions" element={<AdminSolutions/>} />
            <Route path="projects" element={<AdminProjects/>} />
            <Route path="financing" element={<AdminFinancing/>} />
            <Route path="contact" element={<AdminContact/>} />
            <Route path="MediaManager" element={<MediaManager/>} />
            <Route path="profile" element={<AdminProfile/>} />
            <Route path="settings" element={<Settings/>} />
            
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}