import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Discover over 200 years of history</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../../public/UpDoorway.jpg'
              text='The Grand Doorway'
              label='Label Name'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              path='/'
            />
            <CardItem
              src='../../public/UpFire.jpg'
              text='Brick & Marble Fireplace'
              label='Label Name'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../public/Stairs2.jpg'
              text='Partial Spiral Staircase'
              label='Label Name'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
              path='/'
            />
            <CardItem
              src='../../public/Tub.jpg'
              text='Clawfoot Bathtub'
              label='Label Name'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
              path='/'
            />
            <CardItem
              src='../../public/FrontDoor.jpg'
              text='Grand Entrance'
              label='Label Name'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;