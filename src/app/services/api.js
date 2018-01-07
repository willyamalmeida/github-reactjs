import Axios from 'axios';

const api = {
    getUser: user => Axios.get(`https://api.github.com/users/${user}`),
    getRepos: user => Axios.get(`https://api.github.com/users/${user}/repos`)
};

export default api;