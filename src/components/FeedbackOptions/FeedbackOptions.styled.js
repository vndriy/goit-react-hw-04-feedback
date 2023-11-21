import styled from 'styled-components';

const bgColor = p => {
  switch (p.options) {
    case 'Good':
      return 'white';
    case 'Neutral':
      return 'black';
    case 'Bad':
      return 'green';
    default:
      return 'orange';
  }
};

export const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: ${bgColor};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
