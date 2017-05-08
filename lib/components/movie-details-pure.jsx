import React, { Component } from "react";
import SmallList from "./small-list.jsx";

class MovieDetailsPure extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="movie">
				<div
					className="poster"
					style={{
						backgroundImage: `url('https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.poster_path}')`,
					}}
				/>
				<div className="details">
					<h1 className="title">
						{this.props.title}
						<span className="release-date">{` (${this.props.release_date.substring(0, 4)})`}</span>
					</h1>
					<div className="overview">{this.props.overview}</div>
					<SmallList className="genres" array={this.props.genres} />

					<a
						className="imdb-link"
						href={`http://www.imdb.com/title/${this.props.imdb_id}/`}
					>
						Check on IMDB.com
					</a>
					<div className="production">
						<div>
							<span>Production companies: </span>
							<SmallList
								className="production_companies"
								array={this.props.production_companies}
							/>
						</div>
						<div>
							<span>Production countries: </span>

							<SmallList
								className="production_countries"
								array={this.props.production_countries}
							/>
						</div>
					</div>
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
						<div className="value">{this.props.popularity}</div>
						<div className="label">popularity</div>
					</div>
				</div>
			</div>
		);
	}
}
export default MovieDetailsPure;
