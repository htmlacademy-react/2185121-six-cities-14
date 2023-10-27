import { Link } from 'react-router-dom';
import { AppRoute } from '../../common/const';
import { Helmet } from 'react-helmet-async';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>6 cities - Not Found</title>
      </Helmet>
      <h1>404,
        <br />
        <small>Not Found</small>
      </h1>
      <Link to={AppRoute.Main}>Go to main page.</Link>
    </>
  );
}

export default NotFoundPage;
