
import { useState, useEffect } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';

function GithubModal({ show, handleClose }) {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);


  const username = 'github-john-doe';

  useEffect(() => {
    if (show) {
      setLoading(true);
      fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
          setGithubData(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
  <Modal.Header closeButton className="bg-dark text-white border-0">
    <Modal.Title>Mon profil GitHub</Modal.Title>
  </Modal.Header>
  <Modal.Body className="bg-dark text-white px-4 py-4">
    {loading ? (
      <div className="text-center my-5">
        <Spinner animation="border" variant="light" />
      </div>
    ) : (
      <div className="d-flex flex-column flex-md-row align-items-center gap-4">
        <img
          src={githubData.avatar_url}
          alt="Avatar GitHub"
          className="rounded-circle"
          style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
        <div className="flex-grow-1">
          <h5>
            <i className="bi bi-person"></i>{" "}
            <a
              href={githubData.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-decoration-underline"
            >
              {githubData.name || githubData.login}
            </a>
          </h5>
          {githubData.location && (
            <p><i className="bi bi-geo-alt me-2"></i> {githubData.location}</p>
          )}
          {githubData.bio && (
            <p><i className="bi bi-chat-left-text me-2"></i> {githubData.bio}</p>
          )}
          <hr className="bg-secondary" />
          <p><i className="bi bi-box me-2"></i> Repositories : {githubData.public_repos}</p>
          <p><i className="bi bi-people me-2"></i> Followers : {githubData.followers}</p>
          <p><i className="bi bi-person-plus me-2"></i> Following : {githubData.following}</p>
        </div>
      </div>
    )}
  </Modal.Body>
  <Modal.Footer className="bg-dark border-0">
    <Button variant="secondary" onClick={handleClose}>Fermer</Button>
  </Modal.Footer>
</Modal>

  );
}

export default GithubModal;
