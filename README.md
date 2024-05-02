# InnovaTech

As cores foram escolhidas beaseadas nesse artigo: https://www.artcobell.com/en-us/blog/color-psychology-for-education-blue
---

## Como Rodar o Aplicativo

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://expo.dev/tools#cli)
- Um dispositivo Android ou iOS para testar o aplicativo (ou um emulador)

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/NMaksed/C2S.git
   ```
2. Navegue até a pasta do projeto:
   ```
   cd C2S/InnovaTech
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```
   expo start
   ```
5. Abra o aplicativo no seu dispositivo ou emulador.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `src/`: Contém o código fonte do aplicativo.
 - `components/`: Componentes reutilizáveis do aplicativo.
 - `screens/`: Telas do aplicativo.
 - `services/`: Serviços e funções de backend.
 - `styles/`: Estilos globais e específicos da plataforma.
- `assets/`: Contém imagens, ícones e outros recursos estáticos.
- `app.json`: Configuração do aplicativo Expo.

## Como o Aplicativo Foi Montado

O aplicativo InnovaTech foi desenvolvido utilizando React Native, Expo e a Api RandomUser.

A estrutura do projeto foi organizada de forma modular, com componentes reutilizáveis e telas bem definidas, facilitando a manutenção e a escalabilidade do aplicativo.

## Features

Na tela que lista os alunos, é possível filtrar por gênero no campo de busca, preenchendo com "male" ou "female" e pressionando o icone de filtro.  

Foi usado useContext para salvar nome da empresa, para a longo prazo evitar repetição de código.

Foi usado AsyncStorage para monipulação de dados em cache.

## Importante!!

O aplicativo foi totalmente testado e comprovado funcionamente em ambiente Android (SAMSUNG S20 FE).# C2S-InnovateTech
# InnovateTech-C2S
