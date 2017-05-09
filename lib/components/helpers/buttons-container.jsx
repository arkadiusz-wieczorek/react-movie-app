import React from "react";

const ButtonsContainer = props => (
	<div className="buttons-container">
		<button
			disabled={props.metadata.page == 1 || !props.loaded}
			onClick={props.moveToPage.bind(this, -1)}
		>
			↤
		</button>
		<button onClick={props.sortMoviesByTitle}>
			⇅
		</button>
		<button
			disabled={
				props.metadata.page == props.metadata.total_pages ||
					!props.loaded
			}
			onClick={props.moveToPage.bind(this, 1)}
		>
			↦
		</button>
	</div>
);
export default ButtonsContainer;
