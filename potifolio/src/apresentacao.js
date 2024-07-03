import { Container, Row, Col } from 'reactstrap';
import './style/infoBasicas.css';
import cppImagem from './style/img/cpp.png';
import reactImagem from './style/img/react.png';
import cssImage from './style/img/css.png'
import jsImage from './style/img/js.png'
import MinhaFT from './style/img/perfil.jpeg'
import javaImage from './style/img/java.png'




function Apresentacao(){
 

    return(
        <Container stclassName='apresentacao '>
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
                                <img src={cppImagem} className='icone'/>
                                <img src={cssImage} className='icone'/>
                                <img src={jsImage} className='icone'/>  
                                <img src={reactImagem} className='icone'/>
                                <img src={javaImage} className='icone'/>
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