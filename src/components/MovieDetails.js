import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Container, Card, Row, Col } from "react-bootstrap";

function MovieDetails({ movies }) {
	const { id } = useParams();
	const navigate = useNavigate();

	// Find the movie with the matching ID
	const movie = movies.find((movie) => movie.id === parseInt(id));

	if (!movie) {
		return <div>Movie not found</div>;
	}

	return (
		<Container className="mt-4">
			{/* Back button */}
			<Button
				variant="secondary"
				onClick={() => navigate("/")}
				className="mb-4"
			>
				Back to Home
			</Button>

			{/* Movie details card */}

			<Row>
				<Col md={8}>
					<Card>
						<Card.Body>
							{/* Movie title */}
							<Card.Title className="display-4">{movie.title}</Card.Title>

							{/* Movie description */}
							<Card.Text className="lead">{movie.description}</Card.Text>

							{/* Movie trailer */}
							<div className="mt-4">
								<h3>Trailer</h3>
								<div className="ratio ratio-16x9">
									<iframe
										src={movie.trailerLink}
										title={`${movie.title} Trailer`}
										allowFullScreen
									></iframe>
								</div>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
}

export default MovieDetails;
