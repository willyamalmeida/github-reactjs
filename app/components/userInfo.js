import React from 'react';
import PropTypes from 'prop-types';
import UserDetails from './userDetails';
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
                    <div className="col-lg-4">
                        <UserDetails user={this.props.user} />
                    </div>
                    <div className="col-lg-8">
                        <UserRepository repositorysUser={this.props.repositorysUser} />
                    </div>
                </div>
            );

        return userInfo;
    }
}

UserInfo.propsType = {
    user: PropTypes.object,
    repositorysUser: PropTypes.array
};

export default UserInfo;