#1: inicializar aplicação e criar package json
npm init

#2: instalar react e react-dom
npm install --save react react-dom

#3: criar setup com webpack
npm install --save-dev webpack

#4: instalar o babel para webpack funcionar
npm install --save-dev babel-core babel-loader babel-preset-react

#5: instalar webpack global
npm install webpack -g

#6: executa webpack para geração do arquivo bundle.js definido no arquivo de configuração webpack.config.js
webpack

#7: para ficar ouvindo alterações para geração automatica
webpack -w

