import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function StatsCard({ icon, title, value, subtitle, color = '#2D5016', bgColor = '#E1F6E8' }) {
  return (
    <div className="card border-0 shadow-lg rounded-4 h-100 stats-card-hover stats-card-enhanced" style={{ 
      border: '1px solid rgba(45, 80, 22, 0.1)', 
      boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8faf9 100%)',
      overflow: 'hidden',
      position: 'relative',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '5px',
        background: `linear-gradient(90deg, ${color} 0%, ${color}CC 50%, ${color}99 100%)`,
        boxShadow: `0 2px 8px ${color}40`
      }}></div>
      <div className="card-body p-3 p-sm-4 p-md-4 position-relative">
        <div className="stats-card-shine"></div>
        <div className="d-flex align-items-center justify-content-between mb-3 mb-sm-4">
          <div
            className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0 stats-icon stats-icon-enhanced"
            style={{
              background: bgColor,
              color: color,
              width: '60px',
              height: '60px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              border: `1px solid ${color}30`
            }}
          >
            <FontAwesomeIcon icon={icon} className="stats-icon-svg" style={{ fontSize: '1.4rem' }} />
          </div>
        </div>
        <h3 className="fw-bold mb-2 stats-value" style={{ 
          background: `linear-gradient(135deg, ${color} 0%, ${color}CC 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '2.25rem',
          fontWeight: 800,
          lineHeight: 1.2
        }}>
          {value}
        </h3>
        <p className="fw-semibold mb-2 stats-title" style={{ color: '#1e293b', fontSize: '1rem' }}>
          {title}
        </p>
        {subtitle && (
          <p className="small mb-0 stats-subtitle" style={{ color: '#64748b', fontSize: '0.875rem' }}>{subtitle}</p>
        )}
      </div>
    </div>
  );
}

export default StatsCard;
