import { Helmet } from 'react-helmet-async';
import { OfferType } from '../../types/offer';
import Cities from '../../components/cities/cities';
import Tabs from '../../components/tabs/tabs';
import Header from '../../components/header/header';

export type MainPageProps = {
  offers: OfferType[];
}

function MainPage({ offers }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities offers={offers} />
      </main>
    </div>
  );
}

export default MainPage;
