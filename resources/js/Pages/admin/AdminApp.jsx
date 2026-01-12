import { lazy, Suspense, useEffect, useState } from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '@/Layouts/AdminLayout';

// Lazy Imports
const Dashboard = lazy(() => import('./Dashboard'));
const Home = lazy(() => import('./Home'));
const AdminProjects = lazy(() => import('./Projects'));
const AdminProfile = lazy(() => import('./Profile'));
const MediaManager = lazy(() => import('./MediaManager'));
const Settings = lazy(() => import('./Settings'));
const AdminStore = lazy(() => import('./Store')); 
const AdminContact = lazy(() => import('./Contact'));     
const AdminSolutions = lazy(() => import('./Solutions')); 

// Loading Spinner
const AdminLoader = () => (
  <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem' }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default function AdminApp() {
  // ✅ FIX: State to ensure we only render on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This only runs in the browser, triggering the render
    setIsClient(true);
  }, []);

  // 1. SSR CHECK: If running on Server, render NOTHING (or a loader).
  // This prevents 'document is not defined' error from BrowserRouter.
  if (!isClient) {
    return <AdminLoader />;
  }

  // 2. CLIENT RENDER: Safe to use BrowserRouter now
  return (
    <BrowserRouter basename="/admin">
      <Suspense fallback={<AdminLoader />}>
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            
            {/* Redirect /admin to /admin/dashboard */}
            <Route index element={<Navigate to="dashboard" replace />} />
            
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="home" element={<Home />} />
            <Route path="solutions" element={<AdminSolutions/>} />
            <Route path="projects" element={<AdminProjects/>} />
            <Route path="store" element={<AdminStore/>} />
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