import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/Footer';

function AdminLayout() {
  return (
    <div className="d-flex min-vh-100 bg-light admin-layout-wrapper" style={{ overflowX: 'hidden' }}>
      <Sidebar />
      <div className="flex-grow-1 d-flex flex-column admin-main-content" style={{ minWidth: 0 }}>
        <TopNavbar />
        <main className="flex-grow-1 p-2 p-sm-3 p-md-4 bg-light admin-main-wrapper" style={{ overflowX: 'hidden', width: '100%', position: 'relative', zIndex: 1 }}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default AdminLayout;
