import { Container, Row, Col } from 'reactstrap';
import './style/infoBasicas.css';



function SobreMim(){
 

    return(
        <Container fluid className="d-flex justify-content-center mt-5 sobre">
            <div  className="d-flex justify-content-center sobre-dentro mt-1">
                <Col>
                    <Row>
                        <h1 className='display-5 d-flex justify-content-center'>Sobre mim</h1>
                    </Row>
                    <Row>
                        <h6 className='d-flex justify-content-center' style={{ opacity: 0.8 }}>
                            Ingressei na área no início de 2022, mais especificamente
                            em Ciência da Computação, no campus IFRP. Desde então venho
                            focando principalmente no aprendizado de desenvolvimento web.
                        </h6>
                    </Row>
                </Col>
            </div>
        </Container>

        
    );
}

export default SobreMim