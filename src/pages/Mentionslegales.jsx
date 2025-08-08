import { Container, Accordion } from "react-bootstrap"
import { Map, GeoAlt, Phone, EnvelopeAt, Globe } from "react-bootstrap-icons";
import '../styles/Mentions.css';


function Mentionslegales() {
    return (
        <div className="mentions-legales-page">
            {/* Titre et introduction */}
            <Container className="my-5 text-center">
                <div className="mentions-title-container">
                    <h1 className="fw-bold">Mentions légales</h1>
                    <div className="mentions-underline"></div>
                </div>
            </Container>

            {/* Contenu accordéon */}
            <Container className="my-5">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Editeur du site</Accordion.Header>

                            <Accordion.Body>
                                <h2>John Doe</h2>                                
                                  <p> <Map className="icon" /> 40 rue Laure Diebold</p>                                
                                  <p> <GeoAlt className="icon" /> 69009 Lyon, France</p>                                
                                  <p> <Phone className="icon" /> 10 20 30 40 50</p>                                
                                  <p className="mailto-contact"> <EnvelopeAt className="icon" /> <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Hébergeur</Accordion.Header>

                            <Accordion.Body>
                                <h2>alwaysdata</h2>
                                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <p> <Globe className="icon" /> <a href="https://www.alwaysdata.com/fr/">www.alwaysdata.com</a></p>
                            </Accordion.Body>

                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Crédits</Accordion.Header>

                            <Accordion.Body>
                                <h2>Crédits</h2>
                                <p>Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/">Centre Européen de formation.</a></p>
                                <p><i>Les images utilisées sur ce site sont libres de droits et on été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay.</a></i></p>
                                <p><i>La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John doe Icons erstellt von Freepik - Flaticon.</a></i></p>
                            </Accordion.Body>

                        </Accordion.Item>
                    </Accordion>
            </Container>

        </div>
    )
}

export default Mentionslegales