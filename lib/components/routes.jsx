import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MoviesList from "./list/movie-list.jsx";
import MovieDetailsWrapper from "./details/movie-details-wrapper.jsx";
import MovieDetailsView from "./details/movie-details-view.jsx";
import NotFoundPage from "./not-found/not-found-page.jsx";

const MovieDetails = MovieDetailsWrapper(MovieDetailsView); //HigherOrder Component

const Routes = props => (
	<div className="content">
		<Switch>
			<Route
				path="/movies"
				render={() => (
					<MoviesList
						movies={props.movies}
						loaded={props.loaded}
						sorted={props.sorted}
						metadata={props.metadata}
						sortMoviesByTitle={props.sortMoviesByTitle}
						moveToPage={props.moveToPage}
					/>
				)}
			/>
			<Route
				path="/not-found"
				render={() => <NotFoundPage error_text={props.error_text} />}
			/>
			<Route
				path="/:movie_id"
				render={rest => (
					<MovieDetails movies={props.movies} match={rest.match} />
				)}
			/>
		</Switch>
	</div>
);

export default Routes;
