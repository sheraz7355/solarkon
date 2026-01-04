// Profile page composition
import Navbar from '../components/client/Navbar';
import Footer from '../components/client/Footer';
import ProfileHeader from '../components/client/Profile/ProfileHeader';
import ProfileInfo from '../components/client/Profile/ProfileInfo';
import ProfileStats from '../components/client/Profile/ProfileStats';
import ProfileSettings from '../components/client/Profile/ProfileSettings';
import WhatsAppFloat from '../components/client/WhatsAppFloat';

function Profile() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <WhatsAppFloat/>
      <main className="flex-grow-1">
        <ProfileHeader />
        <ProfileInfo />
        <ProfileStats />
        <ProfileSettings />
      </main>
      <Footer />
    </div>
  );
}

export default Profile;
