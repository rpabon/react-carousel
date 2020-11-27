import chevron from '../../img/right-chevron.svg';

export function Button({ onClick, left }: ButtonProps) {
  const direction = `chevron ${left ? 'left' : 'right'}`;

  return (
    <button onClick={onClick}>
      <img src={chevron} className={direction} alt={direction} />
    </button>
  );
}

interface ButtonProps {
  onClick(): void;
  left?: boolean;
}
