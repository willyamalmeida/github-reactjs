import Axios from 'axios';

var api = {
    getUser: function(user) {
        throw new Error('Falha na busca por username.');
        return Axios.get('https://api.github.com/users/' + user);
    },

    getRepos: function(user) {
        return Axios.get('https://api.github.com/users/' + user + '/repos');
    }
};

export default api;