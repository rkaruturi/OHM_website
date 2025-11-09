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

function App() {
  return (
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
  );
}

export default App;
