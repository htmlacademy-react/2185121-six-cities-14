import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../common/const';
import { OfferPrevType } from '../../types/offer';
import { capitalize, getRatingWidth } from '../../common/common';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOffersFavoriteStatus } from '../../api-actions/api-actions';
import { useNavigate } from 'react-router-dom';

type CardImageSize = 'small' | 'large';

type CardProps = {
  offer: OfferPrevType;
  block?: string;
  size?: CardImageSize;
  onCardHover?: (offerId: OfferPrevType['id'] | null) => void;
}

const sizeCard: Record<CardImageSize, { width: string; height: string }> = {
  small: { width: '150', height: '110' },
  large: { width: '260', height: '200' },
};

function Card({ offer, block, size = 'large', onCardHover }: CardProps) {
  const { isPremium, price, previewImage, id, title, type, rating } = offer;

  function handleMouseEnter() {
    onCardHover?.(id);
  }

  function handleMouseLeave() {
    onCardHover?.(null);
  }

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();
  const isFavorite = useAppSelector((state) => state.favoritesOffers)?.find((favoriteOffer) => favoriteOffer.id === offer.id);


  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            {...sizeCard[size]}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : null}`}
            type="button"
            onClick={() => {
              if (authStatus === AuthorizationStatus.NoAuth) {
                navigate('/login');
              } else {
                dispatch(changeOffersFavoriteStatus({id: offer.id, isFavorite: Number(!isFavorite)}));
              }
            }}
          >
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
