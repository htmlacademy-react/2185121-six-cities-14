import ReviewForm from '../review-form/review-form';
import { ReviewType, ReviewSendType } from '../../types/review';
import { AuthorizationStatus } from '../../common/const';
import { useAppSelector } from '../../hooks';
import CommentsList from '../comments-list/comments-list';

type ReviewListProps = {
  reviews: ReviewType[];
  sendComment:(review: ReviewSendType) => void;
}

function ReviewsList({reviews, sendComment}: ReviewListProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <CommentsList reviews={reviews}/>

      {authorizationStatus === AuthorizationStatus.Auth && < ReviewForm sendComment={sendComment} />}

    </section>
  );
}

export default ReviewsList;
