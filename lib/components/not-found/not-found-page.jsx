import React from "react";

const NotFoundPage = props => (
	<div className="not-found">
		{props.error_text}
		<div className="image" />
	</div>
);

NotFoundPage.defaultProps = {
	error_text: "Page not found. Something went wrong!",
};
export default NotFoundPage;
