import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import MoviesList from "./components/list.jsx";
import MovieDetailsWrapper from "./components/movie-details-wrapper.jsx";

const Routes = props => (
	<Switch>
		<Route
			path="/movies"
			render={() => (
				<MoviesList
					movies={props.movies}
					is_loading={props.is_loading}
				/>
			)}
		/>
		<Route
			path="/:movie_id"
			render={rest => (
				<MovieDetailsWrapper
					movies={props.movies}
					is_loading={props.is_loading}
					match={rest.match}
				/>
			)}
		/>
	</Switch>
);

export default Routes;
