export default function WavyDivider() {
  return (
    <svg viewBox="0 0 1200 150" preserveAspectRatio="none" className="w-full h-32">
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
        </filter>
      </defs>
      <path
        d="M0,75 Q150,30 300,75 T600,75 T900,75 T1200,75 L1200,150 L0,150 Z"
        fill="currentColor"
        filter="url(#shadow)"
      />
      <path
        d="M0,85 Q200,50 400,85 T800,85 T1200,85 L1200,150 L0,150 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}
