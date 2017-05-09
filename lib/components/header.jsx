import React from "react";

class Header extends React.Component {
	render() {
		return (
			<header className="navigation">
				<a href="#/"><div className="logo" /></a>
				<div className="search-container">
					<input
						autoFocus
						value={this.props.query}
						onChange={this.props.onChange}
						onKeyUp={this.props.onKeyUp}
						type="text"
						placeholder="The Clone Wars: Episode 2"
					/>
				</div>
			</header>
		);
	}
}

export default Header;
