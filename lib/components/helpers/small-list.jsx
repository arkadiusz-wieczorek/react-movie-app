import React from "react";

const SmallList = props =>
	props.array.length > 0
		? <div>
				<span>{props.spanText}</span>
				<ul className={props.className}>
					{props.array.map((el, i) => <li key={i}>{el.name}</li>)}
				</ul>
			</div>
		: null;

export default SmallList;
