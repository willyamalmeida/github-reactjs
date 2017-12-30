import React from 'react';
import PropTypes from 'prop-types';
import Api from '../services/api';

class SearchUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleUsernameKeyPress = this.handleUsernameKeyPress.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(e){
        this.setState({username : e.target.value});
    }

    handleUsernameKeyPress(e) {
        if (e.key === 'Enter'){
            this.handleSubmit(e);
        }
    }

    handleSubmit(e) {
        let self = this;
        
        Api.getUser(this.state.username).then(function (response) {
            self.props.updateUser(response.data);
        });

        Api.getRepos(this.state.username).then(function (response) {
            self.props.updateRepositorys(response.data);
        });
    }

    render() {
        return (
            <div className="row" >
                <div className="form-group">
                    <label>User</label>
                    <input
                        type="text"
                        value={this.state.username}
                        className="form-control"
                        placeholder="Search Users"
                        onChange={this.handleUsernameChange}
                        onKeyPress={this.handleUsernameKeyPress} />
                </div>
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Buscar</button>
            </div>
        );
    }
}

SearchUser.propTypes = {
    updateUser: PropTypes.func.isRequired,
    updateRepositorys: PropTypes.func.isRequired
};

export default SearchUser;