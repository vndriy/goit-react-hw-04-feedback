import { Component } from 'react';
import { ButtonWrapper, FeedbackWrapper } from './Feedback.styled';
import { Button } from 'components/Buttons/Buttons';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  onNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  onBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let totalFeedback = this.countTotalFeedback();
    let positiveFeedback = this.state.good;
    return Math.round((positiveFeedback * 100) / totalFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const { onGood, onNeutral, onBad } = this;

    return (
      <FeedbackWrapper>
        <h1>Please leave Feedback</h1>
        <ButtonWrapper>
          <Button rating="Good" onUpdate={onGood} />
          <Button rating="Neutral" onUpdate={onNeutral} />
          <Button rating="Bad" onUpdate={onBad} />
        </ButtonWrapper>
        {this.countTotalFeedback() > 0 && (
          <>
            <h2>Statistics</h2>
            <p>Good: {good} </p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
          </>
        )}
      </FeedbackWrapper>
    );
  }
}
