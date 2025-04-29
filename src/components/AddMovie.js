import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function AddMovie({ onAddMovie }) {
	// State for to show modal
	const [show, setShow] = useState(false);
	// State for new movie form
	const [newMovie, setNewMovie] = useState({
		title: "",
		description: "",
		posterURL: "",
		rating: 0,
	});

	// Handling of form input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setNewMovie({
			...newMovie,
			[name]: name === "rating" ? Number(value) : value,
		});
	};

	// Handling of form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		onAddMovie(newMovie);
		// Reset the form and close the modal
		setNewMovie({
			title: "",
			description: "",
			posterURL: "",
			rating: 0,
		});
		setShow(false);
	};

	return (
		<>
			{/* button to add a new movie */}
			<Button variant="success" onClick={() => setShow(true)} className="mb-5">
				Add A New Movie
			</Button>

			<Modal show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Add New Movie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group controlId="formTitle" className="mb-3">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								name="title"
								value={newMovie.title}
								onChange={handleInputChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formDescription" className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name="description"
								value={newMovie.description}
								onChange={handleInputChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formPosterURL" className="mb-3">
							<Form.Label>Poster URL</Form.Label>
							<Form.Control
								type="url"
								name="posterURL"
								value={newMovie.posterURL}
								onChange={handleInputChange}
								required
							/>
						</Form.Group>

						<Form.Group controlId="formRating" className="mb-3">
							<Form.Label>Rating (0-10)</Form.Label>
							<Form.Control
								type="number"
								name="rating"
								min="0"
								max="10"
								value={newMovie.rating}
								onChange={handleInputChange}
								required
							/>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Trailer Embed URL</Form.Label>
							<Form.Control
								type="url"
								name="trailerLink"
								placeholder="https://www.youtube.com/embed/..."
								value={newMovie.trailerLink}
								onChange={handleInputChange}
								required
							/>
							<Form.Text className="text-muted">
								Use the embed URL from YouTube
							</Form.Text>
						</Form.Group>

						<Button variant="success" type="submit">
							Add Movie
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
}

export default AddMovie;
