import { TOfferInfo } from '../../types/offer';
import { capitalize, getRatingWidth } from '../../common/common';
import ReviewsList from '../reviews-list/review-list';
import { ReviewType, ReviewSendType } from '../../types/review';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeOffersFavoriteStatus } from '../../api-actions/api-actions';
import { useNavigate } from 'react-router-dom';
import { AuthorizationStatus } from '../../common/const';

type OfferDetailsProps = {
  offer: TOfferInfo;
  reviews: ReviewType[];
  sendComment: (review: ReviewSendType) => void;
}

function OfferDetails({ offer, reviews, sendComment }: OfferDetailsProps) {
  const {
    images,
    description,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
  } = offer;

  const isFavorite = useAppSelector((state) => state.favoritesOffers)?.find((favoriteOffer) => favoriteOffer.id === offer.id);

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();

  return (
    <>
      <div className="offer__gallery-container container">
        <div className="offer__gallery">
          {images.slice(0, 6).map((image) => (
            <div key={image} className="offer__image-wrapper">
              <img
                className="offer__image"
                src={image}
                alt={description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="offer__container container">
        <div className="offer__wrapper">
          <div className={isPremium ? 'offer__mark' : 'visually-hidden'}>
            <span>Premium</span>
          </div>
          <div className="offer__name-wrapper">
            <h1 className="offer__name">{title}</h1>
            <button
              className={`offer__bookmark-button button ${isFavorite ? 'offer__bookmark-button--active' : null}`}
              type="button"
              onClick={() => {
                if (authStatus === AuthorizationStatus.NoAuth) {
                  navigate('/login');
                } else {
                  dispatch(changeOffersFavoriteStatus({id: offer.id, isFavorite: Number(!isFavorite)}));
                }
              }}
            >
              <svg className="offer__bookmark-icon" width={31} height={33}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: `${getRatingWidth(rating)}%` }} />
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">{capitalize(type)}</li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">€{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            <ul className="offer__inside-list">
              {goods.map((good) => (
                <li key={good} className="offer__inside-item">{good}</li>
              ))}
            </ul>
          </div>
          <div className="offer__host">
            <h2 className="offer__host-title">Meet the host</h2>
            <div className="offer__host-user user">

              <div className={host.isPro ? 'offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper' : 'offer__avatar-wrapper user__avatar-wrapper'}>
                <img
                  className="offer__avatar user__avatar"
                  src={host.avatarUrl}
                  width={74}
                  height={74}
                  alt={host.name}
                />
              </div>
              <span className="offer__user-name">{host.name}</span>
              {host.isPro && <span className="offer__user-status">Pro</span>}
            </div>
            <div className="offer__description">
              <p className="offer__text">{description}</p>
            </div>
          </div>

          <ReviewsList reviews={reviews} sendComment={sendComment} />
        </div>
      </div>
    </>
  );
}

export default OfferDetails;
