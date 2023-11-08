import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import { OfferType } from '../../types/offer';
import { capitalize, getRatingWidth } from '../../common/common';

type CardProps = {
  offer: OfferType;
  onCardHover?: (offerId: OfferType['id'] | null) => void;
}

function Card({ offer, onCardHover }: CardProps) {
  const { isPremium, price, previewImage, id, title, type, rating } = offer;

  function handleMouseEnter() {
    onCardHover?.(id);
  }

  function handleMouseLeave() {
    onCardHover?.(null);
  }

  return (
    <article
      className="cities__card place-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={isPremium ? 'place-card__mark' : 'visually-hidden'} >
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt={title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${getRatingWidth(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}

export default Card;
