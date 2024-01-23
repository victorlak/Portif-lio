import './App.css';
import { Container, Nav, NavItem, NavLink, NavbarBrand, Navbar } from 'reactstrap';
import { FaInstagram,FaGithub} from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


function NavB(){
 

    return(

        
        
            <Navbar fixed ='top' className='navBar'>
                <NavbarBrand >
                    <h2 style={{ opacity: 0.7}}>
                        Developer
                    </h2>
                 </NavbarBrand>
                <Nav className='nav'>
                    
                    <NavItem>
                        <NavLink disabled href="#">Minhas redes: </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink active href="https://github.com/victorlak" target='_blank'>GitHub</NavLink>
                    </NavItem>
                    <NavItem>
                        <FaGithub/>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://www.instagram.com/vitor_lak/" target='_blank'>Instagram</NavLink>
                    </NavItem>
                    <NavItem>
                        <FaInstagram />
                    </NavItem>
                    <NavItem>
                        <NavLink disabled >Email: victormirandadasilvasouza9999@gmail.com</NavLink>
                    </NavItem>
                    <NavItem>
                    <BiLogoGmail/>
                    </NavItem>
                </Nav>
            </Navbar>
    );
}

export default NavB