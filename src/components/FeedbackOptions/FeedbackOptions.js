import React from "react";

const FeedbackOptions = ({onFeetbackGood, onFeetbackNeutral, onFeetbackBad}) => {
  return (
    <div>
          <button type="button" onClick={onFeetbackGood}>Good</button>
          <button type="button" onClick={onFeetbackNeutral}>Neutral</button>
        <button type="button" onClick={onFeetbackBad}>Bad</button>
        </div>
  )
}

export default FeedbackOptions;