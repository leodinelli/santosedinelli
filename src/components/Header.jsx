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
              <div className="mr-3 relative">
                <img 
                  src="/icon.png" 
                  alt="Santos & Dinelli Logo" 
                  className="h-16 w-16 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Logo */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-2 rounded-lg h-16 w-16 items-center justify-center hidden shadow-lg">
                  <div className="text-xl font-bold">S&D</div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-600">
                  Santos & Dinelli
                </h1>
                <p className="text-sm text-gray-600 font-medium">Ar Condicionado & Serviços</p>
              </div>
            </Link>
          </div>

          {/* Call to Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://wa.me/message/4VRYN32UABLMJ1"
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
                href="https://wa.me/message/4VRYN32UABLMJ1"
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

