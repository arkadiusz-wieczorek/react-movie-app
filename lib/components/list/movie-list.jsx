import React, { Component } from "react";
import MoviesListElement from "./movie-list-element.jsx";
import ButtonsContainer from "../helpers/buttons-container.jsx";
import NotFoundPage from "../not-found/not-found-page.jsx";

const MoviesList = props => (
	<div style={{ width: "100%" }}>
		{props.movies.length > 0
			? <ButtonsContainer
					moveToPage={props.moveToPage}
					sortMoviesByTitle={props.sortMoviesByTitle}
					metadata={props.metadata}
					order={props.order}
					loaded={props.loaded}
				/>
			: null}
		{!props.loaded
			? <div className="loading-circle" />
			: props.metadata.total_results !== 0
					? <ul className="list">
							{props.movies.map(movie => (
								<MoviesListElement movie={movie} key={movie.id} />
							))}
						</ul>
					: <NotFoundPage error_text="No results. Try with another query." />}
		{props.movies.length > 0
			? <ButtonsContainer
					moveToPage={props.moveToPage}
					sortMoviesByTitle={props.sortMoviesByTitle}
					metadata={props.metadata}
					order={props.order}
					loaded={props.loaded}
				/>
			: null}
	</div>
);

export default MoviesList;
