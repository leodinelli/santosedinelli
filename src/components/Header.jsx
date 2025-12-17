import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Phone, MessageCircle, Mail } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getItemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Calculadora BTU', href: '/calculadora' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'shadow-xl' : 'shadow-lg'
    }`}>
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="mr-2 sm:mr-3 relative">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-2 rounded-lg h-12 w-12 sm:h-16 sm:w-16 flex items-center justify-center shadow-lg">
                  <img 
                    src="/images/icon.png" 
                    alt="Santos & Dinelli Logo" 
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                  Santos & Dinelli
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Ar Condicionado & Serviços</p>
              </div>
            </Link>
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/551125039731?text=Olá,%20tudo%20bem?%20Vim%20pelo%20site%20da%20Santos%20%26%20Dinelli%20Ar%20Condicionado%20e%20gostaria%20de%20informações%20sobre%20serviços%20e%20produtos."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center shadow-md hover:shadow-lg hover:scale-105"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Orçamento WhatsApp
            </a>
            <a
              href="tel:1125039731"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center shadow-md hover:shadow-lg hover:scale-105"
            >
              <Phone className="h-4 w-4 mr-2" />
              Ligar Agora
            </a>
            {/* Instagram Link */}
            <a
              href="https://www.instagram.com/santos_e_dinelli_climatizacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5 text-gray-700 hover:text-pink-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden lg:block border-t border-gray-200">
          <div className="flex space-x-8 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform origin-left transition-transform duration-300 ${
                  isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in-up">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  isActive(item.href)
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-2 border-t border-gray-200">
              <a
                href="https://wa.me/551125039731?text=Olá,%20tudo%20bem?%20Vim%20pelo%20site%20da%20Santos%20%26%20Dinelli%20Ar%20Condicionado%20e%20gostaria%20de%20informações%20sobre%20serviços%20e%20produtos."
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Orçamento WhatsApp
              </a>
              <a
                href="tel:1125039731"
                className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Ligar Agora
              </a>
              <a
                href="https://www.instagram.com/santos_e_dinelli_climatizacao/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center"
              >
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Siga no Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

