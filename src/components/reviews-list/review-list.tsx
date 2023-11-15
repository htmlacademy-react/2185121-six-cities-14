import ReviewForm from '../review-form/review-form';
import Review from '../review/review';
import { ReviewType } from '../../types/review';
import { MAX_REVIEWS_COUNT } from '../../common/const';

type ReviewListProps = {
  reviews: ReviewType[];
}

function ReviewsList({reviews}: ReviewListProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.slice(0, MAX_REVIEWS_COUNT).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>

      < ReviewForm />

    </section>
  );
}

export default ReviewsList;
