import React, {useState} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap'
import {Link} from 'react-router-dom';

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="primary" light expand="md" p-3 >
            <NavbarBrand>
             <h1 className="text-link text-center">
             <span className="text-danger">  ABI</span> Motors
              </h1>    
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                        <NavLink tag={Link} to="/" className="text-white">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/About" className="text-white">
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to="/Contact" className="text-white">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
          
        </Navbar>

    );
};

export default NavBar;