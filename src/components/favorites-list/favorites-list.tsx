import { OfferType } from '../../types/offer';
import FavoritesCard from '../favorites-card/favorites-card';
import { CityName } from '../../common/const';

type FavoritesListProps = {
  offers: OfferType[];
}

function FavoritesList({ offers }: FavoritesListProps) {
  const offersAmsterdam = offers.filter((offer) => offer.city.name === CityName.Amsterdam);
  const offersBrussels = offers.filter((offer) => offer.city.name === CityName.Brussels);
  const offersCologne = offers.filter((offer) => offer.city.name === CityName.Cologne);
  const offersDusseldorf = offers.filter((offer) => offer.city.name === CityName.Dusseldorf);
  const offersHamburg = offers.filter((offer) => offer.city.name === CityName.Hamburg);
  const offersParis = offers.filter((offer) => offer.city.name === CityName.Paris);
  return (
    <ul className="favorites__list">

      {/*Amsterdam */}
      {offersAmsterdam.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{CityName.Amsterdam}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersAmsterdam.map((offer) => <FavoritesCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      )}

      {/* Brussels */}
      {offersBrussels.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{CityName.Brussels}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersBrussels.map((offer) => <FavoritesCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      )}

      {/* Cologne */}
      {offersCologne.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{CityName.Cologne}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersCologne.map((offer) => <FavoritesCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      )}

      {/* Dusseldorf */}
      {offersDusseldorf.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{CityName.Dusseldorf}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersDusseldorf.map((offer) => <FavoritesCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      )}

      {/* Hamburg */}
      {offersHamburg.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{CityName.Hamburg}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersHamburg.map((offer) => <FavoritesCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      )}

      {/* Paris */}
      {offersParis.length !== 0 && (
        <li className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{CityName.Paris}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {offersParis.map((offer) => <FavoritesCard key={offer.id} offer={offer} />)}
          </div>
        </li>
      )}
    </ul>
  );
}

export default FavoritesList;
