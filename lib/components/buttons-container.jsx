import React from "react";

class ButtonsContainer extends React.Component {
	render() {
		return (
			<div className="buttons-container">
				<button
					disabled={
						this.props.metadata.page == 1 || !this.props.loaded
					}
					onClick={this.props.moveToPage.bind(this, -1)}
				>
					↤
				</button>
				<button
					disabled={this.props.sorted}
					onClick={this.props.sortMoviesByTitle}
				>
					⇅
				</button>

				<button
					disabled={
						this.props.metadata.page ==
							this.props.metadata.total_pages ||
							!this.props.loaded
					}
					onClick={this.props.moveToPage.bind(this, 1)}
				>
					↦
				</button>
			</div>
		);
	}
}
export default ButtonsContainer;
