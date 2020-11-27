export function SlideIndicator({ current, total }: SlideIndicatorProps) {
  return (
    <div className="slide-indicator" data-testid="indicator">
      {current + 1} / {total}
    </div>
  );
}

interface SlideIndicatorProps {
  current: number;
  total: number;
}
