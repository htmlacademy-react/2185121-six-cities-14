import MainPage from '../../pages/main-page/main-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritePage from '../../pages/favorites-page/favorite-page';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../common/const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import PrivateRoute from '../private-route';
import { HelmetProvider } from 'react-helmet-async';
import Spinner from '../spinner/spinner';
import { useEffect } from 'react';
import { fetchOffersAction, checkAuthAction, fetchOffersFavoriteAction } from '../../api-actions/api-actions';


function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
    dispatch(checkAuthAction());
    dispatch(fetchOffersFavoriteAction());
  }, [dispatch, authorizationStatus]);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`}
            element={
              <OfferPage />
            }
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authorizationStatus}
              >
                <FavoritePage />
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
