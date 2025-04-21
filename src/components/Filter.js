import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";

function Filter({ onFilterChange }) {
	//  state for filter inputs
	const [title, setTitle] = useState("");
	const [rating, setRating] = useState(0);

	// Handling title filter change
	const handleTitleChange = (e) => {
		const newTitle = e.target.value;
		setTitle(newTitle);
		onFilterChange({ title: newTitle, rating });
	};

	// Handling rating filter change
	const handleRatingChange = (e) => {
		const newRating = Number(e.target.value);
		setRating(newRating);
		onFilterChange({ title, rating: newRating });
	};

	return (
		<Form className="mb-4">
			<Row>
				<Col md={6}>
					<Form.Group controlId="titleFilter">
						<Form.Label>Filter by Title</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter movie title"
							value={title}
							onChange={handleTitleChange}
						/>
					</Form.Group>
				</Col>
				<Col md={6}>
					<Form.Group controlId="ratingFilter">
						<Form.Label>Filter by Minimum Rating</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter movie title"
							value={rating}
							onChange={handleRatingChange}
						/>
					</Form.Group>
				</Col>
			</Row>
		</Form>
	);
}

export default Filter;
