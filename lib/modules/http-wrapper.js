import axios from "axios";
require("es6-promise").polyfill();
const API_KEY = "a6aeced0b0252697a978ef498599c58d";

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
};

export default HttpWrapper;
