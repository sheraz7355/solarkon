import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/admin/Sidebar';
import TopNavbar from '@/components/admin/TopNavbar';

export default function AdminLayout() {
  return (
    <div className="d-flex min-vh-100 bg-light">
      <Sidebar />

      <div className="flex-grow-1 d-flex flex-column admin-main-wrapper">
        
        <TopNavbar />
        
        <main className="p-4 flex-grow-1">
            <Outlet /> 
        </main>
      </div>
    </div>
  );
}