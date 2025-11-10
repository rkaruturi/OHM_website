import { useState, useEffect } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Approach from './components/Approach';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import WhyOrganic from './components/WhyOrganic';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  const isAdminRoute = currentPath === '/admin';

  return (
    <AuthProvider>
      {isAdminRoute ? (
        <ProtectedRoute
          fallback={<AdminLogin onLoginSuccess={() => setCurrentPath('/admin')} />}
        >
          <AdminDashboard />
        </ProtectedRoute>
      ) : (
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <About />
            <Approach />
            <Products />
            <Testimonials />
            <FAQ />
            <WhyOrganic />
            <Quality />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </AuthProvider>
  );
}

export default App;
