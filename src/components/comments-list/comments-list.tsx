import { useMemo } from 'react';
import { ReviewType } from '../../types/review';
import Review from '../review/review';

type CommentsListProps = {
  reviews: ReviewType[];
}

export default function CommentsList({ reviews }: CommentsListProps) {
  const computedComments = useMemo(() => {
    const sortedComments = reviews.sort((a: ReviewType, b: ReviewType) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

    return sortedComments.slice(0, 10);
  }, [reviews]);

  return (
    <ul className="reviews__list">
      {computedComments.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </ul>
  );
}
