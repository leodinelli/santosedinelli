import React, { useState } from 'react';
import { Clock, MapPin, Phone, CheckCircle, Star, X } from 'lucide-react';
import { services, serviceAreas, workingHours } from '../data/servicesData';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const ServiceCard = ({ service }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="text-4xl mr-4">{service.icon}</div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
          <div>
            <span className="text-gray-600">Duração:</span>
            <div className="font-semibold">{service.duration}</div>
          </div>
          {service.warranty && (
            <div>
              <span className="text-gray-600">Garantia:</span>
              <div className="font-semibold">{service.warranty}</div>
            </div>
          )}
        </div>

        <button
          onClick={() => setSelectedService(service)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          Ver Preços e Agendar
        </button>
      </div>
    </div>
  );

  const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 sm:p-4 z-50" onClick={onClose}>
        <div className="bg-white rounded-xl max-w-4xl w-full max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center z-10">
            <h2 className="text-lg sm:text-2xl font-bold text-gray-900 pr-2">{service.title}</h2>
            <button
              onClick={onClose}
              className="flex-shrink-0 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
              aria-label="Fechar"
            >
              <X className="h-6 w-6 sm:h-5 sm:w-5" />
            </button>
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex items-center mb-4 sm:mb-6">
              <div className="text-3xl sm:text-4xl mr-3 sm:mr-4">{service.icon}</div>
              <div>
                <p className="text-sm sm:text-base text-gray-600">{service.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">O que está incluído:</h3>
                <div className="space-y-3">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Preços:</h3>
                <div className="space-y-3">
                  {service.pricing.map((price, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700">{price.type}</span>
                      <span className="font-semibold text-blue-600">{price.price}</span>
                    </div>
                  ))}
                </div>
                {service.note && (
                  <p className="text-sm text-gray-600 mt-3">{service.note}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6 p-4 bg-blue-50 rounded-lg">
              <div>
                <span className="text-gray-600">Duração do serviço:</span>
                <div className="font-semibold">{service.duration}</div>
              </div>
              {service.warranty && (
                <div>
                  <span className="text-gray-600">Garantia:</span>
                  <div className="font-semibold">{service.warranty}</div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-6"> 
              <a
                href={`https://wa.me/551125039731?text=Olá! Gostaria de agendar o serviço de *${service.title}*. Poderia me passar mais informações sobre preços e disponibilidade?`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="h-5 w-5 mr-2" />
                Agendar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nossos Serviços
            </h1>
            <p className="text-xl text-blue-200 mb-8">
              Instalação, manutenção e assistência técnica especializada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/551125039731"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                (11) 2503-9731
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Áreas de Atendimento
            </h2>
            <p className="text-lg text-gray-600">
              Atendemos toda a Grande São Paulo e região
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {serviceAreas.map((area, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-50 rounded-lg">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span className="text-gray-700">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working Hours */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Horários de Atendimento
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Segunda a Sexta</h3>
              <p className="text-gray-600">8h às 18h</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Sábado</h3>
              <p className="text-gray-600">8h às 14h</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <Clock className="h-8 w-8 text-gray-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Domingo</h3>
              <p className="text-gray-600">Fechado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O que Nossos Clientes Dizem
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Excelente serviço de instalação. Técnicos muito competentes e pontuais. 
                Recomendo!"
              </p>
              <p className="font-semibold">Carlos Silva</p>
              <p className="text-sm text-gray-600">Instalação Split 18.000 BTUs</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Manutenção preventiva impecável. Meu ar condicionado está funcionando 
                como novo!"
              </p>
              <p className="font-semibold">Ana Costa</p>
              <p className="text-sm text-gray-600">Manutenção Preventiva</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Assistência técnica rápida e eficiente. Problema resolvido no mesmo dia!"
              </p>
              <p className="font-semibold">João Santos</p>
              <p className="text-sm text-gray-600">Assistência Técnica</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Precisa de Atendimento?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Entre em contato conosco e agende seu serviço
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1125039731"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Ligar Agora
            </a>
            
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
};

export default Services;

