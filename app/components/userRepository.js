import React from 'react';
import PropTypes from 'prop-types';

class UserRepository extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let repositorys = this.props.repositorysUser === undefined
            ? null   
            : this.props.repositorysUser.map(function (repo, key) {
            return (
                <div key={key} className="thumbnail">
                    <div className="caption">
                        <h3>
                            {repo.name}
                            <span className="badge">{repo.stargazers_count} STARS</span>
                        </h3>
                        <p>{repo.description}</p>
                        <p>
                            <a href={repo.html_url} className="btn btn-primary" role="button">Repository</a>
                            <a href={repo.html_url + '/issues'} className="btn btn-default" role="button">Issues ({repo.open_issues}) </a>
                        </p>
                    </div>
                </div>
            );
        });

        return repositorys;
    }
}

UserRepository.propTypes = {
    repositorysUser: PropTypes.array
};

export default UserRepository;