import chevron from '../../img/right-chevron.svg';

export function Button({ onClick, left }: ButtonProps) {
  const direction = `chevron ${left ? 'left' : 'right'}`;
  const testId = `button-${left ? 'left' : 'right'}`;

  return (
    <button onClick={onClick} data-testid={testId}>
      <img src={chevron} className={direction} alt={direction} />
    </button>
  );
}

interface ButtonProps {
  onClick(): void;
  left?: boolean;
}
