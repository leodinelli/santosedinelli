# Guia de Edição do Site Santos&Dinelli (React)

O site "Santos&Dinelli - Ar Condicionado & Serviços" foi desenvolvido utilizando **React**, uma biblioteca JavaScript popular para a construção de interfaces de usuário. Para editar o site, você precisará modificar diretamente os arquivos de código-fonte. Este guia irá te orientar sobre como fazer isso e onde encontrar os principais arquivos.

## 1. Localização do Projeto

O projeto completo do site está localizado no seguinte diretório no ambiente de sandbox:

`/home/ubuntu/site-ar-condicionado/`

Dentro deste diretório, você encontrará todos os arquivos e pastas que compõem o site.

## 2. Estrutura do Projeto

Compreender a estrutura do projeto é fundamental para saber onde fazer as edições. Abaixo, uma visão geral das pastas e arquivos mais importantes:

```
site-ar-condicionado/
├── public/             # Contém arquivos estáticos (imagens, index.html)
│   ├── images/         # Suas imagens de produtos e outros ativos visuais
│   └── index.html      # O arquivo HTML principal que carrega a aplicação React
├── src/                # Onde a maior parte do código React está localizada
│   ├── components/     # Componentes React reutilizáveis (ex: Header, Footer)
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   ├── pages/          # Páginas principais da aplicação (ex: Home, Products, Services)
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Services.jsx
│   │   ├── Calculator.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── data/           # Arquivos com dados mock (simulados) para produtos e serviços
│   │   ├── products.js   # Dados dos produtos (nome, preço, descrição, etc.)
│   │   └── services.js   # Dados dos serviços (título, descrição, preços, etc.)
│   ├── context/        # Context API para gerenciamento de estado global (ex: carrinho de compras)
│   │   └── CartContext.jsx # Lógica do carrinho de compras
│   ├── App.jsx         # O componente principal que define as rotas e a estrutura geral do site
│   ├── main.jsx        # Ponto de entrada da aplicação React
│   └── App.css         # Arquivo de estilos CSS globais (além do Tailwind CSS)
├── package.json        # Lista as dependências do projeto e scripts de execução
├── README.md           # Documentação do projeto (o arquivo que te enviei anteriormente)
└── demo.html           # Uma versão HTML estática para visualização rápida (não é o código React)
```

## 3. Como Editar o Conteúdo e o Código

Para editar o site, você precisará modificar os arquivos `.jsx` (para componentes React e páginas) e `.js` (para dados e lógica) dentro da pasta `src/`.

### Exemplos de Edição:

*   **Editar Textos na Página Inicial**: Abra `src/pages/Home.jsx`. Você encontrará o texto da seção hero, títulos de categorias, etc. Edite o texto diretamente no código.
*   **Atualizar Produtos**: Abra `src/data/products.js`. Você pode adicionar novos produtos, editar preços, descrições, imagens (certifique-se de que as imagens estejam na pasta `public/images/` e o caminho esteja correto no `products.js`).
*   **Atualizar Serviços**: Abra `src/data/services.js`. Similar aos produtos, você pode editar os detalhes dos serviços oferecidos.
*   **Alterar Navegação ou Layout**: Abra `src/components/Header.jsx` ou `src/components/Footer.jsx` para modificar o cabeçalho e o rodapé. Para a estrutura geral das rotas, edite `src/App.jsx`.
*   **Mudar Estilos**: O site usa **Tailwind CSS**, o que significa que a maioria dos estilos é aplicada diretamente nas classes HTML/JSX. Para estilos mais complexos ou globais, você pode verificar `src/App.css`.

### Ferramentas Necessárias

Para editar o código, você precisará de um **editor de texto** ou um **ambiente de desenvolvimento integrado (IDE)**. No ambiente de sandbox, você pode usar o editor de texto embutido ou ferramentas de linha de comando para editar os arquivos.

## 4. Como Visualizar as Alterações (Executar o Projeto)

Após fazer as edições, você precisará executar o projeto para ver as alterações no navegador. Siga estes passos:

1.  **Navegue até o Diretório do Projeto**: No terminal do sandbox, use o comando:
    ```bash
    cd /home/ubuntu/site-ar-condicionado
    ```

2.  **Instale as Dependências (se ainda não o fez)**: Se for a primeira vez que você executa o projeto ou se as dependências foram removidas, execute:
    ```bash
    npm install
    ```
    *Nota: Se `npm` não estiver disponível, o sistema pode tentar usar `pnpm` ou `yarn`. No ambiente de sandbox, `npm` geralmente funciona após a criação do projeto.* 

3.  **Inicie o Servidor de Desenvolvimento**: Para ver as alterações em tempo real enquanto edita, execute:
    ```bash
    npm run dev
    ```
    Este comando iniciará um servidor local. O terminal informará o endereço (geralmente `http://localhost:3000`). Você pode então usar a ferramenta `browser_navigate` para abrir este endereço e visualizar o site.

4.  **Construa para Produção (Opcional)**: Quando suas edições estiverem prontas para serem publicadas, você pode gerar uma versão otimizada do site para produção com:
    ```bash
    npm run build
    ```
    Isso criará uma pasta `dist/` (ou `build/`) com os arquivos estáticos prontos para serem hospedados em qualquer servidor web.

## 5. Próximos Passos

Agora que você sabe como acessar e editar o site, me diga se você tem alguma edição específica em mente ou se precisa de ajuda para entender alguma parte do código. Estou aqui para ajudar no processo de modificação!

