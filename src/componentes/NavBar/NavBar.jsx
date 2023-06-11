import CartWidget from "../CartWidget/CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavBar = () => {
    return (
        <Navbar bg="warning" expand="lg">
            <Container>
                <Navbar.Brand href="#home">            
                <img
                    src="/img/logo_naranja.png"
                    width="60"
                    height="100"
                    className="d-inline-block align-left"
                    alt="logo_resto"
            /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ fontWeight: 'bold', fontSize: 25, marginLeft:15, gap:15}}>
                        <Nav.Link href="galeria">Galeria</Nav.Link>
                        <NavDropdown title="Arma tu pedido!" id="basic-nav-dropdown" bg="secondary">
                            <NavDropdown.Item href="menu_entradas">Entradas</NavDropdown.Item>
                            <NavDropdown.Item href="menu_principales">Platos Principales</NavDropdown.Item>
                            <NavDropdown.Item href="menu_postres">Postres</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
                <strong>5</strong>
            </Container>
        </Navbar>
    )
}

export default NavBar



