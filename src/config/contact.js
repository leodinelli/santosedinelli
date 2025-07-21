export const contactConfig = {
  whatsappNumber: '551125039731', 
  phoneDisplay: '(11) 2503-9731', //exibição aqui
  email: 'sac@santosedinelli.com.br',
  
  address: {
    street: 'Rua Silva Bueno, 1660',
    city: 'São Paulo - SP',
    zipCode: '04208-000'
  },

  workingHours: {
    weekdays: '09:00 - 17:00',
    saturday: '08:00 - 14:00',
    sunday: 'Fechado'
  }
};

// gera o link do whatsapp pegando a mensage
export const generateWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${contactConfig.whatsappNumber}?text=${encodedMessage}`;
};

// set padrao
export const defaultWhatsAppMessage = `Olá! Vim através do site da Santos&Dinelli e gostaria de mais informações sobre ar condicionado.`;
