import React, { useState } from 'react';
import { contactConfig, generateWhatsAppLink } from '../config/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    //texto whatsapp
    try {
      
      const message = `Nova mensagem do site Santos&Dinelli

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Serviço: ${formData.service || 'Não especificado'}

Mensagem:
${formData.message}

---
Mensagem enviada através do site`;

      
           
      const whatsappURL = generateWhatsAppLink(message);
      
    
      window.open(whatsappURL, '_blank');
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Erro ao gerar mensagem:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 lg:py-16 flex flex-col">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Cabeçalho */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você e encontrar a melhor solução em ar condicionado para seu ambiente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Informações de Contato */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 h-fit">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">Informações de Contato</h2>
            
            <div className="space-y-6">
              {/* Telefone */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Telefone</h3>
                  <p className="text-gray-600">{contactConfig.phoneDisplay}</p>
                  <p className="text-sm text-gray-500">Segunda a Sexta, 9h às 17h</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
                  <a 
                    href={generateWhatsAppLink('Olá! Vim através do site da Santos&Dinelli e gostaria de mais informações.')} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    {contactConfig.phoneDisplay}
                  </a>
                  <p className="text-sm text-gray-500">Atendimento rápido e direto</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <a 
                    href={`mailto:${contactConfig.email}`}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {contactConfig.email}
                  </a>
                  <p className="text-sm text-gray-500">Resposta em até 24h</p>
                </div>
              </div>

              {/* Endereço */}
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">Endereço</h3>
                  <p className="text-gray-600">{contactConfig.address.street}</p>
                  <p className="text-gray-600">{contactConfig.address.city}, {contactConfig.address.zipCode}</p>
                </div>
              </div>
            </div>

            {/* Horário de Funcionamento */}
            <div className="mt-6 lg:mt-8 p-4 lg:p-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 lg:mb-4 text-center">Horário de Atendimento</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Segunda a Sexta</span>
                  <span className="font-semibold text-gray-900">{contactConfig.workingHours.weekdays}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábado</span>
                  <span className="font-semibold text-gray-900">{contactConfig.workingHours.sunday}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingo</span>
                  <span className="font-semibold text-gray-900">{contactConfig.workingHours.sunday}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 h-fit">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">Envie sua Mensagem</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Digite seu nome completo"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Digite seu email"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Serviço de Interesse */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Selecione um serviço</option>
                  <option value="Instalação">Instalação de Ar Condicionado</option>
                  <option value="Manutenção">Manutenção Preventiva</option>
                  <option value="Reparou ou Concerto">Reparo/Conserto</option>
                  <option value="Limpeza">Limpeza e Higienização</option>
                  <option value="Orçamento">Orçamento Personalizado</option>
                  <option value="Não Especificado">Outros</option>
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Descreva sua necessidade ou dúvida..."
                ></textarea>
              </div>

              {/* Botão de Envio */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-6 rounded-lg font-semibold focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors shadow-lg ${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {isLoading ? 'Preparando...' : 'Enviar via WhatsApp'}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                  <p className="text-green-800">
                     Mensagem preparada! O WhatsApp foi aberto com sua mensagem pronta para envio.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                  <p className="text-red-800">
                     Erro ao preparar mensagem. Tente novamente ou entre em contato diretamente pelo WhatsApp.
                  </p>
                </div>
              )}
            </form>

            {/* Informação adicional */}
            <div className="mt-4 lg:mt-6 text-center">
              <p className="text-xs lg:text-sm text-gray-500">
                Ao clicar em "Enviar via WhatsApp", sua mensagem será formatada e o WhatsApp será aberto automaticamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

