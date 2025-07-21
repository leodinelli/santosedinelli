# 📧 Guia de Configuração do EmailJS

## Passo a Passo para Configurar o EmailJS

### 1. 🔗 Criar Conta no EmailJS
- Acesse: https://www.emailjs.com/
- Clique em "Sign Up" e crie sua conta gratuita
- Confirme seu email

### 2. 📮 Configurar um Serviço de Email

#### Opção A: Gmail
1. No dashboard, clique em "Email Services"
2. Clique em "Add New Service"
3. Escolha "Gmail"
4. Conecte sua conta Gmail
5. Anote o **Service ID** gerado

#### Opção B: Outlook/Hotmail
1. Escolha "Outlook"
2. Conecte sua conta Microsoft
3. Anote o **Service ID** gerado

### 3. 📝 Criar Template de Email
1. Vá para "Email Templates"
2. Clique em "Create New Template"
3. Use este template sugerido:

**Subject:**
```
Nova mensagem do site Santos&Dinelli
```

**Content:**
```
Nova mensagem recebida através do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}
Serviço: {{service}}

Mensagem:
{{message}}

---
Mensagem enviada automaticamente pelo site Santos&Dinelli
Para: {{to_email}}
```

4. Salve e anote o **Template ID**

### 4. 🔑 Obter Public Key
1. Vá para "Integration"
2. Copie seu **Public Key**

### 5. ⚙️ Configurar no Projeto
Edite o arquivo `src/config/emailjs.js`:

```javascript
export const emailjsConfig = {
  serviceID: 'service_seu_id_aqui',    // Cole seu Service ID
  templateID: 'template_seu_id_aqui',  // Cole seu Template ID
  publicKey: 'sua_public_key_aqui',    // Cole sua Public Key
};
```

### 6. ✅ Testar
1. Execute o projeto: `npm run dev`
2. Vá para a página de contato
3. Preencha e envie o formulário
4. Verifique se o email chegou na sua caixa de entrada

## 🎯 Plano Gratuito
- ✅ 200 emails por mês
- ✅ 2 templates
- ✅ Suporte básico

## 🚀 Dicas Importantes
- Configure um filtro no Gmail para organizar os emails do site
- Teste sempre depois de configurar
- O email pode cair na pasta de spam inicialmente
- Mantenha suas credenciais seguras

## 📞 Alternativas se não funcionar
- WhatsApp: Link direto já configurado
- Telefone: (11) 2503-9731
- Email direto: contato@santosdinelli.com.br
