import { Navbar, NavbarBrand } from 'reactstrap';
import '../../App.css';

function NavBar() {
  return (
    <div>
      <Navbar className="navbar" color="#fff" light>
        <NavbarBrand className="mx-4" style={{fontWeight: 'bold'}} href="/">Pokedex</NavbarBrand>
        <NavbarBrand className="mx-4" style={{fontWeight: 'bold'}} href="/my-pokemon">My Pokemon</NavbarBrand>
      </Navbar>
    </div>
  )
}

export default NavBar;