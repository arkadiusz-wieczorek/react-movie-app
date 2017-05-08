import React, { Component } from "react";

class SmallList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return this.props.array.length > 0
			? <div>
					<span>{this.props.spanText}</span>
					<ul className={this.props.className}>
						{this.props.array.map((el, i) => (
							<li key={i}>{el.name}</li>
						))}
					</ul>
				</div>
			: null;
	}
}
export default SmallList;
