import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '@/Layouts/AdminLayout';

import Dashboard from './Dashboard';
import HeroSection from './HeroSection';
import AdminProjects from './Projects';
import AdminProfile from './Profile';
import NavbarFooterContent from './NavbarFooterContent';
import Settings from './Settings';
import AboutUs from './AboutUs';
import AdminFinancing from './Financing'; // Make sure to import this if you use it
import AdminContact from './Contact';     // Make sure to import this if you use it
import AdminSolutions from './Solutions'; // Make sure to import this if you use it

export default function AdminApp() {
  return (
    // CHANGE 1: Remove the basename prop completely
    <BrowserRouter>
      <Routes>
        {/* CHANGE 2: Update path="/" to path="/admin" */}
        <Route path="/admin" element={<AdminLayout />}>
          
          {/* This redirects /admin to /admin/dashboard */}
          <Route index element={<Navigate to="dashboard" replace />} />
          
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="hero-section" element={<HeroSection />} />
          <Route path="about-us" element={<AboutUs/>} />
          <Route path="solutions" element={<AdminSolutions/>} />
          <Route path="projects" element={<AdminProjects/>} />
          <Route path="financing" element={<AdminFinancing/>} />
          <Route path="contact" element={<AdminContact/>} />
          <Route path="navbar-footer" element={<NavbarFooterContent/>} />
          <Route path="profile" element={<AdminProfile/>} />
          <Route path="settings" element={<Settings/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}