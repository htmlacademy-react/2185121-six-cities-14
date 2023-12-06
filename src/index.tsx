import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux/es/exports';
import { offers } from './mocks/offers';
import ErrorMessage from './components/error-message/error-message';
import { store } from './store';
import { fetchOffersAction, checkAuthAction , fetchOffersFavoriteAction} from './api-actions/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());
store.dispatch(fetchOffersFavoriteAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        offers={offers}
      />
    </Provider>
  </React.StrictMode>
);
