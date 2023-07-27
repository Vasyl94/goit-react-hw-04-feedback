import PropTypes from 'prop-types';
import React from 'react';
import { AllButtons } from './feedback.styled';

const FeedbackOptions = ({  options,onLeaveFeedback }) => {
  return (
    <div>
      <AllButtons>
        {options.map(option => (
          <button
            type="button"
            onClick={onLeaveFeedback}
            key={option}
            name={option}
          >
            {option}
          </button>
        ))}
      </AllButtons>


    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  // options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default FeedbackOptions;
