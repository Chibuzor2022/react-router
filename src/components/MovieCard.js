import React from "react";
import { Card, Col } from "react-bootstrap";

function MovieCard({ movie }) {
	return (
		<Col lg={3} md={6} sm={12} className="mb-4">
			<Card>
				<Card.Img variant="top" src={movie.posterURL} />
				<Card.Body>
					<Card.Title>{movie.title}</Card.Title>
					<Card.Text>{movie.description}</Card.Text>
					<Card.Text>
						<small className="text-muted">Rating: {movie.rating}/10</small>
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default MovieCard;
