# Jogo da Memória 🎮🧠

Este é um **Jogo da Memória** desenvolvido com React e styled-components. O objetivo do jogo é encontrar os pares de cartas iguais. Se o jogador selecionar dois cards diferentes, um modal de erro é exibido, e a partida pode ser reiniciada.

## 🚀 Tecnologias Utilizadas

- **React** – Biblioteca para criação de interfaces interativas.
- **Styled-components** – Estilização com CSS-in-JS.
- **JavaScript (ES6+)**
- **Vite** – Ferramenta de build rápida para desenvolvimento.

## 🎯 Funcionalidades

- 🔄 **Seleção de Pares**: O jogador pode clicar em dois cards para verificar se são iguais.
- ❌ **Erro ao Selecionar Diferente**: Exibição de um modal se os cards forem diferentes.
- 🔁 **Reinício do Jogo**: Modal oferece botão para reiniciar a partida.
- 🎨 **Interface responsiva** e estilizada com styled-components.
- 🧠 **Lógica de memória simples**: pares são verificados com base no caminho da imagem.

## 📦 Estrutura do Projeto

- `App.jsx`: Componente principal que gerencia os cards, o estado da seleção, e a lógica de verificação.
- `Card.jsx`: Componente individual que representa cada carta do jogo.
- `styled-components`: Utilizado para estilização dos componentes de forma modular.

## 🖼️ Imagens

> As imagens dos cards estão localizadas na pasta `/assets`.

- `/assets/icon-1.png`
- `/assets/icon-2.png`
- ...
- `/assets/icon-9.png`

Cada imagem aparece duas vezes para formar os pares no jogo.

## ⚙️ Como Rodar o Projeto Localmente

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Acesse no navegador:

   ```
   http://localhost:5173
   ```

## 📸 Preview

Link do projeto em produção:

https://memory-game-news.vercel.app/

