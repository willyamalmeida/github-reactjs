import React from 'react';
import PropTypes from 'prop-types';

class CardUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <img className="card-img-top"
                    src={this.props.user.avatar_url}
                    alt="avatar"
                    height="230" />
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.user.name}
                    </h5>
                    <h6 className="card-subtitle">
                        <a className="card-link"
                            href={this.props.user.html_url}
                            target="_blank">
                            {this.props.user.login}
                        </a>
                    </h6>
                    <hr />
                    <p className="card-text mt-3">
                        Repositories: <span className="badge badge-pill badge-secondary">{this.props.user.public_repos}</span><br />
                        Followers: <span className="badge badge-pill badge-secondary">{this.props.user.followers}</span><br />
                        Following: <span className="badge badge-pill badge-secondary">{this.props.user.following}</span>
                    </p>
                </div>
            </div>
        );
    }
}

CardUser.propsTypes = {
    user: PropTypes.object.isRequired
};

export default CardUser;