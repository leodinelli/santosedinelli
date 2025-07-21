import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Snowflake, 
  Zap, 
  Shield, 
  Truck, 
  Calculator,
  ArrowRight,
  Star,
  CheckCircle,
  Phone
} from 'lucide-react';

const Home = () => {
  const categories = [
    {
      title: 'Split Hi Wall',
      description: 'Ideais para quartos e salas',
      image: '/images/ar-split-1.jpg',
      btus: '9.000 a 36.000 BTUs'
    },
    {
      title: 'Inverter',
      description: 'Economia de até 60% na energia',
      image: '/images/Inverter.webp',
      btus: '9.000 a 30.000 BTUs'
    },
    {
      title: 'Cassete',
      description: 'Perfeitos para ambientes comerciais',
      image: '/images/ar-cassete-1.jpg',
      btus: '18.000 a 60.000 BTUs'
    }
  ];

  const environments = [
    {
      title: 'Para o Quarto',
      description: 'Até 15m² - 9.000 a 12.000 BTUs',
      image: '/images/quarto-climatizado.jpg'
    },
    {
      title: 'Para a Sala',
      description: 'Até 25m² - 18.000 a 24.000 BTUs',
      image: '/images/escritorio-climatizado.jpg'
    },
    {
      title: 'Para Escritório',
      description: 'Até 40m² - 30.000 a 36.000 BTUs',
      image: '/images/escritorio-climatizado.jpg'
    }
  ];

  const features = [
    {
      icon: <Snowflake className="h-8 w-8 text-blue-600" />,
      title: 'Climatização Perfeita',
      description: 'Temperatura ideal em todos os ambientes'
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: 'Economia de Energia',
      description: 'Tecnologia Inverter com até 60% de economia'
    },
    {
      icon: <Truck className="h-8 w-8 text-orange-600" />,
      title: 'Entrega e Instalação',
      description: 'Frete grátis e instalação profissional'
    }
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      rating: 5,
      comment: 'Excelente atendimento e instalação perfeita. Recomendo!'
    },
    {
      name: 'João Santos',
      rating: 5,
      comment: 'Produto de qualidade e preço justo. Muito satisfeito.'
    },
    {
      name: 'Ana Costa',
      rating: 5,
      comment: 'Equipe técnica muito competente. Serviço impecável.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ar Condicionado com
                <span className="text-blue-300"> Qualidade</span> e
                <span className="text-green-400"> Economia</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Encontre o ar condicionado perfeito para seu ambiente. 
                Produtos das melhores marcas com instalação profissional e garantia estendida.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/produtos"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  Ver Produtos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/calculadora"
                  className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Calcular BTUs
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Ofertas Especiais</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>10% OFF no PIX</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Parcelamento em até 10x no Cartão de crédito</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Frete grátis para todo Brasil*</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                    <span>Instalação profissional inclusa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Categorias de Produtos
            </h2>
            <p className="text-xl text-gray-600">
              Encontre o ar condicionado ideal para suas necessidades
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{category.description}</p>
                  <p className="text-blue-600 font-semibold mb-4">{category.btus}</p>
                  <Link
                    to="/produtos"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Ver Produtos
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environments Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha por Ambiente
            </h2>
            <p className="text-xl text-gray-600">
              Dimensionamento perfeito para cada espaço
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {environments.map((env, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="aspect-w-16 aspect-h-12 rounded-xl overflow-hidden">
                  <img
                    src={env.image}
                    alt={env.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{env.title}</h3>
                    <p className="text-blue-200">{env.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que Escolher a Santos e Dinelli Ar-Condicionado?
            </h2>
            <p className="text-xl text-gray-600">
              Qualidade, economia e atendimento especializado
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 10.000 clientes satisfeitos
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de Ajuda para Escolher?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Nossa equipe especializada está pronta para te atender
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1130000000"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              (11) 2503-9731
            </a>
            <Link
              to="/contato"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

