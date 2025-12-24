import StatsCard from '../../components/admin/StatsCard';
import {
  faFolderOpen,
  faCheckCircle,
  faBolt,
  faDollarSign,
} from '@fortawesome/free-solid-svg-icons';

function Dashboard() {

  return (
    <div className="container-fluid px-2 px-sm-3 px-md-4 px-lg-5 py-3 py-sm-4 py-md-5" style={{ background: '#f8faf9', minHeight: '100vh' }}>
      {/* Header Section with Enhanced Styling */}
      <div className="mb-4 mb-sm-5 mb-md-5 fade-up">
        <div style={{ 
          background: 'linear-gradient(135deg, rgba(45, 80, 22, 0.05) 0%, rgba(34, 197, 94, 0.05) 100%)',
          padding: '2rem 2.5rem',
          borderRadius: '20px',
          border: '1px solid rgba(45, 80, 22, 0.1)',
          marginBottom: '2rem',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)'
        }}>
          <h2 className="fw-bold mb-2 mb-sm-3 dashboard-title" style={{ 
            background: 'linear-gradient(135deg, #2D5016 0%, #22C55E 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.25rem',
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}>
            Dashboard Overview
          </h2>
          <p className="mb-0 small small-md-normal" style={{ color: '#64748b', fontSize: '1.05rem', fontWeight: 500 }}>
            Welcome back! Here's what's happening with your solar projects.
          </p>
        </div>
      </div>

      {/* Stats Cards Grid with Staggered Animation */}
      <div className="row g-3 g-sm-4 g-md-4 g-lg-4 mb-4 mb-sm-5 mb-md-5">
        <div className="col-6 col-md-6 col-lg-3 fade-up fade-delay-1">
          <StatsCard
            icon={faFolderOpen}
            title="Total Projects"
            value="127"
            subtitle="All time projects"
            color="#2D5016"
            bgColor="#E1F6E8"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3 fade-up fade-delay-2">
          <StatsCard
            icon={faCheckCircle}
            title="Completed"
            value="98"
            subtitle="Successfully installed"
            color="#22C55E"
            bgColor="#D1FAE5"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3 fade-up fade-delay-3">
          <StatsCard
            icon={faBolt}
            title="Active Installations"
            value="18"
            subtitle="In progress"
            color="#2D5016"
            bgColor="#E1F6E8"
          />
        </div>
        <div className="col-6 col-md-6 col-lg-3 fade-up fade-delay-4">
          <StatsCard
            icon={faDollarSign}
            title="Revenue"
            value="$2.4M"
            subtitle="This year"
            color="#22C55E"
            bgColor="#D1FAE5"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

