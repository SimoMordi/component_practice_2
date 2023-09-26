import { useState } from "react";
import './index.css'

const RateReview = () => {
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const setRatingValue = (value) => {
    if (!isSubmitted) setRating(value);
  };

  const submitReview = () => {
    setIsSubmitted(true);
  };

  const addStars = () => {
    return [1, 2, 3, 4, 5].map((star) => (

      <span
         key={star}
        onClick={() => setRatingValue(star)}
        className={star <= rating ? "star" : ""}        
      >☆</span>
    ));
  };

  return (
    <div>
      <div >{addStars()}</div>
      <button onClick={submitReview} disabled={isSubmitted}>Submit</button>
      {isSubmitted && <div>Thank you for feedback!</div>}
    </div>
  );
};

export default RateReview;
