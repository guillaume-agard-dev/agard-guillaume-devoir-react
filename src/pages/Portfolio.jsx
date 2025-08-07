
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import portfolioData from '../data/PortfolioData';
import '../styles/Portfolio.css';


function Portfolio() {

    return (
        <>
    
        {/* Header avec image de fond */}
        <div className="portfolio-header"></div>

        {/* Titre et introduction */}
        <Container className="my-5 text-center">
            <div className="portfolio-title-container">
                <h1 className="fw-bold">Portfolio</h1>
                <p className="text-muted">Voici quelques unes de mes réalisations</p>
                <div className="portfolio-underline"></div>
            </div>
        </Container>

                {/* GRILLE DES CARTES */}
            <Container className="pb-5">
                <Row>
                {portfolioData.map((project, index) => (
                    <Col key={index} xs={12} sm={6} lg={4} className="mb-4">
                    <Card className="portfolio-card h-100">
                        <Card.Img variant="top" src={project.img} alt={project.title} />

                        <Card.Body className='d-flex flex-column text-center'>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text>{project.description}</Card.Text>

                        <div className='mt-auto'>
                            <Button
                                variant='primary'
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='custom-hover-btn'
                            >
                            Voir le site
                            </Button>
                        </div>

                        </Card.Body>

                        <Card.Footer className='bg-light text-muted small text-center'>
                            {project.extra}
                        </Card.Footer>
                    </Card>
                    </Col>
                ))}
                </Row>
            </Container>

        </>
    )
}

export default Portfolio