import React from "react";
import { Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MovieCard({ movie }) {
	const navigate = useNavigate();
	return (
		<Col lg={3} md={6} sm={12} className="mb-4">
			<Card
				style={{ width: "18rem", margin: "10px", cursor: "pointer" }}
				onClick={() => navigate(`/movie/${movie.id}`)}
			>
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
