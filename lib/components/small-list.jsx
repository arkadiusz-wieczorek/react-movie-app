import React, { Component } from "react";

class SmallList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.array.length > 0
					? <ul className={this.props.className}>
							{this.props.array.map((el, i) => (
								<li key={i}>{el.name}</li>
							))}
						</ul>
					: null}
			</div>
		);
	}
}
export default SmallList;
