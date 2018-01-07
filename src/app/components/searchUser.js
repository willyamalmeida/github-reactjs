import React, { Fragment } from 'react';
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
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.inputUsername.focus();
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    handleUsernameKeyPress(e) {
        if (e.key === 'Enter') {
            this.handleClick(e);
        }
    }

    handleClick(e) {
        let self = this;

        Api.getUser(this.state.username).then(response => {
            self.props.updateUser(response.data);
        });

        Api.getRepos(this.state.username).then(response => {
            self.props.updateRepository(response.data);
        });

        this.setState({ username: '' });
    }

    render() {
        return (
            <div className="input-group">
                <input
                    type="text"
                    value={this.state.username}
                    ref={(input) => { this.inputUsername = input; }}
                    className="form-control"
                    id="inputGroupAddon"
                    aria-describedby="btnGroupAddon"
                    placeholder="Search users"
                    onChange={this.handleUsernameChange}
                    onKeyPress={this.handleUsernameKeyPress} />

                <div className="input-group-append">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        id="inputGroupAddon"
                        onClick={this.handleClick}>
                        Search
                </button>
                </div>
            </div>
        );
    }
}

SearchUser.propTypes = {
    updateUser: PropTypes.func.isRequired,
    updateRepository: PropTypes.func.isRequired
};

export default SearchUser;