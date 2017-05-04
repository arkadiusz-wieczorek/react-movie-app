import axios from "axios";
import ee from "./event-emitter.js";

const API_KEY = "a6aeced0b0252697a978ef498599c58d";

const HttpWrapper = {
	getMovies: (query, page) => {
		let params = {
			api_key: API_KEY,
			query: query,
			// sort_by: "original_title.desc",
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
