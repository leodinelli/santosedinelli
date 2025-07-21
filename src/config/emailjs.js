// Configurações do EmailJS
// Para configurar:
// 1. Crie uma conta em https://www.emailjs.com/
// 2. Crie um novo Service (Gmail, Outlook, etc.)
// 3. Crie um novo Email Template
// 4. Substitua os valores abaixo pelos seus

export const emailjsConfig = {
  serviceID: 'YOUR_SERVICE_ID', // Ex: 'service_abc123'
  templateID: 'YOUR_TEMPLATE_ID', // Ex: 'template_xyz789'
  publicKey: 'YOUR_PUBLIC_KEY', // Ex: 'user_abc123def456'
};

// Template sugerido para o EmailJS:
// Subject: Nova mensagem do site Santos&Dinelli
// Body:
/*
Nova mensagem recebida através do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Serviço: {{service}}

Mensagem:
{{message}}

---
Mensagem enviada automaticamente pelo site Santos&Dinelli
*/
