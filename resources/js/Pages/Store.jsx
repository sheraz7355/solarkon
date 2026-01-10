import Footer from '../components/client/Footer';
import Navbar from '../components/client/Navbar';
import StoreCard from '../components/client/StoreCard.jsx';
import StoreHero from '../components/client/StoreHero';
import StoreProducts from '../components/client/StoreProduct';
import WhatsAppFloat from '../components/client/WhatsAppFloat';


const Store = () => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <WhatsAppFloat />

            <main className="flex-grow-1">
                <StoreHero />
              <StoreProducts/>
            </main>

            <Footer />
        </div>
    );
};

export default Store;
