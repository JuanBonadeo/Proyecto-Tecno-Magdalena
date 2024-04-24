import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import '../NavBar/navbar.css';
import CartIcon from '../CartIcon/CartIcon';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';



function Header() {
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  return (
    <Navbar expand="xl" className="navBar dark fixed-top" data-bs-theme="light" expanded={expanded}>
      <Container className='mobileContainerNav'>
        <Logo className='logo backg' />
        <div className="mobileContainerNavRight">
          <CartIcon className="mobile" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navLinks" onSelect={closeNavbar}>
            <Link to="/" className="primary bold" onClick={closeNavbar}>Inicio</Link>
            <div className="dropdownContainer">
              <NavDropdown className='Dropdown'>
                <Link to='/categoria/tecnologia/subcategoria/iluminacion'><span>Iluminacion</span></Link>
                <Link to='/categoria/tecnologia/subcategoria/auriculares'><span>Auriculares</span></Link>
                <Link to='/categoria/tecnologia/subcategoria/cargadores'><span>Cargadores</span></Link>
                <Link to='/categoria/tecnologia/subcategoria/parlantes'><span>Parlantes</span></Link>
                <Link to='/categoria/tecnologia/subcategoria/relojes'><span>Relojes</span></Link>
                <Link to='/categoria/tecnologia/subcategoria/cables'><span>Cables</span></Link>
                <Link to='/categoria/tecnologia/subcategoria/computacion'><span>Computacion</span></Link>
                <Link to='/categoria/tecnologia/subcategoria/electronica'><span>Electronica</span></Link>
                <Link to='/categoria/tecnologia/subcategoria/gaming'><span>Gaming</span></Link>
              </NavDropdown>
              <Link to="/categoria/tecnologia/" className="primary" onClick={closeNavbar}>Tecnologia</Link>
            </div>
            <div className='dropdownContainer'>
              <NavDropdown className='Dropdown'>
                <Link to='/categoria/bazar/subcategoria/termos'><span>Termos</span></Link>
                <Link to='/categoria/bazar/subcategoria/bolsos'><span>Bolsos y Mochilas</span></Link>
                <Link to='/categoria/bazar/subcategoria/canastos'><span>Canastos</span></Link>
                <Link to='/categoria/bazar/subcategoria/setmateros'><span>Set Materos</span></Link>
                <Link to='/categoria/bazar/subcategoria/pavas'><span>Pavas</span></Link>
              </NavDropdown>
              <Link to="/categoria/bazar/" className="primary" onClick={closeNavbar}>Bazar</Link>
            </div>
            <div className='dropdownContainer'>
              <NavDropdown className='Dropdown'>
                <Link to='/categoria/articulos/subcategoria/perfumeria&belleza'><span>Perfumeria & Belleza</span></Link>
                <Link to="/categoria/articulos/subcategoria/jugueteria"><span>Jugueteria</span></Link>
                <Link to="/categoria/articulos/subcategoria/marroquineria"><span>Marroquineria</span></Link>
              </NavDropdown>
              <Link to="/categoria/articulos/" className="primary" onClick={closeNavbar}>Articulos</Link>
            </div>
            <div className='dropdownContainer'>
              <NavDropdown className='Dropdown'>
                <Link to='/categoria/ferreteria/subcategoria/herramientas'><span>Herramientas</span></Link>
                <Link to="/categoria/ferreteria/subcategoria/pilas" className="primary"><span>Pilas</span></Link>
                <Link to="/categoria/ferretria/subcategoria/pegamentos" className="primary"><span>Pegamentos</span></Link>
                
              </NavDropdown>
              <Link to="/categoria/ferreteria" className="primary" onClick={closeNavbar}>Ferreteria</Link>
            </div>
            <div className='dropdownContainer'>
              <Link to="/categoria/indumentaria" className="primary" onClick={closeNavbar}>Indumentaria</Link>
            </div>
            


          </Nav>
        </Navbar.Collapse>
        <div className="desktopContainerNavRight">
          <CartIcon className="desktop" />
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
