import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';

import GitHubIcon from '../assets/icon/github.svg';
import LinkedinIcon from '../assets/icon/linkedin.svg';
import TwitterIcon from '../assets/icon/twitter-x.svg';


function Footer () {
    return (
        <footer className="footer mt-auto py-4">
            <Container>
                <Row>
                    {/* Première colonne : coordonnées et réseaux */}
                    <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
                    <h5>John Doe</h5>
                    <p>40 rue Laure Diebold <br />69000 Lyon, France <br />10 20 30 40 50 <br /><a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a></p>
                    <div className="social-icons d-flex justify-content-center justify-content-md-start gap-3">
                        <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer">
                            <img src={GitHubIcon} alt="GitHub" className="icon" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <img src={LinkedinIcon} alt="Linkedin" className="icon" />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer">
                            <img src={TwitterIcon} alt="Twitter" className="icon" />
                        </a>
                    </div>
                    </Col>

                    {/* Deuxième colonne : Liens utiles */}
                    <Col md={4} className="mb-4 mb-md-0 text-center text-md-start">
                        <h5>Liens utiles</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/contact">Me contacter</Link></li>
                            <li><Link to="/mentions-legales">Mentions légales</Link></li>
                        </ul>
                    </Col>

                    {/* Colonne 3 : Dernières réalisations */}
                    <Col md={4} className="text-center text-md-start">
                        <h5>Mes dernières réalisations</h5>
                        <ul className="list-unstyled">
                        <li><Link to="/portfolio">Fresh Food</Link></li>
                        <li><Link to="/portfolio">Restaurant Akira</Link></li>
                        <li><Link to="/portfolio">Espace bien-être</Link></li>
                        <li><Link to="/portfolio">SEO</Link></li>
                        <li><Link to="/portfolio">Création d'une API</Link></li>
                        <li><Link to="/portfolio">Maquette d'un site</Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer;