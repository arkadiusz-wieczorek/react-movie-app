import React from "react";

const Header = props => (
	<header className="navigation">
		<a href="#/"><div className="logo" /></a>
		<div className="search-container">
			<input
				autoFocus
				value={props.query}
				onChange={props.onChange}
				onKeyUp={props.onKeyUp}
				type="text"
				placeholder="The Clone Wars: Episode 2"
			/>
		</div>
	</header>
);

export default Header;
