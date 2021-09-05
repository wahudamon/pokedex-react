import { useState } from 'react';
import {
  //Collapse,
  Navbar,
  //NavbarToggler,
  NavbarBrand,
  //Nav,
  //NavItem,
  // NavLink,
} from 'reactstrap';
import PokedexLogo from '../../assets/images/pokedex-logo.png';

import '../../App.css';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#fff" light expand="md">
        <NavbarBrand className="mx-4 mb-2" href="/"><img src={PokedexLogo} alt="pokedex logo" /></NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/my-pokemon">My Pokemon</NavLink>
            </NavItem>
          </Nav>
        </Collapse> */}
      </Navbar>
    </div>
  )
}