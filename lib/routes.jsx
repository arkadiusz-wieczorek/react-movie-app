import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import MoviesList from "./components/list.jsx";
import MovieDetails from "./components/movie-details.jsx";

const Routes = props => (
	<Router basename="/#">
		<Switch>
			<Route
				path="/movies"
				render={() => <MoviesList movies={props.movies} />}
			/>
			<Route path="/:movie_id" component={MovieDetails} />
		</Switch>
	</Router>
);

export default Routes;
