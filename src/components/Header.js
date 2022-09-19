import { Link } from 'react-router-dom';
import Image from '../images/mci.png' 

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>WELCOME TO MCI ACADEMY</h4>
          <h1>Rebuilding Lives For The Future</h1>
          <p>
            Master’s Care International (MCI) is a non-profit organization
            committed to reaching out to especially young people; to let them
            know that they can live meaningful, prosperous and successful lives.
          </p>
          <a
            href="https://forms.gle/be3mpYBT8DotbrKp8"
            className="btn lg"  rel='noopener' target='_blank' >
            Register with us
          </a>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="header" />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header