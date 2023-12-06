import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer';
import FavoritesList from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import FavoritesEmpty from './favorites-page-empty';
import { useAppSelector } from '../../hooks';

type FavoritePageProps = {
  offers: OfferType[];
}

function FavoritePage({ offers }: FavoritePageProps) {
  const favorites = offers.filter((offer) => offer.isFavorite);
  const favoriteOffers = useAppSelector((state) => state.favoritesOffers);
  if (favoriteOffers.length) {
    return (
      <>
        <Header />
        <FavoritesEmpty />
      </>
    );
  }
  //Доделать компонент и прокинуть настоящие данные

  return (
    <div className="page">
      <Helmet>
        <title>6 cities - Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            {favorites.length ? <FavoritesList offers={favorites} /> : null}

          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>

  );
}

export default FavoritePage;
