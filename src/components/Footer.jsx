import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Produtos', href: '/produtos' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Calculadora BTU', href: '/calculadora' },
    { name: 'Contato', href: '/contato' }
  ];

  const categories = [
    { name: 'Split Hi Wall', href: '/produtos?categoria=split' },
    { name: 'Inverter', href: '/produtos?categoria=inverter' },
    { name: 'Cassete', href: '/produtos?categoria=cassete' },
    { name: 'Multi Split', href: '/produtos?categoria=multi-split' },
    { name: 'Janela', href: '/produtos?categoria=janela' },
    { name: 'Piso Teto', href: '/produtos?categoria=piso-teto' }
  ];

  const services = [
    { name: 'Instalação', href: '/servicos#instalacao' },
    { name: 'Manutenção', href: '/servicos#manutencao' },
    { name: 'Assistência Técnica', href: '/servicos#assistencia' },
    { name: 'Limpeza', href: '/servicos#limpeza' },
    { name: 'Consultoria', href: '/servicos#consultoria' },
    { name: 'Garantia', href: '/servicos#garantia' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white p-2 rounded-lg mr-3">
                <div className="text-xl font-bold">AC</div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Santos&Dinelli</h3>
                <p className="text-sm text-gray-400">Ar Condicionado & Serviços</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Especialistas em climatização há mais de 8 anos. 
              Oferecemos produtos de qualidade com instalação profissional.
            </p>
            <div className="flex space-x-4">
             
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Televendas</p>
                  <p className="text-white font-semibold">(11) 2503-9731</p>
                </div>
              </div>
              <div className="flex items-start">
                <MessageCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">WhatsApp Comercial</p>
                  <p className="text-white font-semibold">(11) 2503-9731</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-red-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">E-mail</p>
                  <p className="text-white font-semibold">sac@santosedinelli.com.br</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-purple-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Endereço</p>
                  <p className="text-white">Rua Silva Bueno, 1660 - Ipiranga</p>
                  <p className="text-white">São Paulo - SP</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-yellow-400 mr-3 mt-0.5" />
                <div>
                  <p className="text-gray-400">Horário</p>
                  <p className="text-white">Seg-Sex: 8h às 18h</p>
                  <p className="text-white">Sáb: 8h às 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Santos&Dinelli Ar Condicionado. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/politica-privacidade" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos-uso" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
              <Link to="/trocas-devolucoes" className="text-gray-400 hover:text-white transition-colors">
                Trocas e Devoluções
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

