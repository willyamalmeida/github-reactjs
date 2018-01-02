# Dicas de comandos utilizados
1. Inicializar aplicação criando arquivo package.json
npm init

2. Instalando dependencias utilizado nesse aplicativo
***npm install {pacote}*** 

**react e react-dom**
npm install --save react react-dom

**Criar setup com webpack**
npm install --save-dev webpack

**Instalar o babel para webpack funcionar**
npm install --save-dev babel-core babel-loader babel-preset-react

**Instalar webpack global**
npm install webpack -g

**Configurando um servidor hot reload**
npm install --save-dev webpack-dev-server

**Instalando ec6**
npm install --save-dev babel-preset-es2015

**Instalando axios**
npm install --save axios

**Inserindo blunder.js automatico na index.html**
npm install --save-dev html-webpack-plugin

**Configurando variavel de ambiente**
npm install dotenv --save 

**Instalando application insights**
npm install applicationinsights --save

2. Para executar aplicação
npm start

**Exemplos de execução do webpack**
***Executa webpack para geração do arquivo bundle.js definido no arquivo de configuração webpack.config.js**
webpack

***Para ficar ouvindo alterações para geração automatica***
webpack -w

#Utilização no docker

1. Exemplo de criaçao do arquivo dockerfile
<prev>
    # Usando a ultima versão da image node do repositorio docker
    FROM node:lastet

    # Defina o diretorio para aplicação
    WORKDIR /app

    # Copia os dados currente para o diretorio definido
    ADD . /app

    # Instalando as dependencias
    RUN npm install

    # Definindo variavel de ambiente
    ENV NODE_ENV dev

    # Definindo a porta
    EXPOSE 80

    # Executa aplicação
    CMD ["npm", "start --no-optional"]
</prev>

***Observação***
Utiliza o arquivo .dockerignore para ignorar arquivos/diretorios utilizado no dockerfile

1. Utilizando arquivo dockerfile

**Criando a image com a compilação do dockerfile**
docker build -t img-github-reactjs .

**Para criar um container dessa image**
docker run -p 3000:8080 -d img-github-reactjs

**Com o container em execução bastar acessar o browser**
http://localhost:3000

2. Listar processos em execução, parar e remover o container

**Obtem id container**
docker ps -a

**Parar container**
docker stop {id-container}

**Remover container**
docker rm {id-container}

3. Remove image
docker rmi img-github-reactjs

# Outros comandos executados com docker

1. Lista imagens
docker images

2. Adicionar image
docker pull ubuntu

3. Remover imagens locais
docker rmi ubuntu

4. Criar um container
docker run ubuntu

5. Criar um container e entrar no terminal
docker run -it ubuntu /bin/bash

**O -i significa interatividade e o -t que queremos um link com o Terminal do container.**

6. Criar um container com apelido
docker run --name {apelido} ubuntu

7. Listar container em execução e/ou parado
docker ps
docker ps -a

8. Remover container
docker rm {id-container}

9. Informações de uso de hardware e software
docker stats {id-container}
docker inspect {id-container}

10. Commitar alterações em uma imagem
docker commit ID/{apelido} {nome-da-nova-imagem}

11. Mapeando uma porta para o container
docker run -it -p 8080:80 ubuntu

12. Montar containers auto destrutivos
docker run -it --rm -p 8080:80 ubuntu /bin/bash

13. Executando containers em segundo plano
docker run -d -p 8080:80 ubuntu /bin/bash

14. Removendo todos os containers e imagens de uma só vez
docker rm $(docker ps -qa)
docker rmi $(docker images -q)

15. Como executar comandos, sem precisar estar dentro do container?
docker exec -it ubuntu {comando}

**Exemplo**
docker exec -it ubuntu ifconfig eth0

16. Logs 
docker logs {id-container}

# Comando linux
curl -i localhost:3000
