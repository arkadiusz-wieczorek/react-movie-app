import React from "react";

class NotFoundPage extends React.Component {
	render() {
		return (
			<div className="not-found">
				{this.props.error_text}
				<div className="image" />
			</div>
		);
	}
}

NotFoundPage.defaultProps = {
	error_text: "Page not found. Something went wrong!",
};

export default NotFoundPage;
