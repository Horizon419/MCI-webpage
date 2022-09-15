import { Link } from 'react-router-dom';
import Image from '../images/mci.png' 

const Header = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
              <div className="main__header-left">
                  <h4>Welcome to MCI Academy</h4>
                  <h1>Rebuilding Lives For The Future</h1>
                  <p>
                      There could be no definitioin of a successful life that does not include
                      service to others.
                  </p>
<Link to='/contact' className='btn lg'>Get started</Link>
        </div>
              <div className="main__header-right">
                  <div className='main__header-circle'></div>
                  <div className='main__header-image'>
                      <img src={Image} alt="header"/>
                  </div>
        </div>
      </div>
    </header>
  );
}
export default Header