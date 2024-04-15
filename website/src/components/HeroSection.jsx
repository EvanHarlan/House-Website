import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  const handleWatchTrailer = () => {
    // Redirect directly to YouTube link
  };

  return (
    <div className='hero-container'>
      <h1>319 E Spring St.</h1>
      <p>3BD - 3BA - 2,803 Sqft</p>
      <div className='hero-btns'>
        <Link to='/about' className='btns'>
          <Button
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            ABOUT
          </Button>
        </Link>
        <Link to='/history' className='btns'>
          <Button
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={handleWatchTrailer}
          >
            HISTORY <i className='' />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
