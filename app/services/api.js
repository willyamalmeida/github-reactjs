import Axios from 'axios';

const api = {
    getUser: function(user) {
        return Axios.get('https://api.github.com/users/' + user);
    },

    getRepos: function(user) {
        return Axios.get('https://api.github.com/users/' + user + '/repos');
    }
};

export default api;