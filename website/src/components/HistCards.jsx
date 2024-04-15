import './HistCards.css';
import HistCardItem from './HistCardItem';

function HistCards() {
  return (
    <div className='hist_cards'>
      <h1>History Of Boonville Missouri</h1>
      <p>Discover the rich history of Booville, MO.</p>
      <div className='hist_cards__container'>
        <div className='hist_cards__wrapper'>
          <ul className='hist_cards__items'>
            <HistCardItem
              src='../../public/vintagePic.jpg'
              text='Picture from the 1800s'
              label='Label Name'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
              path='/'
            />
            <HistCardItem
              src='../../public/CivilWar.jpeg'
              text='First Civil War Battleground'
              label='Label Name'
              desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.'
              path='/'
            />
          </ul>
          <ul className='hist_cards__items'>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default HistCards;