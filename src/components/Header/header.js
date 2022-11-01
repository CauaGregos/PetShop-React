import React from 'react';
import AuthService from '../../services/AuthService';
import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const header = (props) => {
    return(
        <Navbar style={{backgroundColor:'#F2BB16'}} expand="lg">
        <Container fluid>
        <Navbar.Brand color='white' href="#home">PetShop Campinas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-white-example" />
        <Navbar.Collapse id="navbar-white-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-white-example"
              title="Menu"
              menuVariant="white"
            >
              {props.data.map(
                (e) =>
                    <NavDropdown.Item href={'/'+String(e).toLowerCase()}>{e}</NavDropdown.Item>
               )}

                <NavDropdown.Item href='/logout'>Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );

};

export default header;