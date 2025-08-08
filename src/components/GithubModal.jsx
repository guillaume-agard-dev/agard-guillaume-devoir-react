import React, { useState, useEffect } from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const GithubModal = ({ show, handleClose }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/github-john-doe')
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((error) => console.error('Erreur de chargement du profil GitHub :', error));
  }, []);

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header className="bg-dark text-white border-bottom-1">
            <Modal.Title><i className="bi bi-github me-2"></i>Mon profil GitHub</Modal.Title>
        </Modal.Header>
      <Modal.Body className='bg-dark text-white'>
        {profile ? (
          <Row>
            {/* Avatar à gauche */}
            <Col md={6} className="d-flex justify-content-center align-items-center mb-4 mb-md-0">
              <img
                src={profile.avatar_url}
                alt="Avatar"
                className="img-fluid rounded-circle"
                style={{ width: '80%', maxWidth: '250px' }}
              />
            </Col>

            {/* Infos à droite */}
            <Col md={6}>
              <h4><i className="bi bi-person-fill me-2"></i>{profile.name}</h4>
              <hr />
              <p><i className="bi bi-geo-alt-fill me-2"></i>{profile.location}</p>
              <hr />
              <p><i className="bi bi-person-lines-fill me-2"></i>{profile.bio}</p>
              <hr />
              <p><i className="bi bi-journal-code me-2"></i>Repositories : {profile.public_repos}</p>
              <hr />
              <p><i className="bi bi-people-fill me-2"></i>Followers : {profile.followers}</p>
              <hr />
              <p><i className="bi bi-person-plus-fill me-2"></i>Following : {profile.following}</p>
            </Col>
          </Row>
        ) : (
          <div className="text-center p-4">
            <p>Chargement des données GitHub...</p>
          </div>
        )}
      </Modal.Body>

    <Modal.Footer className="bg-dark border-top-1 justify-content-right">
        <Button variant='secondary' onClick={handleClose}>Fermer</Button>
      </Modal.Footer>

    </Modal>
  );
};

export default GithubModal;
