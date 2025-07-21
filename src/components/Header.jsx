import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { getItemCount } = useCart();

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Calculadora BTU', href: '/calculadora' },
    { name: 'Contato', href: '/contato' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                <span> (11) 2503-9731 </span>
              </div>
              <div className="hidden sm:flex items-center">
                <MessageCircle className="h-4 w-4 mr-1" />
                <a 
                  href="https://wa.me/message/4VRYN32UABLMJ1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-200 transition-colors"
                >
                  WhatsApp: (11) 2503-9731
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">Frete grátis para todo Brasil*</span>
              <span className="bg-green-500 px-2 py-1 rounded text-xs font-semibold">
                10% OFF no PIX
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* Logo com Imagem */}
              <div className="mr-3">
                <img 
                  src="/icon.png" 
                  alt="Santos & Dinelli Logo" 
                  className="h-16 w-16 object-contain rounded-lg" // ← Maior
                  onError={(e) => {
                    
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Logo Texto */}
                <div className="bg-blue-600 text-white p-2 rounded-lg h-12 w-12 items-center justify-center hidden">
                  <div className="text-lg font-bold">S&D</div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-blue-900">Santos & Dinelli</h1>
                <p className="text-sm text-gray-600">Ar Condicionado & Serviços</p>
              </div>
            </Link>
          </div>


          {/* Right Icons */}
          <div className="flex items-center space-x-4">
          </div>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:block border-t border-gray-200">
          <div className="flex space-x-8 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* Navigation - Mobile */}
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="flex py-2 px-2 justify-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex-shrink-0 px-3 py-2 mx-1 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* menu do mobile fix */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2">
            {/* itens */}
            <nav className="space-y-2">
              <Link
                to="/conta"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Minha Conta
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

