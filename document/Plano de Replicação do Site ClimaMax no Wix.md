# Plano de Replicação do Site Santos&Dinelli no Wix

Este documento detalha como replicar as funcionalidades do site de ar condicionado "Santos&Dinelli" dentro da plataforma Wix, utilizando suas ferramentas nativas. O Wix é uma plataforma de construção de sites "arrastar e soltar" que oferece um ecossistema completo para criar e gerenciar sua presença online, incluindo e-commerce, agendamento de serviços e personalização de design. Ao invés de importar código, a abordagem será a de configurar e personalizar os recursos existentes do Wix para atender às suas necessidades.

## 1. Abordagem de Construção no Wix e Ferramentas Nativas

O Wix opera com um editor visual intuitivo que permite aos usuários criar páginas, adicionar elementos e configurar funcionalidades sem a necessidade de codificação complexa. Ele oferece uma série de aplicativos e recursos integrados que cobrem a maioria das necessidades de um negócio online.

### O Editor Wix

O coração da criação de sites no Wix é o seu editor. Ele permite que você:

*   **Escolha um Template**: O Wix oferece centenas de templates profissionais e responsivos que servem como ponto de partida. Você pode selecionar um template relacionado a serviços ou e-commerce para ar condicionado ou um template em branco para maior liberdade de design.
*   **Arrastar e Soltar Elementos**: Adicione seções, caixas de texto, imagens, vídeos, botões, formulários e outros elementos arrastando-os para a página e posicionando-os onde desejar.
*   **Personalizar Design**: Altere cores, fontes, planos de fundo, animações e outros aspectos visuais para alinhar o site com a identidade da sua marca.
*   **Gerenciar Páginas**: Crie, organize e gerencie todas as páginas do seu site, incluindo a navegação do menu.

### Aplicativos e Funcionalidades Nativas do Wix

Para replicar as funcionalidades do site React, utilizaremos os seguintes aplicativos e recursos nativos do Wix:

*   **Wix Stores**: Para o catálogo de produtos e funcionalidades de e-commerce.
*   **Wix Bookings**: Para o agendamento de serviços.
*   **Wix Forms**: Para formulários de contato e orçamentos.
*   **Wix Blog**: Se desejar adicionar um blog com dicas sobre ar condicionado.
*   **Wix SEO Tools**: Para otimização de busca.
*   **Velo by Wix (Wix Corvid)**: Para funcionalidades personalizadas que exigem código, como a calculadora de BTUs. Velo é a plataforma de desenvolvimento do Wix que permite adicionar JavaScript e APIs para estender a funcionalidade do site [1].

### Vantagens de Usar o Wix

*   **Facilidade de Uso**: O editor "arrastar e soltar" torna a criação e edição do site acessível mesmo para quem não tem conhecimento técnico.
*   **Tudo em Um**: Hospedagem, domínio, e-commerce, agendamento, CRM e ferramentas de marketing são integrados na mesma plataforma.
*   **Manutenção Simplificada**: O Wix cuida da infraestrutura, segurança e atualizações, permitindo que você se concentre no seu negócio.
*   **Design Responsivo**: A maioria dos templates e elementos do Wix são otimizados para exibição em diferentes dispositivos (desktop, tablet, mobile).

### Desafios e Considerações

*   **Flexibilidade Limitada**: Embora poderoso, o Wix pode ter limitações em comparação com um site customizado em React, especialmente para designs muito específicos ou lógicas de negócio altamente complexas que não se encaixam nos modelos pré-definidos.
*   **Curva de Aprendizagem (Velo)**: Para funcionalidades avançadas como a calculadora de BTUs, será necessário aprender e utilizar o Velo by Wix, que envolve codificação em JavaScript.
*   **Migração de Dados**: Será necessário inserir manualmente ou importar (se o Wix oferecer ferramentas de importação para o seu caso) os dados de produtos e serviços para as respectivas plataformas do Wix.

Com este plano, você terá um guia passo a passo para construir um site robusto e funcional no Wix, replicando as principais características do site React, mas com a vantagem de poder gerenciá-lo e editá-lo diretamente na plataforma Wix.

---

**Referências:**
[1] Velo by Wix: https://www.wix.com/velo

**Autor**: Manus AI
**Data**: 14 de Julho de 2025



## 2. Replicação do Catálogo de Produtos e E-commerce no Wix Stores

O Wix Stores é a solução de e-commerce integrada do Wix, projetada para gerenciar produtos, pedidos, pagamentos e envios. Ele oferece todas as ferramentas necessárias para criar uma loja online completa, similar ao catálogo de produtos e funcionalidades de e-commerce que foram desenvolvidas no site React.

### 2.1. Configuração Inicial do Wix Stores

Para começar, você precisará adicionar o aplicativo Wix Stores ao seu site Wix. Isso pode ser feito diretamente do editor do Wix ou do painel de controle. Uma vez adicionado, você terá acesso a um painel de gerenciamento de loja onde poderá configurar todos os aspectos do seu e-commerce.

### 2.2. Adição de Produtos

Cada produto (ar condicionado) no seu catálogo precisará ser adicionado individualmente ao Wix Stores. Para cada produto, você poderá configurar:

*   **Nome do Produto**: Ex: "Ar Condicionado Split Hi Wall Samsung WindFree 12.000 BTUs".
*   **Imagens e Vídeos**: Faça o upload das imagens dos produtos. O Wix permite adicionar múltiplas imagens e até vídeos para cada produto, o que é ótimo para mostrar diferentes ângulos ou funcionalidades.
*   **Descrição**: Inclua uma descrição detalhada do produto, destacando suas características, benefícios e especificações técnicas. Você pode usar o texto que já está no `src/data/products.js` como base.
*   **Preço**: Defina o preço de venda. O Wix Stores permite configurar preços promocionais, como "preço original" e "preço com desconto", para destacar ofertas.
*   **Opções de Produto (Variações)**: Para ar condicionado, as variações são cruciais. Você pode adicionar opções como:
    *   **BTUs**: 9.000, 12.000, 18.000, 24.000, etc.
    *   **Voltagem**: 110V, 220V (Monofásico, Bifásico, Trifásico).
    *   **Ciclo**: Frio, Quente/Frio.
    *   **Cor**: Branco, Prata, etc.
    *   Cada combinação de opção pode ter seu próprio SKU, preço e estoque.
*   **Estoque**: Gerencie o estoque de cada variação do produto. O Wix Stores pode rastrear o estoque e alertar quando os níveis estão baixos.
*   **Categorias**: Organize seus produtos em categorias (ex: "Split Hi Wall", "Cassete", "Multi Split", "Inverter"). Isso ajuda os clientes a navegar e encontrar o que procuram.
*   **Marcas**: Crie uma lista de marcas e associe os produtos a elas. Isso permite que os clientes filtrem por marca.
*   **Informações Adicionais (Campos Personalizados)**: O Wix Stores permite adicionar campos de texto personalizados aos produtos. Você pode usar isso para incluir informações como:
    *   Área de Cobertura (m²)
    *   Nível de Ruído (dB)
    *   Classificação de Eficiência Energética (Selo Procel)
    *   Garantia do Fabricante
    *   Características Específicas (Wi-Fi, WindFree, Dual Inverter, etc.)

### 2.3. Funcionalidades de E-commerce

O Wix Stores oferece um conjunto robusto de funcionalidades de e-commerce que replicam e, em alguns casos, superam as funcionalidades básicas do site React:

*   **Carrinho de Compras**: Um carrinho de compras totalmente funcional, onde os clientes podem adicionar, remover e atualizar a quantidade de produtos. O carrinho é persistente, ou seja, os itens permanecem no carrinho mesmo que o cliente saia do site e retorne mais tarde.
*   **Checkout Seguro**: Um processo de checkout otimizado e seguro, com opções para:
    *   **Pagamentos**: Integre com diversos gateways de pagamento (PagSeguro, Mercado Pago, PayPal, Stripe, etc.) para aceitar cartões de crédito, boleto, PIX e outras formas de pagamento. Para o desconto no PIX, você pode configurar uma regra de desconto específica para essa forma de pagamento.
    *   **Envio**: Configure opções de envio com base no peso, preço ou localização. Você pode integrar com serviços de entrega ou oferecer retirada na loja.
    *   **Informações do Cliente**: Coleta de dados de entrega e contato.
*   **Gerenciamento de Pedidos**: Acompanhe todos os pedidos, atualize status, imprima etiquetas de envio e gerencie devoluções diretamente do painel do Wix.
*   **Promoções e Descontos**: Crie cupons de desconto, promoções de frete grátis, descontos por volume e outras ofertas para incentivar as vendas. A funcionalidade de 10% OFF no PIX pode ser configurada como uma regra de desconto.
*   **Avaliações de Produtos**: O Wix Stores inclui um sistema de avaliações e reviews, permitindo que os clientes deixem feedback sobre os produtos. Isso ajuda a construir confiança e credibilidade.
*   **Recuperação de Carrinho Abandonado**: Ferramentas para enviar e-mails automáticos para clientes que adicionaram itens ao carrinho, mas não finalizaram a compra, incentivando-os a retornar.
*   **Filtros e Busca**: O Wix Stores oferece opções de filtros e busca para o catálogo de produtos, permitindo que os clientes encontrem facilmente o que procuram por categoria, preço, marca, etc. Você pode configurar filtros personalizados com base nas opções de produto que você definiu (BTUs, ciclo, etc.).

### 2.4. Design da Página de Produtos e Loja

O Wix oferece layouts pré-definidos para as páginas de loja e produto, que podem ser personalizados para se adequarem ao design do seu site. Você pode:

*   **Escolher Layouts**: Selecione entre diferentes layouts para a página da sua loja (grade, lista, etc.) e para as páginas de produto individuais.
*   **Personalizar Elementos**: Altere o design dos botões "Adicionar ao Carrinho", a exibição de preços, a localização das descrições e outros elementos visuais.
*   **Adicionar Seções Personalizadas**: Use o editor do Wix para adicionar seções personalizadas às páginas de produto, como uma seção de "Perguntas Frequentes" ou "Produtos Relacionados".

Ao utilizar o Wix Stores, você terá uma solução de e-commerce robusta e integrada, que pode ser gerenciada de forma intuitiva sem a necessidade de codificação, replicando as funcionalidades de venda de equipamentos do site React de forma eficaz.

---

**Autor**: Manus AI
**Data**: 14 de Julho de 2025



## 3. Replicação dos Serviços e Agendamento no Wix Bookings

O Wix Bookings é a ferramenta ideal para gerenciar e agendar serviços diretamente no seu site Wix. Ele permite que seus clientes reservem horários para instalação, manutenção, consultoria e outros serviços de ar condicionado de forma online, replicando a funcionalidade de agendamento presente no site React.

### 3.1. Adição e Configuração de Serviços

Para cada serviço que você oferece (como "Instalação Profissional", "Manutenção Preventiva", "Assistência Técnica", "Limpeza Profunda", "Consultoria Técnica" e "Garantia Estendida"), você precisará configurá-lo no Wix Bookings. Para cada serviço, você pode definir:

*   **Nome do Serviço**: Ex: "Instalação Profissional de Ar Condicionado".
*   **Tipo de Serviço**: Pode ser uma sessão individual (para instalações e manutenções) ou uma aula/evento (se você oferecer workshops ou treinamentos, por exemplo).
*   **Descrição**: Forneça uma descrição detalhada do serviço, incluindo o que está incluído, benefícios e quaisquer notas importantes. Você pode usar o texto do `src/data/services.js` como base.
*   **Imagens e Vídeos**: Adicione imagens ou vídeos relevantes para cada serviço, tornando a página mais atraente.
*   **Preço**: Defina o preço do serviço. O Wix Bookings permite diferentes opções de precificação:
    *   **Preço Fixo**: Para serviços com valor único.
    *   **Preço Variável**: Se o preço depender de fatores como BTUs, tipo de aparelho, etc. Você pode usar campos personalizados ou notas para explicar a variação.
    *   **Planos de Assinatura**: Para serviços recorrentes, como planos de manutenção anual.
    *   **Pacotes**: Ofereça pacotes de serviços (ex: "Instalação + 1 Manutenção Preventiva").
*   **Duração**: Especifique a duração estimada de cada serviço. Isso é crucial para o agendamento.
*   **Localização**: Indique onde o serviço será prestado (no local do cliente, na sua loja, online para consultoria, etc.).
*   **Formulário de Entrada**: Crie um formulário personalizado para coletar informações adicionais do cliente no momento do agendamento (ex: tipo de ar condicionado, endereço, melhor horário para contato).

### 3.2. Gerenciamento de Equipe e Disponibilidade

Se você tiver uma equipe de técnicos, o Wix Bookings permite gerenciar a disponibilidade de cada um:

*   **Adicionar Membros da Equipe**: Crie perfis para seus técnicos, incluindo nome, foto e uma breve descrição.
*   **Definir Horários de Trabalho**: Configure os horários de trabalho de cada técnico, incluindo pausas e dias de folga.
*   **Atribuir Serviços**: Atribua quais serviços cada técnico pode realizar.
*   **Sincronização de Calendário**: Os técnicos podem sincronizar seus calendários do Wix Bookings com calendários externos (Google Calendar, Outlook) para evitar conflitos e gerenciar sua agenda de forma eficiente.

### 3.3. Configurações de Agendamento

O Wix Bookings oferece diversas opções para personalizar o processo de agendamento:

*   **Política de Agendamento**: Defina o tempo mínimo de antecedência para agendamentos, o tempo máximo para agendamentos futuros, e se os clientes podem reagendar ou cancelar.
*   **Confirmações e Lembretes**: Configure e-mails e SMS automáticos de confirmação de agendamento, lembretes e acompanhamento pós-serviço.
*   **Pagamentos Online**: Permita que os clientes paguem pelo serviço no momento do agendamento, utilizando os mesmos gateways de pagamento configurados no Wix Stores.
*   **Agendamento Recorrente**: Para serviços como manutenção preventiva, os clientes podem agendar sessões recorrentes.

### 3.4. Integração com o Site

Uma vez que os serviços e a equipe estejam configurados, você pode adicionar os elementos de agendamento ao seu site Wix:

*   **Página de Serviços**: O Wix Bookings cria automaticamente uma página de serviços onde todos os seus serviços são listados. Você pode personalizar o layout e o design desta página.
*   **Botões de Agendamento**: Adicione botões "Agendar Agora" ou "Reservar" em qualquer página do seu site, linkando diretamente para o serviço específico ou para a página de agendamento geral.
*   **Widgets de Agendamento**: Incorpore widgets de agendamento em seções específicas do seu site, como na página inicial ou em páginas de produtos relacionadas.

### 3.5. Gerenciamento de Clientes e Relatórios

O Wix Bookings também oferece ferramentas para gerenciar seus clientes e acompanhar o desempenho dos seus serviços:

*   **Lista de Clientes**: Mantenha um registro de todos os clientes que agendaram serviços, com seus dados de contato e histórico de agendamentos.
*   **Relatórios**: Acesse relatórios sobre agendamentos, receita de serviços e desempenho da equipe, ajudando você a tomar decisões estratégicas.

Ao utilizar o Wix Bookings, você poderá oferecer um sistema de agendamento online completo e profissional, facilitando a vida dos seus clientes e otimizando a gestão dos seus serviços de instalação e manutenção de ar condicionado.

---

**Autor**: Manus AI
**Data**: 14 de Julho de 2025



## 4. Replicação da Calculadora de BTUs via Velo by Wix

A calculadora de BTUs é uma funcionalidade personalizada que não possui um aplicativo nativo "arrastar e soltar" no Wix. Para replicar essa funcionalidade, será necessário utilizar o **Velo by Wix** (anteriormente conhecido como Wix Corvid), a plataforma de desenvolvimento do Wix que permite adicionar código JavaScript e interagir com os elementos do site e o banco de dados.

### 4.1. Entendendo o Velo by Wix

Velo by Wix é um ambiente de desenvolvimento full-stack que permite estender a funcionalidade do seu site Wix com código JavaScript. Com Velo, você pode:

*   **Interagir com Elementos da Página**: Acessar e manipular elementos visuais (caixas de texto, botões, dropdowns) e seus valores.
*   **Trabalhar com Banco de Dados**: Conectar-se a coleções de dados do Wix (que funcionam como bancos de dados) para armazenar e recuperar informações.
*   **Criar Funções de Backend**: Escrever código JavaScript que roda no servidor (backend) para lógica de negócios complexa ou integração com APIs externas.
*   **Expor APIs**: Criar endpoints de API personalizados para seu site Wix.

### 4.2. Abordagem para a Calculadora de BTUs

A replicação da calculadora de BTUs envolverá os seguintes passos principais:

1.  **Criação da Interface no Editor Wix**: No editor visual do Wix, você precisará criar os elementos de interface para a calculadora:
    *   **Campos de Entrada**: Caixas de texto para "Área do Ambiente (m²)", "Número de Pessoas", "Número de Eletrodomésticos", etc.
    *   **Dropdowns (Listas Suspensa)**: Para "Exposição Solar" (Pouca, Média, Muita), "Tipo de Ambiente" (Residencial, Comercial), etc.
    *   **Botão**: Um botão para "Calcular BTUs Necessários".
    *   **Campo de Resultado**: Um campo de texto ou elemento de texto para exibir o resultado em BTUs.

2.  **Escrita do Código JavaScript (Velo)**:
    *   **Habilitar o Modo Desenvolvedor**: No editor do Wix, você precisa ativar o "Modo Desenvolvedor" para acessar o painel de código Velo.
    *   **Lógica da Calculadora**: Você precisará reescrever a lógica da calculadora de BTUs em JavaScript. A lógica do site React (`src/pages/Calculator.jsx`) pode servir como base, mas precisará ser adaptada para a sintaxe e o ambiente do Velo. Os principais fatores a considerar são:
        *   **Área do Ambiente**: Multiplicar a área por um fator base (ex: 600-800 BTUs/m²).
        *   **Número de Pessoas**: Adicionar um valor fixo de BTUs por pessoa (ex: 600 BTUs/pessoa).
        *   **Exposição Solar**: Ajustar o resultado com base na exposição solar (ex: +10% para muita exposição, -10% para pouca).
        *   **Eletrodomésticos**: Adicionar BTUs para cada eletrodoméstico (ex: 600 BTUs por TV, computador, etc.).
        *   **Tipo de Ambiente**: Ajustar o fator base para ambientes comerciais, que geralmente exigem mais BTUs.
    *   **Conexão com Elementos da Página**: O código Velo precisará "escutar" os eventos dos elementos da interface (ex: clique no botão "Calcular"). Ele então pegará os valores dos campos de entrada, realizará o cálculo e exibirá o resultado no campo de resultado.

    ```javascript
    // Exemplo simplificado de código Velo para a calculadora de BTUs
    // Este código deve ser adaptado e expandido com a lógica completa

    import wixData from 'wix-data';

    $w.onReady(function () {
        $w('#calculateButton').onClick(() => {
            const area = parseFloat($w('#areaInput').value);
            const people = parseInt($w('#peopleDropdown').value);
            const sunExposure = $w('#sunExposureDropdown').value;
            // const appliances = parseInt($w('#appliancesInput').value); // Se houver

            let btuResult = area * 600; // Base por m²

            btuResult += people * 600; // BTUs por pessoa

            if (sunExposure === 'Muita') {
                btuResult *= 1.2; // Aumenta 20% para muita exposição solar
            } else if (sunExposure === 'Pouca') {
                btuResult *= 0.9; // Diminui 10% para pouca exposição solar
            }

            // Adicionar lógica para eletrodomésticos, tipo de ambiente, etc.

            $w('#resultText').text = `BTUs Necessários: ${Math.round(btuResult)} BTUs`;
        });
    });
    ```

3.  **Validação e Recomendações (Opcional)**:
    *   Você pode adicionar validações para garantir que os usuários insiram dados válidos.
    *   Para as recomendações de produtos baseadas no resultado, você pode usar o Velo para consultar sua coleção de produtos do Wix Stores e exibir produtos que correspondam à faixa de BTUs calculada. Isso exigiria uma integração com o banco de dados do Wix.

### 4.3. Considerações para o Velo by Wix

*   **Conhecimento de JavaScript**: A implementação da calculadora exigirá um bom entendimento de JavaScript e da API do Velo by Wix.
*   **Testes**: É crucial testar a calculadora exaustivamente para garantir que os cálculos estejam corretos e que a interface funcione como esperado.
*   **Manutenção**: Se a lógica da calculadora precisar ser atualizada no futuro, será necessário modificar o código Velo.

Embora a calculadora de BTUs seja a funcionalidade mais complexa de replicar no Wix sem um aplicativo pronto, o Velo by Wix oferece a flexibilidade necessária para construí-la. Será um processo que exigirá mais tempo e, possivelmente, a ajuda de alguém com experiência em Velo, caso você não tenha familiaridade com programação.

---

**Autor**: Manus AI
**Data**: 14 de Julho de 2025



## 5. Design Responsivo e Otimização no Wix

Um site moderno e eficaz deve ser responsivo, ou seja, adaptar-se e ter uma boa aparência em diferentes tamanhos de tela, desde desktops grandes até smartphones. O Wix oferece ferramentas e práticas para garantir que seu site de ar condicionado seja otimizado para todos os dispositivos e tenha um bom desempenho.

### 5.1. Design Responsivo no Wix

O Wix, por padrão, tenta criar sites responsivos. No entanto, o nível de responsividade pode variar dependendo do template escolhido e da forma como os elementos são adicionados e organizados. É crucial verificar e ajustar o design para cada tipo de dispositivo.

*   **Editor de Mobile**: O Wix possui um editor de mobile dedicado que permite visualizar e otimizar a aparência do seu site especificamente para smartphones e tablets. Você pode acessar este editor através do ícone de celular no topo do editor principal.
*   **Otimização Automática**: O Wix tenta otimizar automaticamente o layout para dispositivos móveis, reorganizando elementos e redimensionando fontes. No entanto, é fundamental revisar e fazer ajustes manuais.
*   **Ajustes Manuais**: No editor de mobile, você pode:
    *   **Reorganizar Elementos**: Mover, redimensionar e ocultar elementos específicos para mobile que não funcionam bem em telas menores.
    *   **Ajustar Fontes e Espaçamento**: Garantir que o texto seja legível e que haja espaçamento adequado entre os elementos.
    *   **Otimizar Imagens**: O Wix geralmente otimiza as imagens automaticamente, mas certifique-se de que elas carregam rapidamente no mobile.
*   **Menu Mobile (Hambúrguer)**: O Wix automaticamente converte o menu de navegação para um ícone de hambúrguer em dispositivos móveis, que se expande ao ser clicado. Certifique-se de que ele esteja funcionando corretamente e seja fácil de usar.
*   **Testar em Diferentes Dispositivos**: Use as ferramentas de visualização do Wix ou teste o site em dispositivos reais para garantir uma experiência consistente.

### 5.2. Otimização de Performance no Wix

A velocidade de carregamento do site é crucial para a experiência do usuário e para o SEO. O Wix oferece algumas ferramentas e práticas recomendadas para otimizar a performance do seu site:

*   **Otimização de Imagens**: Imagens grandes e não otimizadas são uma das principais causas de lentidão. O Wix possui otimização de imagem automática, mas você pode:
    *   **Comprimir Imagens**: Use ferramentas de compressão antes de fazer o upload para o Wix.
    *   **Formatos Modernos**: O Wix suporta formatos como WebP, que são mais eficientes.
    *   **Lazy Loading**: O Wix implementa lazy loading para imagens, o que significa que as imagens só carregam quando estão visíveis na tela, melhorando o tempo de carregamento inicial.
*   **Vídeos**: Evite vídeos de reprodução automática na página inicial, pois eles podem consumir muitos recursos e atrasar o carregamento.
*   **Aplicativos e Widgets**: Cada aplicativo ou widget adicionado ao seu site pode adicionar código e impactar a performance. Use apenas os aplicativos essenciais e remova os que não são necessários.
*   **Fontes**: Limite o número de fontes personalizadas e use fontes seguras para a web sempre que possível. O carregamento de muitas fontes pode atrasar o site.
*   **Código Velo (se aplicável)**: Se você usar Velo by Wix para a calculadora de BTUs, certifique-se de que o código seja eficiente e otimizado. Evite loops desnecessários ou operações complexas que possam atrasar o carregamento da página.
*   **Cache**: O Wix gerencia o cache do site automaticamente para melhorar a velocidade de carregamento para visitantes recorrentes.
*   **CDN (Content Delivery Network)**: O Wix utiliza CDNs para entregar o conteúdo do seu site de servidores mais próximos aos seus visitantes, reduzindo a latência.

### 5.3. Otimização para Motores de Busca (SEO) no Wix

Um bom SEO é fundamental para que seu site seja encontrado no Google e em outros motores de busca. O Wix oferece ferramentas de SEO integradas para ajudar você a otimizar seu site:

*   **Assistente de SEO do Wix**: Um guia passo a passo que ajuda a configurar o SEO básico do seu site, incluindo palavras-chave, meta descrições e títulos de página.
*   **Configurações de SEO por Página**: Para cada página do seu site (incluindo páginas de produtos e serviços do Wix Stores e Bookings), você pode personalizar:
    *   **Título da Página (Title Tag)**: O título que aparece na aba do navegador e nos resultados de busca. Deve ser conciso e incluir palavras-chave relevantes.
    *   **Meta Descrição**: Um breve resumo do conteúdo da página que aparece abaixo do título nos resultados de busca. Deve ser persuasiva e incluir palavras-chave.
    *   **URL Slug**: A parte final do endereço da página. Deve ser limpa e descritiva.
*   **Textos Alternativos (Alt Text) para Imagens**: Adicione descrições de texto para todas as suas imagens. Isso ajuda os motores de busca a entender o conteúdo das imagens e melhora a acessibilidade.
*   **Estrutura de Cabeçalhos (H1, H2, etc.)**: Use os cabeçalhos de forma hierárquica para organizar o conteúdo da sua página. O Wix permite que você defina o tipo de cabeçalho para cada texto.
*   **Mobile-First Indexing**: O Google prioriza a versão mobile do seu site para indexação. Ao otimizar seu site para mobile no Wix, você já está contribuindo para um melhor SEO.
*   **Sitemap e Robots.txt**: O Wix gera automaticamente um sitemap (mapa do site) e um arquivo robots.txt, que ajudam os motores de busca a rastrear e indexar seu site de forma eficiente.
*   **Integração com Google Search Console**: Conecte seu site Wix ao Google Search Console para monitorar o desempenho de busca, identificar problemas e enviar seu sitemap.

Ao seguir estas diretrizes de design responsivo e otimização, você pode garantir que seu site Wix não apenas tenha uma ótima aparência em qualquer dispositivo, mas também seja encontrado por clientes em potencial através dos motores de busca.

---

**Autor**: Manus AI
**Data**: 14 de Julho de 2025

