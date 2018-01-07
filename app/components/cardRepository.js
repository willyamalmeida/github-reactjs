import React from 'react';
import PropTypes from 'prop-types';

class CardRepository extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card border-secondary mt-3">
                <div className="card-body">
                    <h6 className="card-subtitle">
                        <a className="card-link"
                            href={this.props.repository.html_url}
                            target="_blank">
                            {this.props.repository.name}
                        </a>
                    </h6>
                    <p className="card-text mt-3">
                        {this.props.repository.description}
                    </p>
                    <hr />
                    <div className="row align-items-center mt-3">
                        <div className="col-8">
                            <span className="badge badge-pill badge-info">{this.props.repository.language}</span>
                        </div>
                        <div className="col">
                            Stars <span className="badge badge-pill badge-secondary">{this.props.repository.stargazers_count}</span>

                        </div>
                        <div className="col">
                            <a className="card-link"
                                href={this.props.repository.html_url + '/issues'}
                                target="_blank">
                                Issues <span className="badge badge-pill badge-secondary">{this.props.repository.open_issues}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CardRepository.propTypes = {
    repository: PropTypes.object.isRequired
};

export default CardRepository;