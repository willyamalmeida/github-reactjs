# Introduction 
API do GitHub.

# Build and Test
1.Integrado com VSTS
[<img src="https://willyamalmeida.visualstudio.com/_apis/public/build/definitions/b338f7d5-bec3-4069-a268-6a4e428a914e/4/badge" />]
(https://willyamalmeida.visualstudio.com/Github/_build/index?definitionId=4)


# Getting Started
1.0: inicializar aplicação e criar package json
npm init

2.0: instalar react e react-dom
npm install --save react react-dom

3.0: criar setup com webpack
npm install --save-dev webpack

4.0: instalar o babel para webpack funcionar
npm install --save-dev babel-core babel-loader babel-preset-react

5.0: instalar webpack global
npm install webpack -g

6.0: configurando um servidor hot reload
npm install --save-dev webpack-dev-server

6.1 para rodar o servidor
npm start

7.0 instalando ec6
npm install --save-dev babel-preset-es2015

8.0: executa webpack para geração do arquivo bundle.js definido no arquivo de configuração webpack.config.js
webpack

8.1: para ficar ouvindo alterações para geração automatica
webpack -w

9.0: instalando axios
npm install --save axios

10.0: inserindo blunder.js automatico na index.html
npm install --save-dev html-webpack-plugin

# Contribute