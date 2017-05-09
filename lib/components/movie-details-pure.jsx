import React, { Component } from "react";
import SmallList from "./small-list.jsx";

class MovieDetailsPure extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="movie">
				{this.props.poster_path != null
					? <div
							className="poster"
							style={{
								backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.poster_path})`,
							}}
						/>
					: <div className="poster" />}
				<div className="details">
					<h1 className="title">
						{this.props.title}
						<span className="release-date">{` ${this.props.release_date.substring(0, 4)}`}</span>
					</h1>
					<div className="overview">{this.props.overview}</div>

					{this.props.loaded
						? <div>
								<SmallList
									className="genres"
									array={this.props.genres}
								/>
								{this.props.imdb_id !== null
									? <a
											className="imdb-link"
											target="_blank"
											href={`http://www.imdb.com/title/${this.props.imdb_id}/`}
										>
											Check on IMDB.com
										</a>
									: <a
											className="imdb-link"
											target="_blank"
											href={`http://www.imdb.com/find?${this.props.title.replace(/ /g, "+")}`}
										>
											Search on IMDB.com
										</a>}
								<div className="production">
									<SmallList
										spanText="Production companies: "
										className="production_companies"
										array={this.props.production_companies}
									/>
									<SmallList
										spanText="Production countries: "
										className="production_countries"
										array={this.props.production_countries}
									/>
								</div>
							</div>
						: <div className="loading-circle" />}
				</div>
				<div className="values-container">
					<div className="value-element">
						<div className="value">{this.props.vote_count}</div>
						<div className="label">votes</div>
					</div>
					<div className="value-element">
						<div className="value">{this.props.vote_average}</div>
						<div className="label">score</div>
					</div>
					<div className="value-element">
						<div className="value">
							{this.props.popularity != 0
								? this.props.popularity.toFixed(2)
								: null}
						</div>
						<div className="label">popularity</div>
					</div>
				</div>
			</div>
		);
	}
}
export default MovieDetailsPure;
