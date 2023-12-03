import { useState } from 'react';
import { ButtonWrapper, FeedbackWrapper } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedback = answer => {
    switch (answer) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let totalFeedback = countTotalFeedback();
    let positiveFeedback = good;
    return Math.round((positiveFeedback * 100) / totalFeedback);
  };

  return (
    <FeedbackWrapper>
      <Section title="Please leave feedback">
        <ButtonWrapper>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onFeedback}
          />
        </ButtonWrapper>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>

      <GlobalStyle />
    </FeedbackWrapper>
  );
};
