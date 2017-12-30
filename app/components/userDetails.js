import React from 'react';
import PropTypes from 'prop-types';

class UserDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img className="img-circle"
                    src={this.props.user.avatar_url}
                    alt="avatar"
                    width="140"
                    height="140" />
                <h2>
                    {this.props.user.login}
                </h2>
                <p>
                    {this.props.user.name}
                </p>
                <p>
                    Followers: {this.props.user.followers} / Following: {this.props.user.following}
                </p>
                <p>
                    <a className="btn btn-default"
                        href={this.props.user.html_url}
                        role="button">
                        View details
                    </a>
                </p>
            </div >
        );
    }
}

UserDetails.propsTypes = {
    user: PropTypes.object.isRequired
};

export default UserDetails;