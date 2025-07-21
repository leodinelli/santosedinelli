export const formatProductForWhatsApp = (product) => {
  const message = `
 *Santos & Dinelli - Ar Condicionado*

 *VIM PELO SITE E TENHO INTERESSE NESTE PRODUTO:*

 *${product.name}*
 *Marca:* ${product.brand}
 *Preço:* R$ ${product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
${product.originalPrice ? ` *De:* R$ ${product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}` : ''}
 *Potência:* ${product.btus.toLocaleString('pt-BR')} BTUs
 *Área recomendada:* ${product.specifications.area}

Gostaria de mais informações sobre fornecedores e condições de pagamento!
  `.trim();

  return encodeURIComponent(message);
};

export const generateWhatsAppLink = (product, phoneNumber = '5511947295062') => {
  const formattedMessage = formatProductForWhatsApp(product);
  return `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
};

export const redirectToWhatsApp = (product, phoneNumber = '5511947295062') => {
  const whatsappUrl = generateWhatsAppLink(product, phoneNumber);
  window.open(whatsappUrl, '_blank');
};