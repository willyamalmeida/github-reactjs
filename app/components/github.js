import React from 'react';
import ReactDOM from 'react-dom';
import SearchUser from './searchUser';
import UserInfo from './userInfo';

class GitHub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            repositorysUser: []
        };

        this.updateUser = this.updateUser.bind(this);
        this.updateRepositorys = this.updateRepositorys.bind(this);
    }

    updateUser(user) {
        this.setState({ user: user });
    }

    updateRepositorys(repositorysUser) {
        this.setState({repositorysUser: repositorysUser});
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <div className="row" >
                        <h1>GitHub</h1>
                    </div>

                    <SearchUser updateUser={this.updateUser} updateRepositorys={this.updateRepositorys} />
                    <UserInfo user={this.state.user} repositorysUser={this.state.repositorysUser} />
                </div>
            </div>
        );
    }
}

export default GitHub;