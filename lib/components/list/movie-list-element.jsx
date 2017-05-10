import React, { Component } from "react";
import { Link } from "react-router-dom";

const MoviesListElement = props => (
	<Link to={`/${props.movie.id}`}>
		<li>
			<div
				className="poster"
				style={{
					backgroundImage: `url( ${props.movie.poster_path != null ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}` : "./css/assets/no-poster.svg"})`,
				}}
			/>
			<div className="movie-name">
				<span className="title">{props.movie.title}</span>
				<div className="release_date">
					{props.movie.release_date}
				</div>
			</div>
			<div className="movie-details">
				<div className="value-container">
					<div className="value">
						{props.movie.popularity.toFixed(2)}
					</div>
					<div className="label">popularity</div>
				</div>
				<div className="value-container">
					<div className="value">{props.movie.vote_count}</div>
					<div className="label">votes</div>
				</div>
				<div className="value-container">
					<div className="value">
						{props.movie.vote_average * 10}%
					</div>
					<div className="label">score</div>
				</div>
			</div>
		</li>
	</Link>
);

export default MoviesListElement;
