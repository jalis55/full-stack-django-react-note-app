import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const NoteModal = ({ createNote, taskName }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNote(title, content);
    handleClose();

  }

  return (
    <div>
      <div className="d-flex justify-content-center mt-5">
        <Button variant="primary" onClick={handleShow}>
          {taskName}
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Create Note

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <br />
            <input
              type="text"
              id="title"
              name="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <label htmlFor="content">Content:</label>
            <br />
            <textarea
              id="content"
              name="content"
              required
              onChange={(e) => setContent(e.target.value)}
              value={content}

            ></textarea>
            <br />
            <input type="submit" value="Add note"></input>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default NoteModal
