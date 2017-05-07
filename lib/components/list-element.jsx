import React, { Component } from "react";
import { Link } from "react-router-dom";

const MoviesListElement = props => (
	<li>
		<Link to={`/${props.movie.id}`}>
			<img
				src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${props.movie.poster_path}`}
			/>
			{props.movie.title}
			{props.movie.release_date}
			{props.movie.popularity}
			{props.movie.vote_count}
			{props.movie.vote_average}
		</Link>
	</li>
);

export default MoviesListElement;
