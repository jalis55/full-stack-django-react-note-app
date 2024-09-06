import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import "../styles/Home.css";
import Navbar from "../components/Navbar";
import NoteModal from "../components/NoteModal";
import { Row, Col, Button } from "react-bootstrap";


function Home() {
    const [notes, setNotes] = useState([]);
    const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

    useEffect(() => {
        getNotes();
    }, []);

    const handleModalOpen = () => {
        setShowModal(true); // Open the modal
    };

    const handleModalClose = () => {
        setShowModal(false); // Close the modal
    };

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
               
            })
            .catch((err) => alert(err));
    };

    const updateNote = (id, title, content) => {
        api
            .put(`/api/notes/update/${id}/`, { title,content })
            .then((res) => {
                if (res.status === 200) {
                    alert("Note updated");
                } else {
                    alert("Failed to update note.");
                }
                getNotes();  // Refresh notes after updating
            })
            .catch((error) => alert(error));
    };

    const deleteNote = (id) => {
        
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (title, content) => {
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) alert("Note created!");
                else alert("Failed to make note.");
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div>
            <Navbar/>
            <div className="d-flex justify-content-center mt-5">
                <Button variant="primary" onClick={handleModalOpen}>
                    Add note
                </Button>
            </div>
            <div>
                <h2>Notes</h2>
                <Row>
                    {notes.map((note) => (
                        <Col key={note.id} md={3} className="mb-3">
                            <Note note={note} onDelete={deleteNote} onEdit={updateNote} />
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Render the modal conditionally based on state */}
            <NoteModal
                show={showModal}
                handleClose={handleModalClose}
                createNote={createNote}
            />
        </div>
    );
}

export default Home;
