import logo from '../assets/logodog.png';
import '../App.css';

function Header() {
  return (
      <header className="Header">
        <img src={logo} className="Header-logo" alt="logo" />
        <p className='title'>
          Dive into music
        </p>
      </header>
  );
}

export default Header;
