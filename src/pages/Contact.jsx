import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Map, GeoAlt, Phone, EnvelopeAt } from "react-bootstrap-icons";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      {/* HEADER */}
      <header className="contact-header text-center py-5 bg-light">
        <h1>Contact</h1>
        <p>
            Pour me contacter en vue d'un entretien ou d'une future collaboration,
            merci de remplir le formulaire de contact.    
        </p>
        <div className="contact-underline"></div>
      </header>

      {/* FORMULAIRE + COORDONNÉES */}
      <Container className="my-5">
        <div className="contact-box shadow p-4">
          <Row>
            {/* FORMULAIRE */}
            <Col md={6}>
              <h4>Formulaire de contact</h4>
              <div className="form-underline"></div>
              <Form>
                <Form.Group className="mb-3" controlId="nom">
                  {/* Nom */}
                  <Form.Control type="text" placeholder="Votre nom" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                  {/* Email */}
                  <Form.Control
                    type="email"
                    placeholder="Votre adresse email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="telephone">
                  {/* Téléphone */}
                  <Form.Control
                    type="tel"
                    placeholder="Votre numéro de téléphone"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="sujet">
                  {/* Sujet */}
                  <Form.Control type="text" placeholder="Sujet" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="message">
                  {/* Message */}
                  <Form.Control
                    as="textarea"
                    rows={10}
                    placeholder="Votre message"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="d-block mx-auto">
                  Envoyer
                </Button>
              </Form>
            </Col>

            {/* COORDONNÉES + MAP */}
            <Col md={6} className="mt-4 mt-md-0">
              <h4>Mes coordonnées</h4>
              <div className="form-underline"></div>

              <p className="nom">John Doe</p>

              <p> <Map className="icon" /> 40 rue Laure Diebold</p>

              <p> <GeoAlt className="icon" /> 69009 Lyon, France</p>

              <p> <Phone className="icon" /> 10 20 30 40 50</p>

              <p className="mailto-contact"> <EnvelopeAt className="icon" /> <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>

              <div className="map-container mt-3">
                <iframe 
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657600815!2d4.796398611642442!3d45.778665712281736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1754644707137!5m2!1sfr!2sfr" 
                width="100%" height="350" 
                style={{ border: 0 }} 
                allowfullscreen="" 
                loading="lazy" 
                ></iframe>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}