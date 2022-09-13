import logo from '../assets/musicravelogo.png';
import image from "../assets/bgmusic.png"; 
import '../App.css';

function Header() {
  return (
      <header className="Header">
          <img src={logo} className="Header-logo" alt="logo" />
          {/* <img src={banner} className="Header-banner" alt="banner" /> */}
          <div style={{flexDirection: 'column', alignContent: 'center', alignItems: 'center', textAlign: 'center', marginLeft: '20%'}}>
            <p className='title'>
              Musi'Crave
            </p>
            <p className='subtitle'>
              For when you can't get that artist out of your mind
            </p>
          </div>
      </header>
  );
}

export default Header;
