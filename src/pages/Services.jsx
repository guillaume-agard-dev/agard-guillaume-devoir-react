import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Services.css';

function Services() {
  return (
    <>
      {/* Header avec image de fond */}
      <div className="services-header"></div>

      {/* Titre et introduction */}
        <Container className="my-5 text-center">
            <div className="header-title-container">
                <h1 className="fw-bold">Mon offre de services</h1>
                <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
                <div className="header-underline"></div>
            </div>
        </Container>
      

      {/* Section services */}
      <Container className="py-5">
        <Row className="g-4">
          <Col md={4}>
            <Card className="service-card h-100 border-1">
              <Card.Body className="text-center">
                <div className="icon mb-3 fs-1 text-primary">🚀</div>
                <Card.Title className="fs-4 fw-bold">UX Design</Card.Title>
                <Card.Text>
                  L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. 
                  L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card h-100 border-1">
              <Card.Body className="text-center">
                <div className="icon mb-3 fs-1 text-primary">💻</div>
                <Card.Title className="fs-4 fw-bold">Développement web</Card.Title>
                <Card.Text>
                  Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation 
                  (HTML, CSS, JavaScript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.).
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="service-card h-100 border-1">
              <Card.Body className="text-center">
                <div className="icon mb-3 fs-1 text-primary">🔍</div>
                <Card.Title className="fs-4 fw-bold">Référencement</Card.Title>
                <Card.Text>
                  Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche 
                  (Google, Bing, Yahoo, etc.). L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;