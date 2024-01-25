import { Container, Row, Col } from 'reactstrap';
import './infoBasicas.css';
import cppImagem from './cpp.png';
import reactImagem from './react.png';
import cssImage from './css.png'
import jsImage from './js.png'
import MinhaFT from './perfil.jpeg'



function Apresentacao(){
 

    return(
        <Container className='apresentacao '>
            <Row>
                <Col className='infoBasicas mt-4 ms-5 text-center font-weight-light' >
                    <Container className='ms-5'>
                        <h2 className="display-4" >Olá, sou Victor Souza</h2>
                        <h3 className="display-6 " style={{ opacity: 0.5 }}>
                            Estudante de Ciência da Computação
                            pelo instituto federal de Rio Pomba 
                        </h3>
                        <h5>
                            Minhas habilidades:
                        </h5>
                        
                           <Container className='images'>
                                <img src={cppImagem}/>
                                <img src={cssImage}/>
                                <img src={jsImage}/>  
                                <img src={reactImagem}/>
                           </Container>
                            
                        
                    </Container>
                </Col>
                <Col className='foto d-flex justify-content-center ' md='6'>
                    <img className='perfil' src={MinhaFT}/>
                </Col>
            </Row>
        </Container>

        
    );
}

export default Apresentacao