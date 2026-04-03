export default function WaveSeparator({ className = '', flip = false }) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`block h-full w-full ${flip ? 'rotate-180' : ''}`}
        focusable="false"
      >
        <path
          d="M0,64 C120,86 240,98 360,92 C480,86 600,62 720,56 C840,50 960,62 1080,76 C1200,90 1320,104 1440,92 L1440,120 L0,120 Z"
          fill="#1C3A94"
          opacity="0.12"
        />
        <path
          d="M0,72 C160,106 320,114 480,98 C640,82 800,40 960,44 C1120,48 1280,96 1440,88 L1440,120 L0,120 Z"
          fill="#1E7B44"
          opacity="0.10"
        />
      </svg>
    </div>
  );
}

