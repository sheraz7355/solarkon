import {
  HiOutlineUser,
  HiOutlineBuildingOffice2,
  HiOutlineSparkles,
  HiOutlineMapPin,
} from 'react-icons/hi2';

const rows = [
  {
    icon: HiOutlineUser,
    label: 'Client',
    value: 'Green Haven Community',
  },
  {
    icon: HiOutlineBuildingOffice2,
    label: 'Sector',
    value: 'Residential',
  },
  {
    icon: HiOutlineSparkles,
    label: 'Services',
    value: 'Solar Design & Installation',
  },
  {
    icon: HiOutlineMapPin,
    label: 'Location',
    value: 'Austin, TX',
  },
];

function ProjectMetaCard() {
  return (
    <aside className="surface-card h-100" data-aos="fade-up">
      <div className="px-4 py-4">
        <h3 className="h6 mb-4" style={{ color: '#1F2933' }}>
          About the Project
        </h3>

        <div className="d-flex flex-column gap-3">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="d-flex align-items-start gap-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3"
                style={{
                  width: 36,
                  height: 36,
                  backgroundColor: '#E7F6DD',
                  color: '#5EA82F',
                }}
              >
                <Icon size={18} />
              </div>
              <div>
                <p
                  className="text-uppercase mb-1"
                  style={{ fontSize: 11, letterSpacing: '0.16em', color: '#6B7280' }}
                >
                  {label}
                </p>
                <p className="mb-0" style={{ fontSize: 14, color: '#1F2933' }}>
                  {value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default ProjectMetaCard;
