const STROKE_WIDTH = 100;

export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <g>
        <rect x="0" y="0" width="1000" height="1000" strokeWidth="0" />
        <rect
          x={STROKE_WIDTH / 2}
          y={STROKE_WIDTH / 2}
          width={1000 - STROKE_WIDTH}
          height={1000 - STROKE_WIDTH}
          strokeWidth={STROKE_WIDTH}
          rx="180"
        />
        <line
          strokeLinecap="round"
          strokeWidth={STROKE_WIDTH}
          x1="240"
          y1="240"
          x2="760"
          y2="500"
        />
        <line
          strokeLinecap="round"
          strokeWidth={STROKE_WIDTH}
          x1="760"
          y1="500"
          x2="240"
          y2="760"
        />
      </g>
    </svg>
  );
}
