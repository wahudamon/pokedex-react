import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import PokedexLogo from '../../assets/images/pokedex-logo.png';

import '../../App.css';

export default function NavBar() {
  return (
    <div>
      <Navbar color="#fff" light expand="md">
        <NavbarBrand className="mx-4 mb-2" href="/"><img src={PokedexLogo} alt="pokedex logo" /></NavbarBrand>
      </Navbar>
    </div>
  )
}