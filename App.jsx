import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './src/context/CartContext';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import ScrollToTop from './src/components/ScrollToTop';
import Home from './src/pages/Home';
import Products from './src/pages/Products';
import Services from './src/pages/Services';
import Calculator from './src/pages/Calculator';
import About from './src/pages/About';
import Contact from './src/pages/Contact';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Products />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/calculadora" element={<Calculator />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;