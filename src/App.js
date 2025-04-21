import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import "bootstrap/dist/css/bootstrap.min.css";

// Initial set of movies
const initialMovies = [
	{
		id: 1,
		title: "Movie",
		description:
			"A movie about the rise and fall of katama republic in the year 1900.",
		posterURL:
			"https://img.freepik.com/free-psd/movie-text-style-effect_136295-361.jpg?ga=GA1.1.360799756.1744154985&semt=ais_hybrid&w=740",
		rating: 8,
	},
	{
		id: 2,
		title: "The Jungle",
		description:
			"How to survice in the jungle for 3 days with food, clothing and money.",
		posterURL:
			"https://img.freepik.com/free-psd/video-game-adventure-movie-title-3d-text-effect_1389-1648.jpg?ga=GA1.1.360799756.1744154985&semt=ais_hybrid&w=740",
		rating: 7,
	},
	{
		id: 3,
		title: "Shattered",
		description:
			"How to overcome adversity in life and career, and scale new hights.",
		posterURL:
			"https://img.freepik.com/free-psd/shattered-wall-texture-editable-text-effect_47987-21263.jpg?ga=GA1.1.360799756.1744154985&semt=ais_hybrid&w=740",
		rating: 9,
	},
	{
		id: 4,
		title: "The End",
		description:
			"The story of a man who endured till the end to see his come true in spite of numerous challenges",
		posterURL:
			"https://img.freepik.com/free-vector/flat-design-end-screen-background_23-2150998486.jpg?ga=GA1.1.360799756.1744154985&semt=ais_hybrid&w=740",
		rating: 9,
	},
];

function App() {
	// State for movies list
	const [movies, setMovies] = useState(initialMovies);
	// State for filter values
	const [filter, setFilter] = useState({ title: "", rating: 0 });

	// Function to add a new movie
	const addMovie = (newMovie) => {
		setMovies([...movies, newMovie]);
	};

	// Function to handle filter changes
	const handleFilterChange = (newFilter) => {
		setFilter(newFilter);
	};

	// Filtering movies based on title and rating
	const filteredMovies = movies.filter((movie) => {
		return (
			movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
			movie.rating >= filter.rating
		);
	});

	return (
		<Container className="mt-5">
			<h1 className="text-center mb-5">The Movie App</h1>

			{/* Filter component */}
			<Filter onFilterChange={handleFilterChange} />

			{/* Add Movie component */}
			<AddMovie onAddMovie={addMovie} />

			{/* Movie List component */}
			<MovieList movies={filteredMovies} />
		</Container>
	);
}

export default App;
