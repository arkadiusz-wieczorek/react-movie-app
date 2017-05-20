import axios from "axios";
require("es6-promise").polyfill();
const API_KEY = "a6aeced0b0252697a978ef498599c58d";
const API_KEY_OMDB = "d7a23aad"; // NOTICE: because OMDb API move to private access from 10-05-2017 and the old api key and old endpoints stopped working since the beginning of 18-05-2017, new api key doesn't work without pledge from patreon

const HttpWrapper = {
	getMovies: (query, page) => {
		let params = {
			api_key: API_KEY,
			query: query,
			// sort_by: "original_title.desc"
			// The API doesn't have the implemented `sort_by` for `/search` endpoint,
		};
		if (page !== undefined) params.page = page;

		return axios.get("https://api.themoviedb.org/3/search/movie?", {
			params: params,
		});
	},
	getMovieDetails: id => {
		return axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
			params: {
				api_key: API_KEY,
			},
		});
	},
	getLinkToIMDB: (title, date) => {
		let params = {
			apikey: API_KEY_OMDB,
			t: title,
			plot: "short",
			r: "json",
		};
		if (date !== undefined) params.y = date.substring(0, 4);

		return axios.get(`http://www.omdbapi.com/`, {
			params: params,
		});
	},
};

export default HttpWrapper;
