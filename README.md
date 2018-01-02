# Introduction 
API GitHub

# Build Status and VSTS
<span>
    <img src="https://willyamalmeida.visualstudio.com/_apis/public/build/definitions/b338f7d5-bec3-4069-a268-6a4e428a914e/8/badge" />
    <a href="https://willyamalmeida.visualstudio.com/Github/_build/index?definitionId=8">
        Build
    </a>
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

# Contribute
**Willyam Almeida**