import { Component } from 'react';
import { ButtonWrapper, FeedbackWrapper } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
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
        <Section title="Please leave feedback">
          <ButtonWrapper>
            <FeedbackOptions options={'Good'} onLeaveFeedback={onGood} />
            <FeedbackOptions options={'Neutral'} onLeaveFeedback={onNeutral} />
            <FeedbackOptions options={'Bad'} onLeaveFeedback={onBad} />
          </ButtonWrapper>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyle />
      </FeedbackWrapper>
    );
  }
}
