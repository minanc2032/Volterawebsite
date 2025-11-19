export default function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M 25 15 A 35 35 0 0 1 70 25 L 55 35 A 25 25 0 0 0 30 25 Z"
        fill="#c5ed6f"
      />

      <path
        d="M 75 85 A 35 35 0 0 1 30 75 L 45 65 A 25 25 0 0 0 70 75 Z"
        fill="#c5ed6f"
      />

      <path
        d="M 42 30 L 52 30 L 42 50 L 48 50 L 32 70 L 40 52 L 34 52 Z"
        fill="#c5ed6f"
      />
    </svg>
  );
}
