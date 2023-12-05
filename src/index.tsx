import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux/es/exports';
import { offers } from './mocks/offers';
import ErrorMessage from './components/error-message/error-message';
import { reviews } from './mocks/reviews';
import { store } from './store';
import { fetchOffersAction, checkAuthAction } from './api-actions/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        offers={offers}
        reviews={reviews}
      />
    </Provider>
  </React.StrictMode>
);
