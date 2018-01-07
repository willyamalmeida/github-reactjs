import React from 'react';
import PropTypes from 'prop-types';
import CardUser from './cardUser';
import UserRepository from './userRepository';

class UserInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let userInfo = this.props.user === null
            ? null
            : (
                <div className="row">
                    <div className="col-lg-3">
                        <CardUser user={this.props.user} />
                    </div>
                    <div className="col">
                        <UserRepository repositories={this.props.repositories} />
                    </div>
                </div>
            );

        return userInfo;
    }
}

UserInfo.propsType = {
    user: PropTypes.object,
    repositories: PropTypes.array
};

export default UserInfo;