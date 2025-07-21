# Santos&Dinelli - Site de Ar Condicionado

Um site completo para venda de equipamentos de ar condicionado e serviços online, desenvolvido com React e Tailwind CSS.

## 🚀 Funcionalidades

### 🏠 Página Inicial

- Hero section atrativo com call-to-actions

- Produtos em destaque com preços e descontos

- Seção de serviços oferecidos

- Calculadora de BTUs integrada

- Seção de vantagens da empresa

### 🛍️ E-commerce

- Catálogo completo de produtos

- Sistema de filtros avançados (categoria, marca, BTUs, preço)

- Carrinho de compras funcional

- Cálculo automático de descontos (PIX)

- Parcelamento sem juros

- Sistema de avaliações e reviews

### 🔧 Serviços

- Instalação profissional

- Manutenção preventiva

- Assistência técnica

- Limpeza profunda

- Visita técnica

- Garantia estendida

- Modal detalhado para cada serviço

- Sistema de agendamento

### 📊 Calculadora de BTUs

- Formulário intuitivo para dimensionamento

- Cálculo baseado em múltiplos fatores:
  - Área do ambiente
  - Número de pessoas
  - Exposição solar
  - Eletrodomésticos
  - Tipo de ambiente

- Recomendações de produtos baseadas no resultado

### 📱 Design Responsivo

- Layout adaptável para desktop, tablet e mobile

- Menu hambúrguer para dispositivos móveis

- Cards de produtos otimizados

- Navegação touch-friendly

## 🛠️ Tecnologias Utilizadas

- **React 18** - Framework JavaScript

- **React Router** - Navegação entre páginas

- **Tailwind CSS** - Framework CSS utilitário

- **Lucide React** - Ícones modernos

- **Context API** - Gerenciamento de estado do carrinho

- **Local Storage** - Persistência do carrinho

## 📁 Estrutura do Projeto

```
site-ar-condicionado/
├── public/
│   ├── images/          # Imagens dos produtos
│   └── index.html
├── src/
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Páginas da aplicação
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── Calculator.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── data/           # Dados mock
│   │   ├── products.js
│   │   └── services.js
│   ├── context/        # Context API
│   │   └── CartContext.jsx
│   ├── App.jsx
│   └── main.jsx
├── demo.html           # Demo HTML standalone
└── README.md
```

## 🎨 Design e UX

### Paleta de Cores

- **Azul Principal**: #1e40af (confiança, profissionalismo)

- **Verde Ação**: #10b981 (compra, sucesso)

- **Roxo Calculadora**: #7c3aed (inovação, tecnologia)

- **Cinza Neutro**: #6b7280 (textos secundários)

### Tipografia

- **Títulos**: Font-weight bold, tamanhos responsivos

- **Textos**: Font-weight normal, boa legibilidade

- **CTAs**: Font-weight semibold, destaque visual

### Componentes

- **Cards**: Sombras suaves, hover effects

- **Botões**: Estados hover, cores semânticas

- **Formulários**: Focus states, validação visual

- **Modal**: Overlay escuro, animações suaves

## 📊 Dados e Conteúdo

### Produtos

- 6 produtos de exemplo com dados completos

- Informações técnicas detalhadas

- Preços, descontos e parcelamento

- Avaliações e reviews

- Especificações técnicas

### Serviços

- 6 tipos de serviços oferecidos

- Preços transparentes

- Descrições detalhadas

- Garantias e prazos

- Áreas de atendimento

### Calculadora

- Algoritmo baseado em normas técnicas

- Fatores múltiplos de cálculo

- Recomendações automáticas

- Interface intuitiva

## 🚀 Como Executar

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
```

### Produção

```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

### Demo HTML

Abra o arquivo `demo.html` diretamente no navegador para ver uma versão standalone do site.

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first:

- **Mobile** (< 768px): Layout em coluna única, menu hambúrguer

- **Tablet** (768px - 1024px): Grid de 2 colunas, navegação adaptada

- **Desktop** (> 1024px): Grid de 3 colunas, layout completo

## 🔧 Funcionalidades Técnicas

### Carrinho de Compras

- Adicionar/remover produtos

- Atualizar quantidades

- Cálculo automático de totais

- Persistência no localStorage

- Contador visual no header

### Filtros de Produtos

- Busca por texto

- Filtro por categoria

- Filtro por marca

- Filtro por BTUs

- Filtro por faixa de preço

- Ordenação múltipla

### Calculadora de BTUs

- Validação de campos

- Cálculo em tempo real

- Recomendações inteligentes

- Explicação do algoritmo

## 🎯 SEO e Performance

- Títulos e meta descriptions otimizados

- Estrutura semântica HTML5

- Imagens com alt text

- Loading lazy para imagens

- CSS otimizado com Tailwind

- Componentes React otimizados

## 📞 Informações de Contato

- **Telefone**: (11) 2503-9731

- **WhatsApp**: (11) 2503-9731

- **Email**: [sac@santosedinelli.com.br](mailto:sac@santosedinelli.com.br)

- **Horário**: Segunda a Sexta, 8h às 18h

## 🛡️ Garantias e Políticas

- Garantia de até 2 anos nos produtos*

- Instalação profissional

- Frete grátis para todo Brasil*

- 10% de desconto no PIX

- Parcelamento em até 12x no cartão de crédito

---

**Desenvolvido com ❤️ para oferecer a melhor experiência em climatização**

