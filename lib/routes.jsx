import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import MoviesList from "./components/movie-list.jsx";
import MovieDetailsWrapper from "./components/movie-details-wrapper.jsx";
import MovieDetailsPure from "./components/movie-details-pure.jsx";
import NotFoundPage from "./components/not-found-page.jsx";

const MovieDetails = MovieDetailsWrapper(MovieDetailsPure); //HigherOrder Component

const Routes = props => (
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
		<Route path="/not-found" component={NotFoundPage} />
		<Route
			path="/:movie_id"
			render={rest => (
				<MovieDetails movies={props.movies} match={rest.match} />
			)}
		/>
	</Switch>
);

export default Routes;
