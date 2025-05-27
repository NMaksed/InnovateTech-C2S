# InnovaTech

InnovaTech é um aplicativo desenvolvido com React Native e Expo, focado na educação e tecnologia. As cores escolhidas para o aplicativo foram baseadas no artigo [Color Psychology for Education](https://www.artcobell.com/en-us/blog/color-psychology-for-education-blue), que explora a psicologia das cores no contexto educacional.

## 🚀 Como Rodar o Aplicativo

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://expo.dev/tools#cli)
- Um dispositivo Android ou iOS para testar o aplicativo (ou um emulador)

### Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/NMaksed/InnovateTech-C2S.git
   ```
2. Navegue até a pasta do projeto:
   ```
   cd InnovateTech-C2S/InnovaTech
   ```
3. Instale as dependências:
   ```
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```
5. Abra o aplicativo no seu dispositivo ou emulador.

## Recomendação

Os testes foram feitos pelo aplicativo "Expo Go" basta intalar, conectar os aparelhos no mesmo WIFI e ler o QRCode disponibilizado no terminal.

## 📁 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `src/`: Contém o código fonte do aplicativo.
 - `components/`: Componentes reutilizáveis do aplicativo.
 - `screens/`: Telas do aplicativo.
 - `services/`: Serviços e funções de backend.
 - `styles/`: Estilos globais e específicos da plataforma.
- `assets/`: Contém imagens, ícones e outros recursos estáticos.
- `app.json`: Configuração do aplicativo Expo.

## 🛠️ Como o Aplicativo Foi Montado

O aplicativo InnovaTech foi desenvolvido utilizando React Native, Expo e a API RandomUser. A estrutura do projeto foi organizada de forma modular, com componentes reutilizáveis e telas bem definidas, facilitando a manutenção e a escalabilidade do aplicativo.

## 🎯 Features

- Filtragem de alunos por gênero na tela de listagem.
- Uso de `useContext` para armazenar o nome da empresa, evitando repetição de código.
- Manipulação de dados em cache com `AsyncStorage`.

## ⚠️ Importante

O aplicativo foi totalmente testado e comprovado funcionando em ambiente Android (SAMSUNG S20 FE).
