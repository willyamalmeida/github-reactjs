import React from 'react';
import ReactDOM from 'react-dom';
import SearchUser from './searchUser';
import UserInfo from './userInfo';
import styles from './github.css';

class GitHub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            repositories: []
        };

        this.updateUser = this.updateUser.bind(this);
        this.updateRepository = this.updateRepository.bind(this);
    }

    updateUser(user) {
        this.setState({ user: user });
    }

    updateRepository(repositories) {
        this.setState({ repositories: repositories });
    }

    render() {
        return (

            <React.Fragment>
                <header>
                    <div className="row bg-dark text-light">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <h2>GitHub</h2>
                                </div>
                                <div className="col-5">
                                    <SearchUser updateUser={this.updateUser} updateRepository={this.updateRepository} />
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="container mt-3">
                    <UserInfo user={this.state.user} repositories={this.state.repositories} />
                </main>
                <footer className="footer mt-3">
                    <div className="container">
                        <span className="text-muted">Github with ReactJs</span>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}

export default GitHub;