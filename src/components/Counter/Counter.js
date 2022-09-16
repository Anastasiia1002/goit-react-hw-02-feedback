import React from 'react';
import PropTypes from 'prop-types';

import FeedbackOptions from './Controls/FeedbackOptions/FeedbackOptions';
import Statistics from './Controls/Statistics/Statistics';
import Section from './Controls/Section/Section';
import Notification from './Controls/Notification/Notification';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = el => {
    const name = el.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const result = good + neutral + bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = Math.round((good / total) * 100);

    return good ? percentage : 0;
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <div className="Counter">
          <Section title="Please leave feedback">
            <FeedbackOptions
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
        </div>
        {this.countTotalFeedback() !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </div>
    );
  }
}
Counter.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default Counter;
