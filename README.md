# Introduction 
Using API GitHub

<span>
    <img src="https://willyamalmeida.visualstudio.com/Github/_apis/build/status/willyamalmeida.github-reactjs?branchName=master" />    
</span>

# Getting Started

**Local**

1. Install dependencies
npm install

2. Install application
npm start


**Docker**
1. Create docker image
docker build -t img-github-reactjs .

2. Execute container
docker run -p 3000:8080 -d img-github-reactjs
***Exemple***
http://localhost:3000

3. Stop and remove container
***Get id container***
docker ps -a
***Stop container***
docker stop {id-container}
***Remove container***
docker rm {id-container}

4. Remove image
docker rmi img-github-reactjs
