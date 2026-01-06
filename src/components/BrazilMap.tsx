const BrazilMap = ({ className = "" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 300 280"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M140 5 L180 10 L200 5 L220 15 L240 10 L260 20 L270 40 L280 60 L290 80 L295 100 L290 120 L285 140 L290 160 L285 180 L275 200 L260 215 L240 225 L220 240 L200 250 L180 255 L160 260 L140 265 L120 260 L100 255 L80 245 L60 230 L45 210 L35 190 L25 170 L20 150 L15 130 L10 110 L5 90 L10 70 L20 50 L35 35 L55 25 L75 15 L95 8 L115 5 Z"
        strokeWidth="2"
        stroke="currentColor"
        strokeLinejoin="round"
      />
      {/* State boundaries simplified */}
      <path
        d="M100 60 L130 55 L160 60 L190 55 L210 65"
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <path
        d="M80 100 L120 95 L160 100 L200 95 L230 105"
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <path
        d="M60 150 L100 145 L140 150 L180 145 L220 155"
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      <path
        d="M80 200 L120 195 L160 200 L200 195 L240 205"
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
    </svg>
  );
};

export default BrazilMap;
