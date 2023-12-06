import { OfferPrevType } from '../../types/offer';
import Card from '../card/card';

type FavoritesListProps = {
  offers: OfferPrevType[];
}

function FavoritesList({ offers }: FavoritesListProps) {
  const offersAmsterdam = offers.filter((offer) => offer.city.name === 'Amsterdam');
  const offersBrussels = offers.filter((offer) => offer.city.name === 'Brussels');
  const offersCologne = offers.filter((offer) => offer.city.name === 'Cologne');
  const offersDusseldorf = offers.filter((offer) => offer.city.name === 'Dusseldorf');
  const offersHamburg = offers.filter((offer) => offer.city.name === 'Hamburg');
  const offersParis = offers.filter((offer) => offer.city.name === 'Paris');
  return (
    <ul className="favorites__list">

      {/*Amsterdam */}
      {offersAmsterdam.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{'Amsterdam'}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersAmsterdam.map((offer) => <Card key={offer.id} block='favorites' size='small' offer={offer} />)}
          </div>
        </li>
      )}

      {/* Brussels */}
      {offersBrussels.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{'Brussels'}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersBrussels.map((offer) => <Card key={offer.id} block='favorites' size='small' offer={offer} />)}
          </div>
        </li>
      )}

      {/* Cologne */}
      {offersCologne.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{'Cologne'}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersCologne.map((offer) => <Card key={offer.id} block='favorites' size='small' offer={offer} />)}
          </div>
        </li>
      )}

      {/* Dusseldorf */}
      {offersDusseldorf.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{'Dusseldorf'}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersDusseldorf.map((offer) => <Card key={offer.id} block='favorites' size='small' offer={offer} />)}
          </div>
        </li>
      )}

      {/* Hamburg */}
      {offersHamburg.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{'Hamburg'}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersHamburg.map((offer) => <Card key={offer.id} block='favorites' size='small' offer={offer} />)}
          </div>
        </li>
      )}

      {/* Paris */}
      {offersParis.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{'Paris'}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersParis.map((offer) => <Card key={offer.id} block='favorites' size='small' offer={offer} />)}
          </div>
        </li>
      )}
    </ul>
  );
}

export default FavoritesList;
