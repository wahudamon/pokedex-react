import { Navbar, NavbarBrand } from 'reactstrap';

function NavBar() {
  return (
    <div>
      <Navbar color="light" light>
        <NavbarBrand className="mx-4" style={{fontWeight: 'bold'}} href="#home">Pokedex</NavbarBrand>
      </Navbar>
    </div>
  )
}

export default NavBar;