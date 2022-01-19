import Logo from "../img/logo192.png";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img className="logo" src={Logo} alt="react-logo" />
        <ul className="nav-items">
          <li>Exemplo 1</li>
          <li>Exemplo 2</li>
          <li>Exemplo 3</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
