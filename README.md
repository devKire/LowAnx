# LowAnx
O LowAnx é uma iniciativa dedicada a fornecer apoio e informações valiosas para aqueles que enfrentam desafios relacionados à síndrome do pensamento acelerado, também conhecida como ansiedade. 

## Descrição
O **lowanx** é um projeto web que combina várias tecnologias modernas para criar um site dinâmico e interativo. O site utiliza React, Vite e diversas ferramentas e bibliotecas para fornecer funcionalidades avançadas, como reprodução de áudio, manipulação de documentos e integração com Firebase.

## Tecnologias Usadas
- **Frontend:**
  - [React](https://reactjs.org/)
  - [Bootstrap](https://getbootstrap.com/)
  - [React-Bootstrap](https://react-bootstrap.github.io/)
  - [React-Bootstrap-Icons](https://github.com/ReactBootstrap/react-bootstrap-icons)
  - [React-Router-DOM](https://reactrouter.com/web/guides/quick-start)
  - [React-Three-Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started)
  - [Three.js](https://threejs.org/)
- **Backend:**
  - [Firebase](https://firebase.google.com/)
- **Áudio:**
  - [Howler.js](https://howlerjs.com/)
- **Manipulação de Documentos:**
  - [docx-to-pdf](https://www.npmjs.com/package/docx-to-pdf)
- **Build Tools:**
  - [Vite](https://vitejs.dev/)
  - [Vite Plugin SVGR](https://github.com/arestov/vite-plugin-svgr)

## Estrutura do Código
A estrutura do projeto é organizada da seguinte forma:

src/: Contém o código fonte do projeto.
components/: Componentes React reutilizáveis.
pages/: Páginas do site.
styles/: Arquivos de estilo CSS e SASS.
utils/: Funções utilitárias e hooks personalizados.
public/: Arquivos estáticos, como imagens e fontes.
router/: Configuração de navegação entre os componentes.
services/: Arquivos de configuração do firebase.
contexts/: configurações do firebase

## Dependências

Bootstrap: ^5.3.3
docx-to-pdf: ^1.1.0
dotenv: ^16.4.5
Firebase: ^10.12.2
Howler: ^2.2.4
React: ^18.2.0
React-Bootstrap: ^2.10.2
React-Bootstrap-Icons: ^1.11.4
React-DOM: ^18.2.0
React-Firebase-Hooks: ^5.1.1
React-Router-DOM: ^6.22.3
React-Three-Fiber: ^6.0.13
Three.js: ^0.164.1
Vite Plugin SVGR: ^4.2.0

## Instruções de Instalação e Configuração
Clone o Repositório

git clone <URL_DO_REPOSITÓRIO>
cd lowanx

Instale as Dependências

npm install
Inicie o Servidor de Desenvolvimento

npm run dev
Compile o Projeto para Produção

npm run build
Visualize o Projeto em Produção

npm run preview

## Funcionalidades e Recursos

Interface Moderna: Utiliza Bootstrap e React-Bootstrap para uma interface amigável e responsiva.
Reprodução de Áudio: Integração com Howler para manipulação de áudio.
Manipulação de Documentos: Converte documentos DOCX para PDF.
Integração com Firebase: Para autenticação e armazenamento de dados.
Gráficos e Animações: Utiliza React-Three-Fiber e Three.js para renderização de gráficos 3D.
FAQs
Como adicionar novas funcionalidades?

Crie uma nova branch para suas alterações.
Desenvolva e teste suas mudanças.
Submeta um pull request para revisão.
Como reportar um bug?

Abra uma issue no repositório.
Descreva o problema com detalhes e passos para reproduzir.
Referência de API
Endpoint: /api/example
Método: GET
Parâmetros: param1, param2
Resposta:

{
  "key": "value"
}

## Manual de Estilo
Nomenclatura: Use camelCase para variáveis e funções.
Estrutura de Componentes: Cada componente deve ser colocado em seu próprio arquivo e ter uma função clara e bem definida.

## PRINCIPAIS COMPONENTE

### Componente `HomePage` ###

### Descrição
O componente **HomePage** é a página inicial do aplicativo **LowAnx**. Ele serve como uma introdução ao serviço, oferecendo opções para login e cadastro, além de um botão para acessar a página principal.

### Funcionalidade

1. **Renderização Inicial:**
   - Utiliza o `useEffect` para aplicar a função `splitTextIntoSpans` ao texto com a classe `.bubble-text` quando o componente é montado.

2. **Cabeçalho:**
   - Exibe botões para "Entrar" e "Cadastre-se", com links direcionados para as rotas de login e cadastro.
   - Apresenta um título e uma descrição destacando que o serviço oferecido é gratuito.

3. **Imagem de Início:**
   - Mostra uma imagem clicável que direciona os usuários para a página principal do site. A imagem é estilizada com borda e exibe um formato circular.

4. **Rodapé e Efeitos:**
   - Inclui o componente `Footer` para exibir o rodapé da página.
   - Adiciona o componente `Waves` para criar um efeito visual de ondas no fundo da página.

### Dependências
- **React Router DOM**: Para navegação entre páginas.
- **Footer**: Componente que renderiza o rodapé.
- **Divider**: Adiciona um divisor visual.
- **Waves**: Cria um efeito visual de ondas.
- **splitTextIntoSpans**: Função personalizada para estilizar o texto.

### Estilo
- Utiliza classes do Bootstrap e classes CSS personalizadas (`bubble-text`, `btIndex`, etc.) para estilizar o layout e os elementos.

### Componente `PrincipalPage` ###

### Descrição
O componente **PrincipalPage** serve como a página principal do aplicativo **LowAnx**. Ele fornece uma visão geral interativa com um carrossel de imagens, uma mensagem diária inspiradora e um modal com um vídeo informativo. Inclui também funcionalidades de compartilhamento.

### Funcionalidade

1. **Carrossel de Imagens:**
   - Exibe um carrossel com três slides:
     - **Slide 1:** "Explorar mais Livros" - Link para a página de leituras.
     - **Slide 2:** "Olá Usuário" - Link para continuar leitura.
     - **Slide 3:** "O Ajudante da LowAnx está disponível" - Link para conversar com o chatbot.
   - Controles de navegação para avançar e retroceder entre os slides.

2. **Mensagem Diária:**
   - Exibe uma citação inspiradora sobre a importância de expressar emoções.
   - Inclui um cartão com um SVG de vídeo que, quando clicado, abre um modal.

3. **Modal de Vídeo:**
   - Apresenta um vídeo do YouTube sobre como ajudar uma pessoa com ansiedade.
   - Inclui um botão de compartilhamento que utiliza a API de compartilhamento do navegador (se suportada).

4. **Compartilhamento:**
   - Função `handleShare` que permite aos usuários compartilhar a página atual com uma mensagem predefinida via API de compartilhamento do navegador.

### Dependências
- **React Router DOM**: Para navegação entre páginas.
- **Footer**: Componente que renderiza o rodapé da página.
- **Divider**: Adiciona um divisor visual.
- **Header**: Componente que renderiza o cabeçalho da página.
- **Waves**: Adiciona um efeito visual de ondas no fundo da página.
- **Menu**: Componente que exibe um menu de ícones.
- **splitTextIntoSpans**: Função personalizada para estilizar o texto.

### Estilo
- Utiliza classes do Bootstrap para criar um layout responsivo e interativo.
- Classes CSS personalizadas para estilizar o carrossel e outros componentes visuais.

### Comportamento

- **Compartilhamento:** Se o navegador suporta a API de compartilhamento, um botão permite que o usuário compartilhe o conteúdo da página atual.
- **Modal de Vídeo:** O modal exibe um vídeo informativo e inclui um botão para compartilhar o conteúdo.

### Componente `SignupPage` ###

### Descrição
O componente **SignupPage** é a página de cadastro de novos usuários para o aplicativo **LowAnx**. Permite que os usuários se registrem fornecendo um nome de usuário, e-mail e senha, com validação em tempo real e feedback visual para erros.

### Funcionalidade

1. **Campos de Cadastro:**
   - **Nome de Usuário:** Campo de texto para o nome de usuário.
   - **Email:** Campo de e-mail com validação de formato.
   - **Senha:** Campo de senha com validação de comprimento mínimo.
   - **Confirmação de Senha:** Campo para confirmar a senha, garantindo que a senha e a confirmação correspondam.

2. **Validação de Formulário:**
   - **Email:** Validação baseada em regex para garantir que o e-mail seja válido.
   - **Senha:** Validação para garantir que a senha tenha pelo menos 6 caracteres.
   - **Confirmação de Senha:** Verifica se a confirmação de senha corresponde à senha original.

3. **Função de Cadastro:**
   - **`handleSignOut`**: Função chamada ao clicar no botão de cadastro. Verifica erros e, se não houver, cria o usuário com o e-mail e senha fornecidos.

4. **Redirecionamento:**
   - Após o cadastro bem-sucedido, o usuário é deslogado e redirecionado para a página de login.

5. **Spinner:**
   - Exibe um spinner enquanto o processo de criação de usuário está em andamento.

### Dependências
- **React**: Biblioteca principal para criar o componente.
- **React Firebase Hooks**: Para criar usuários com Firebase.
- **React Router DOM**: Para navegação entre páginas.
- **Firebase**: Para autenticação de usuários.
- **Spinner**: Componente para exibir um indicador de carregamento.

### Estilo
- Utiliza classes do Bootstrap para criar um layout responsivo e estilizar o formulário.
- Classes CSS personalizadas para estilizar os campos de entrada e mensagens de erro.

### Comportamento

- **Botão de Cadastro:** Ao clicar no botão "Cadastrar", a função `handleSignOut` é chamada para processar o cadastro do usuário.
- **Validação Dinâmica:** Feedback visual é fornecido para campos inválidos em tempo real.
- **Modal de Erro:** Mensagens de erro são exibidas se a validação falhar ou se ocorrer um problema durante o cadastro.


### Componente `LoginPage` ###

### Descrição
O componente **LoginPage** é a página de login do aplicativo **LowAnx**. Permite que os usuários se autentiquem fornecendo e-mail e senha.

### Funcionalidade

1. **Campos de Login:**
   - **Email:** Campo de e-mail onde o usuário deve inserir seu endereço de e-mail.
   - **Senha:** Campo de senha onde o usuário deve inserir sua senha.

2. **Função de Login:**
   - **`handleSignIn`**: Função chamada ao clicar no botão de login. Utiliza `signInWithEmailAndPassword` do Firebase para autenticar o usuário com e-mail e senha fornecidos.

3. **Redirecionamento:**
   - Após um login bem-sucedido, o usuário é redirecionado para a página principal (`routes.principal`).

4. **Spinner:**
   - Exibe um spinner enquanto o processo de autenticação está em andamento.

### Dependências
- **React**: Biblioteca principal para criar o componente.
- **React Firebase Hooks**: Para autenticação de usuários com Firebase.
- **React Router DOM**: Para navegação entre páginas.
- **Firebase**: Para autenticação de usuários.
- **Spinner**: Componente para exibir um indicador de carregamento.

### Estilo
- Utiliza classes do Bootstrap para criar um layout responsivo e estilizar o formulário.
- Classes CSS personalizadas para estilizar o formulário de login e o botão de entrada.

### Comportamento

- **Botão de Login:** Ao clicar no botão "Entrar", a função `handleSignIn` é chamada para processar o login do usuário.
- **Campos de Entrada:** Atualiza os estados de `email` e `password` em tempo real com base na entrada do usuário.
- **Checkbox:** Permite ao usuário optar por lembrar seu login.

