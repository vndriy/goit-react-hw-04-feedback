import { StyledButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <StyledButton onClick={onLeaveFeedback}>{options}</StyledButton>;
};
