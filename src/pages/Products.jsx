import React, { useState } from 'react';
import { Phone, MessageCircle, Award, Shield, CheckCircle, Snowflake, Zap, Wifi, X, Info } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productTypes = [
    {
      id: 'split-wall',
      name: 'Split Hi Wall',
      description: 'Ideal para residências e pequenos escritórios',
      image: '/images/ar.png',
      features: ['Silencioso', 'Econômico', 'Design moderno', 'Fácil instalação'],
      applications: ['Quartos', 'Salas', 'Escritórios pequenos'],
      btuRange: '9.000 a 36.000 BTUs',
      priceRange: 'A partir de R$ 1.800,00',
      icon: <Snowflake className="h-8 w-8" />,
      priceTable: [
        { btu: '9.000 BTUs', price: 'R$ 1.800,00 - R$ 2.300,00', area: 'Até 12m²' },
        { btu: '12.000 BTUs', price: 'R$ 1.900,00 - R$ 2.900,00', area: 'Até 16m²' },
        { btu: '18.000 BTUs', price: 'R$ 3.200,00 - R$ 3.500,00', area: 'Até 25m²' },
        { btu: '24.000 BTUs', price: 'R$ 3.800,00 - R$ 6.500,00', area: 'Até 35m²' },
        { btu: '30.000 BTUs', price: 'R$ 5.400,00 - R$ 7.000,00', area: 'Até 45m²' },
        { btu: '36.000 BTUs', price: 'R$ 7.200,00 - R$ 10.500,00', area: 'Até 55m²' }
      ]
    },
    {
      id: 'piso-teto',
      name: 'Piso Teto',
      description: 'Solução robusta para ambientes amplos com grande circulação de pessoas',
      image: '/images/pisoteto.png',
      features: ['Alta vazão de ar', 'Instalação versátil (piso ou teto)', 'Ideal para pé-direito alto', 'Distribuição uniforme'],
      applications: ['Galpões', 'Salões', 'Restaurantes', 'Auditórios'],
      btuRange: '18.000 a 80.000 BTUs',
      priceRange: 'A partir de R$ 6.500,00',
      icon: <Shield className="h-8 w-8" />,
      priceTable: [
        { btu: '18.000 BTUs', price: 'R$ 6.500,00 - R$ 8.500,00', area: 'Até 25m²' },
        { btu: '24.000 BTUs', price: 'R$ 7.000,00 - R$ 9.000,00', area: 'Até 35m²' },
        { btu: '30.000 BTUs', price: 'R$ 7.500,00 - R$ 9.500,00', area: 'Até 45m²' },
        { btu: '36.000 BTUs', price: 'R$ 7.500,00 - R$ 10.500,00', area: 'Até 55m²' },
        { btu: '48.000 BTUs', price: 'R$ 10.500,00 - R$ 12.500,00', area: 'Até 75m²' },
        { btu: '60.000 BTUs', price: 'R$ 11.000,00 - R$ 15.500,00', area: 'Até 95m²' },
        { btu: '80.000 BTUs', price: 'R$ 14.000,00 - R$ 18.000,00', area: 'Até 125m²' }
      ]
    },
    {
      id: 'cassete',
      name: 'Cassete',
      description: 'Perfeito para ambientes comerciais',
      image: '/images/cassete.png',
      features: ['4 direções de ar', 'Alta capacidade', 'Distribuição uniforme', 'Design embutido'],
      applications: ['Lojas', 'Escritórios', 'Restaurantes', 'Salões'],
      btuRange: '18.000 a 60.000 BTUs',
      priceRange: 'A partir de R$ 6.500,00',
      icon: <Wifi className="h-8 w-8" />,
      priceTable: [
        { btu: '18.000 BTUs', price: 'R$ 6.500,00 - R$ 8.500,00', area: 'Até 25m²' },
        { btu: '24.000 BTUs', price: 'R$ 8.000,00 - R$ 11.000,00', area: 'Até 35m²' },
        { btu: '30.000 BTUs', price: 'R$ 12.000,00 - R$ 16.500,00', area: 'Até 45m²' },
        { btu: '36.000 BTUs', price: 'R$ 13.000,00 - R$ 17.000,00', area: 'Até 55m²' },
        { btu: '48.000 BTUs', price: 'R$ 14.000,00 - R$ 19.500,00', area: 'Até 75m²' },
        { btu: '60.000 BTUs', price: 'R$ 15.000,00 - R$ 22.000,00', area: 'Até 95m²' }
      ]
    },
    {
      id: 'multi-split',
      name: 'Multi Split',
      description: 'Uma condensadora para vários ambientes',
      image: '/images/multi.png',
      features: ['Economia de espaço', 'Múltiplos ambientes', 'Controle independente', 'Estética limpa'],
      applications: ['Residências', 'Apartamentos', 'Consultórios'],
      btuRange: 'Combinável',
      priceRange: 'A partir de R$ 6.000,00',
      icon: <Award className="h-8 w-8" />,
      priceTable: [
        { btu: '2 Ambientes', price: 'R$ 6.000,00 - R$ 11.000,00', area: 'Combinável' },
        { btu: '3 Ambientes', price: 'R$ 14.000,00 - R$ 22.000,00', area: 'Combinável' },
        { btu: '4 Ambientes', price: 'R$ 20.000,00 - R$ 30.000,00', area: 'Combinável' }
      ]
    }
  ];

  const partners = [
    { name: 'Carrier', logo: '🏢', description: 'Qualidade e confiabilidade'},
    { name: 'Central ar', logo: '🔷', description: 'Especialista em climatização' },
    { name: 'Consul', logo: '⭐', description: 'Tradição brasileira',},
    { name: 'Daikin', logo: '🌟', description: 'Líder mundial em climatização',},
    { name: 'Dufrio', logo: '💎', description: 'Soluções completas',},
    { name: 'Frigelar', logo: '🛡️', description: 'Tecnologia e inovação', },
    { name: 'Fujitsu', logo: '❄️', description: 'Eficiência energética', },
    { name: 'Leroy Merlin', logo: '⚡', description: 'Variedade e qualidade',  }
  ];

  const reasons = [
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Atendimento Personalizado',
      description: 'Consultoria especializada para escolher o equipamento ideal'
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: 'Instalação Profissional',
      description: 'Técnicos certificados e experientes em todas as marcas'
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-orange-600" />,
      title: 'Melhores Preços',
      description: 'Preços competitivos e condições especiais de pagamento'
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: 'Pós-Venda Completo',
      description: 'Manutenção preventiva e suporte técnico sempre disponível'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? productTypes 
    : productTypes.filter(p => p.id === selectedCategory);

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4" onClick={onClose}>
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center z-10">
            <h2 className="text-base sm:text-xl font-bold text-gray-900 pr-2">{product.name}</h2>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
              aria-label="Fechar"
            >
              <X className="h-6 w-6 sm:h-5 sm:w-5" />
            </button>
          </div>

          <div className="p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{product.description}</p>

            <h3 className="text-lg font-bold text-gray-900 mb-4">Tabela de Preços Base</h3>
            
            <div className="bg-blue-50 rounded-lg p-4 mb-4">
              <p className="text-sm text-blue-800">
                <strong>Importante:</strong> Os preços são estimativas e podem variar de acordo com a marca, modelo e condições de instalação. Entre em contato para um orçamento personalizado.
              </p>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Capacidade</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Área</th>
                    <th className="text-left py-3 px-2 font-semibold text-gray-900">Preço Base</th>
                  </tr>
                </thead>
                <tbody>
                  {product.priceTable.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-2 font-medium text-blue-600">{item.btu}</td>
                      <td className="py-3 px-2 text-gray-600">{item.area}</td>
                      <td className="py-3 px-2 font-semibold text-green-600">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <a
              href="https://wa.me/message/4VRYN32UABLMJ1"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center hover:scale-105"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Solicitar Orçamento via WhatsApp
            </a>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Produtos que Instalamos
            </h1>
            <p className="text-base text-blue-100 mb-4">
              Trabalhamos com as melhores marcas e oferecemos soluções completas de climatização
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="https://wa.me/message/4VRYN32UABLMJ1"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center hover:scale-105"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Solicitar Orçamento
              </a>
              <a
                href="tel:1125039731"
                className="bg-white hover:bg-gray-100 text-blue-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                (11) 2503-9731
              </a>
            </div>
          </div>
        </div>
      </div>



      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80 bg-gradient-to-br from-gray-50 to-white rounded-t-xl">
                <div className="absolute inset-0 flex items-center justify-center p-10">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Capacidade</p>
                    <p className="font-semibold text-blue-600">{product.btuRange}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Preço Base</p>
                    <p className="font-semibold text-green-600">{product.priceRange}</p>
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-700 mb-1.5">Características:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-700 mb-1.5">Aplicações:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center hover:scale-105"
                >
                  <Info className="h-4 w-4 mr-2" />
                  Saber Mais e Ver Preços
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Nossos Parceiros e Fornecedores
            </h2>
            <p className="text-base text-gray-600">
              Trabalhamos com as marcas mais confiáveis do mercado
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((partner, index) => (
              <a
                key={index}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer block"
              >
                <div className="text-3xl mb-1.5">{partner.logo}</div>
                <h3 className="text-sm font-bold text-gray-900 mb-0.5">{partner.name}</h3>
                <p className="text-xs text-gray-600">{partner.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Por que Comprar Conosco?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-4 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  {reason.icon}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1.5">{reason.title}</h3>
                <p className="text-xs text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Pronto para Climatizar seu Ambiente?
          </h2>
          <p className="text-base text-blue-200 mb-4">
            Entre em contato e receba um orçamento personalizado
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <a
              href="https://wa.me/message/4VRYN32UABLMJ1"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center hover:scale-105"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="tel:1125039731"
              className="bg-white hover:bg-gray-100 text-blue-900 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;