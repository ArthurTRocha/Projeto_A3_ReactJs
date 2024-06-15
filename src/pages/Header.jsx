// import '../styles/style.css';
import logo from '../assets/images/Logo.png';

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <nav className="opcoesHeader">
      <ul>
        <li><a href="/home">Início</a></li>
        <li><a href="">Suporte</a></li>
        <li><a href="/servico">Serviços</a></li>
        <li><a href="">Sobre</a></li>
        <li><a href="/login">Entrar</a></li>
      </ul>
    </nav>
    <div className="clear"></div>
  </header>
);

export default Header;
