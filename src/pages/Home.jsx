import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import AboutPhoto from '../assets/image/john-doe-about.jpg'
import '../styles/Home.css';


function Home() {
  return (
    <div>

      <header className="hero-section d-flex align-items-center">
        <Container className="text-center text-white">
          <h1 className='hero-title'>Bonjour, je suis John Doe</h1>
          <h2 className='hero-subtitle'>Développeur Web full stack</h2>
          <Button variant="light" className="mt-3">En savoir plus</Button>
        </Container>
      </header>

      {/* PRESENTATION SECTION */}
      <section className="about-section py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <h3>À propos</h3>
                <img
                    src={AboutPhoto}
                    alt="John Doe"
                    className="img-fluid"
                />
              <p>
                Je suis un développeur passionné par la création de sites web modernes et responsives. 
                Grâce à ma formation et mes projets, j’ai acquis de solides compétences en HTML, CSS, et JavaScript.
              </p>
            </Col>
            <Col md={6}>
              <h3>Mes compétences</h3>
              <div className="mb-3">
                <p className="mb-1">HTML 90%</p>
                <ProgressBar variant='danger' now={90} />
              </div>
              <div className="mb-3">
                <p className="mb-1">CSS 80%</p>
                <ProgressBar variant='info' now={80} />
              </div>
              <div className="mb-3">
                <p className="mb-1">Javascript 70%</p>
                <ProgressBar variant='warning' now={70} />
              </div>
              <div className="mb-3">
                <p className="mb-1">PHP 60%</p>
                <ProgressBar variant='success' now={60} />
              </div>
              <div className="mb-3">
                <p className="mb-1">React 50%</p>
                <ProgressBar now={50} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  );
}

export default Home;
