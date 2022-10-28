import { Link } from "react-router-dom";

export default function NavBar() {
  //State

  //Comportements

  //Render
  return (
    <nav>
      <Link className="nav__link" to="/">
        Home
      </Link>
      <Link className="nav__link" to="/category">
        Category
      </Link>
    </nav>
  );
}
