import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Button = styled.button`
  padding: 12px;
  margin: 5px;
  background-color: hotpink;
  font-size: 16px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: white;
    border-color: white;
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="CounterBTN">
      {options.map(option => (
        <Button
          key={option}
          type="button"
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </div>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
