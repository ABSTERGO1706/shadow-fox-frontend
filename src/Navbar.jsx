import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/squad">  2026 Squad</Link>
      <Link to="/achievements">Achievements</Link>
      <Link to="/timeline">History</Link>
    </nav>
  );
}

export default Navbar;