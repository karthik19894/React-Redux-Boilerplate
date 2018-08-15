import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Navbar extends Component {
	onLogoutClick = e => {
		e.preventDefault();
	};

	render() {
		/*
		const { isAuthenticated, user } = this.props.auth;

		const authLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<a className="nav-link" href="" onClick={this.onLogoutClick}>
						Logout
					</a>
				</li>
			</ul>
		);
        */
		const guestLinks = (
			<ul className="navbar-nav ml-auto">
				<li className="nav-item">
					<Link className="nav-link" to="/register">
						Sign Up
					</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/login">
						Login
					</Link>
				</li>
			</ul>
		);

		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
				<div className="container">
					<Link className="navbar-brand" to="/">
						{this.props.brand}
					</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<Link className="nav-link" to="">
									{' '}
									{this.props.leftlink}
								</Link>
							</li>
						</ul>
						{/* {isAuthenticated ? authLinks : guestLinks} */}
					</div>
				</div>
			</nav>
		);
	}
}

Navbar.propTypes = {
	brand: PropTypes.string.isRequired,
	leftlink: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Navbar);
