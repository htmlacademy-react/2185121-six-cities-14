import { useMemo } from 'react';
import { ReviewType } from '../../types/review';
import Review from '../review/review';
import { MAX_COMMENTS } from '../../common/const';

type CommentsListProps = {
  reviews: ReviewType[];
}

export default function CommentsList({ reviews }: CommentsListProps) {
  const computedComments = useMemo(() => {
    const sortedComments = reviews.sort((a: ReviewType, b: ReviewType) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

    return sortedComments.slice(0, MAX_COMMENTS);
  }, [reviews]);

  return (
    <ul className="reviews__list">
      {computedComments.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}
