export const Button = ({ rating, onUpdate }) => {
  return <button onClick={onUpdate}>{rating}</button>;
};
