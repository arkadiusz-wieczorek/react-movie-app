import React from "react";
import SmallList from "../helpers/small-list.jsx";

const MovieDetailsView = props => (
	<div className="movie">
		{props.poster_path != null
			? <div
					className="poster"
					style={{
						backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path})`,
					}}
				/>
			: <div className="poster" />}
		<div className="details">
			<h1 className="title">
				{props.title}
				<span className="release-date">{` ${props.release_date.substring(0, 4)}`}</span>
			</h1>
			<div className="overview">{props.overview}</div>

			{props.loaded
				? <div>
						<SmallList className="genres" array={props.genres} />
						{props.imdb_id !== "" && props.imdb_id !== null
							? <a
									className="imdb-link"
									target="_blank"
									href={`http://www.imdb.com/title/${props.imdb_id}/`}
								>
									Check on IMDB.com
								</a>
							: <a
									className="imdb-link"
									target="_blank"
									href={`http://www.imdb.com/find?${props.title.replace(/ /g, "+")}`}
								>
									Search on IMDB.com
								</a>}
						<div className="production">
							<SmallList
								spanText="Production companies: "
								className="production_companies"
								array={props.production_companies}
							/>
							<SmallList
								spanText="Production countries: "
								className="production_countries"
								array={props.production_countries}
							/>
						</div>
					</div>
				: <div className="loading-circle" />}
		</div>
		<div className="values-container">
			<div className="value-element">
				<div className="value">{props.vote_count}</div>
				<div className="label">votes</div>
			</div>
			<div className="value-element">
				<div className="value">
					{props.vote_average * 10}%
				</div>
				<div className="label">score</div>
			</div>
			<div className="value-element">
				<div className="value">
					{props.popularity != 0 ? props.popularity.toFixed(2) : null}
				</div>
				<div className="label">popularity</div>
			</div>
		</div>
	</div>
);

export default MovieDetailsView;
