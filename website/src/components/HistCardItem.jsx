import { Link } from 'react-router-dom';

function HistCardItem(props) {
  return (
    <>
      <li className='hist_cards__item'>
        <Link className='hist_cards__item__link' to={props.path}>
          <figure className='hist_cards__item__pic-wrap' data-category={props.label}>
            <img
              className='hist_cards__item__img'
              alt='House Image'
              src={props.src}
            />
          </figure>
          <div className='hist_cards__item__info'>
            <h5 className='hist_cards__item__text'>{props.text}</h5>
            <p className='hist_cards_item_desc'>{props.desc}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default HistCardItem;