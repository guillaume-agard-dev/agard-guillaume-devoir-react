import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../styles/Footer.css";


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
                        <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer" className="icon-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="icon bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.5 7.5 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="icon bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175A1.13 1.13 0 010 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.341-1.248-.82 0-1.357.54-1.357 1.248 0 .694.52 1.248 1.326 1.248h.014zm4.908 8.212h2.4V9.359c0-.215.016-.43.08-.586.176-.43.577-.877 1.252-.877.884 0 1.238.662 1.238 1.633v3.865h2.401V9.25c0-2.22-1.183-3.252-2.763-3.252-1.276 0-1.845.7-2.165 1.193h.031V6.169h-2.4c.031.677 0 7.225 0 7.225z"/>
                            </svg>
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer" className="icon-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="icon bi bi-twitter-x" viewBox="0 0 16 16">
                            <path d="M1.75 1.5h2.9l3.18 4.82L11.55 1.5H15L10.39 7.79 15.25 14.5h-2.9l-3.36-5.09L4.05 14.5H.5l5.08-6.75L.5 1.5h1.25zm3.63 1L8 6.4 10.63 2.5H11l-3.1 4.6L4.82 2.5h.56zM3 2.5l3.43 5.13L3 13.5h.44l3.3-4.79L10.56 13.5h.57L8 8.26 11.97 2.5h-.44L8 7.12 4.47 2.5H3z"/>
                            </svg>
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