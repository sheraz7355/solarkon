import Navbar from '@/components/client/Navbar';
import Footer from '@/components/client/Footer'; // Make sure you copied Footer.jsx to Components

export default function MainLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />
            
            <main className="flex-grow-1">
                {children} 
            </main>
            
            <Footer />
        </div>
    );
}