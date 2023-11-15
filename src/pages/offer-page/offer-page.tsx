import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer';
import { useParams, Navigate, Link } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import OfferDetails from '../../components/offer-details/offer-details';
import { ReviewType } from '../../types/review';
import { CitiesLocation } from '../../common/const';
import Map from '../../components/map/map';
import { MAX_NEAR_PLACES_COUNT } from '../../common/const';
import Card from '../../components/card/card';
import { useState } from 'react';


type OfferPageProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function OfferPage({ offers, reviews }: OfferPageProps) {
  const { offerId } = useParams();
  const offer = offers.find((item) => item.id === Number(offerId));
  const activeCity = CitiesLocation.Amsterdam;

  const [hoveredNearOfferId, setHoveredNearOfferId] = useState<OfferType['id'] | null>(null);

  function handleCardHover(nearOfferId: OfferType['id'] | null) {
    setHoveredNearOfferId(nearOfferId);
  }

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - {offer.title}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link to={AppRoute.Main} className="header__logo-link">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--offer">
        <section className="offer">

          <OfferDetails
            offer={offer}
            reviews={reviews}
          />

          <section className="offer__map map" >
            <Map
              location={activeCity.location}
              offers={offers.slice(0, MAX_NEAR_PLACES_COUNT)}
              block='offer'
              specialOfferId={hoveredNearOfferId}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offers.slice(0, MAX_NEAR_PLACES_COUNT).map((nearOffer) => ( //create component
                <Card
                  key={nearOffer.id}
                  offer={nearOffer}
                  block='near-places'
                  onCardHover={handleCardHover}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>

  );
}

export default OfferPage;
