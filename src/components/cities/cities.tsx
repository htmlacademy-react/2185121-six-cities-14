import {OfferPrevType } from '../../types/offer';
import Card from '../../components/card/card';
import { useState } from 'react';
import Map from '../map/map';
import Spinner from '../spinner/spinner';
import { useAppSelector } from '../../hooks';
import Sorting from '../sorting/sorting';
import MainEmpty from '../../pages/main-page/main-page-empty';


function Cities() {
  const [hoveredOfferId, setHoveredOfferId] = useState<OfferPrevType['id'] | null>(null);
  const currentCity = useAppSelector((state) => state.activeCity);
  const currentOffers = useAppSelector((state) => state.currentOffers);
  const loadedStatus = useAppSelector((state) => state.loadedStatus);
  function handleCardHover(offerId: OfferPrevType['id'] | null) {
    setHoveredOfferId(offerId);
  }

  if (loadedStatus && !currentOffers.length) {
    return (
      <MainEmpty currentCity={currentCity}/>
    );
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{currentOffers.length} places to stay in {currentCity}</b>
          <Sorting />
          {!loadedStatus && <Spinner />}
          <div className="cities__places-list places__list tabs__content">
            {currentOffers.map((offer) => (
              <Card key={offer.id} block='cities' offer={offer} onCardHover={handleCardHover} />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map">
            {currentOffers.length &&
              <Map
                location={currentOffers[0].city.location}
                block='cities'
                offers={currentOffers}
                specialOfferId={hoveredOfferId}
              />}
          </section>
        </div>
      </div>
    </div>
  );
}

export default Cities;
