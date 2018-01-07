import React from 'react';
import PropTypes from 'prop-types';
import CardRepository from './cardRepository';

class UserRepository extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let repositorys = this.props.repositories === undefined
            ? null
            : this.props.repositories.map(function (repo, key) {
                return (
                    <div key={key}>
                        <CardRepository repository={repo} />
                    </div>
                );
            });

        return repositorys;
    }
}

UserRepository.propTypes = {
    repositories: PropTypes.array
};

export default UserRepository;