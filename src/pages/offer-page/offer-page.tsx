import { Helmet } from 'react-helmet-async';
import { TOfferInfo, OfferPrevType } from '../../types/offer';
import { useParams, useNavigate } from 'react-router-dom';
import { APIRoute } from '../../common/const';
import OfferDetails from '../../components/offer-details/offer-details';
import Map from '../../components/map/map';
import { MAX_NEAR_PLACES_COUNT, ERROR_STATUS_CODE } from '../../common/const';
import Card from '../../components/card/card';
import { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import { AxiosError } from 'axios';
import { api } from '../../store';
import { ReviewType, ReviewSendType } from '../../types/review';


function OfferPage() {
  const id = useParams().offerId;

  const [offer, setOffer] = useState<TOfferInfo | null>(null);
  const [offersNearby, setOffersNearby] = useState<OfferPrevType[]>([]);
  const [comments, setComments] = useState<ReviewType[]>([]);

  const navigate = useNavigate();

  const fetchComments = async() => {
    const {data} = await api.get<ReviewType[]>(`${APIRoute.Comments}/${id}`);
    setComments(data);
  };

  const fetchOffersNearby = async () => {
    const { data } = await api.get<OfferPrevType[]>(`${APIRoute.Offers}/${id}/nearby`);
    setOffersNearby(data);
  };

  const fetchOffer = async () => {
    try {
      const res = await api.get<TOfferInfo>(`${APIRoute.Offers}/${id}`);
      setOffer(res.data);
      fetchOffersNearby();
      fetchComments();
    } catch (err: unknown) {
      if (err instanceof AxiosError && err?.response?.status === ERROR_STATUS_CODE) {
        navigate('/page-not-found');
      }
    }
  };

  useEffect(() => {
    fetchOffer();
    window.scroll(0,0);
  }, [id]);

  const sendComment = (comment: ReviewSendType) => {
    (async () => {
      const {data} = await api.post<ReviewType[]>(`${APIRoute.Comments}/${id}`, comment);
      setComments(data);
    })();
  };

  // const isOffersLoading = useAppSelector((state) => state.isOffersLoading);
  //этот кусок кода нужен для добавления функционала в будущем


  if (offer?.id) {


    return (
      <div className="page">
        <Helmet>
          <title>6 cities - offer </title>
        </Helmet>
        < Header />
        <main className="page__main page__main--offer">
          <section className="offer">

            <OfferDetails
              offer={offer}
              reviews={comments}
              sendComment={sendComment}
            />

            <section className="offer__map map" >
              {offersNearby.length &&
                <Map
                  location={offersNearby[0].city.location}
                  offers={[...offersNearby.slice(0, MAX_NEAR_PLACES_COUNT), offer]}
                  block='offer'
                  specialOfferId={offer.id}
                />}
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                {offersNearby.slice(0, MAX_NEAR_PLACES_COUNT).map((nearOffer) => ( //create component
                  <Card
                    key={nearOffer.id}
                    offer={nearOffer}
                    block='near-places'
                  />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>

    );
  }
}


export default OfferPage;
