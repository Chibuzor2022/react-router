import React from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
	return (
		// mapping through the movie array
		<Row className="mt-4">
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</Row>
	);
}

export default MovieList;
