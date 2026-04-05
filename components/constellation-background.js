"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";

const STARS = [
  { id: "s1", x: 8, y: 18, size: 1.2, depth: 1.3 },
  { id: "s2", x: 18, y: 30, size: 1.5, depth: 1.2 },
  { id: "s3", x: 12, y: 58, size: 1.1, depth: 0.9 },
  { id: "s4", x: 24, y: 48, size: 1.8, depth: 1.6 },
  { id: "s5", x: 33, y: 22, size: 1.4, depth: 1.2 },
  { id: "s6", x: 38, y: 68, size: 1.4, depth: 1.1 },
  { id: "s7", x: 46, y: 38, size: 1.7, depth: 1.7 },
  { id: "s8", x: 53, y: 16, size: 1.1, depth: 0.8 },
  { id: "s9", x: 57, y: 56, size: 1.5, depth: 1.4 },
  { id: "s10", x: 66, y: 28, size: 1.2, depth: 0.9 },
  { id: "s11", x: 71, y: 74, size: 1.9, depth: 1.8 },
  { id: "s12", x: 82, y: 18, size: 1.5, depth: 1.4 },
  { id: "s13", x: 88, y: 42, size: 1.2, depth: 1.1 },
  { id: "s14", x: 78, y: 58, size: 1.6, depth: 1.5 },
  { id: "s15", x: 90, y: 78, size: 1.3, depth: 1.1 },
];

const EDGES = [
  ["s1", "s2"],
  ["s2", "s4"],
  ["s2", "s5"],
  ["s3", "s4"],
  ["s4", "s7"],
  ["s4", "s6"],
  ["s5", "s7"],
  ["s5", "s8"],
  ["s6", "s9"],
  ["s7", "s9"],
  ["s7", "s10"],
  ["s8", "s10"],
  ["s9", "s11"],
  ["s10", "s12"],
  ["s10", "s14"],
  ["s11", "s14"],
  ["s11", "s15"],
  ["s12", "s13"],
  ["s13", "s14"],
  ["s14", "s15"],
];

const DUST = [
  [6, 10],
  [14, 8],
  [22, 16],
  [28, 10],
  [37, 12],
  [44, 8],
  [52, 12],
  [60, 7],
  [69, 14],
  [78, 10],
  [86, 12],
  [93, 8],
  [10, 80],
  [19, 86],
  [30, 78],
  [42, 88],
  [51, 80],
  [63, 86],
  [74, 82],
  [84, 88],
];

const INITIAL_POINTER = { x: 58, y: 32, active: false };

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function transformStar(star, pointer) {
  const normalizedX = (pointer.x - 50) / 50;
  const normalizedY = (pointer.y - 50) / 50;
  const driftX = normalizedX * star.depth * 2.8;
  const driftY = normalizedY * star.depth * 2.1;
  const distanceToPointer = Math.hypot(pointer.x - star.x, pointer.y - star.y);
  const attraction = Math.max(0, 1 - distanceToPointer / 26);

  return {
    ...star,
    px: star.x + driftX - (pointer.x - star.x) * attraction * 0.04,
    py: star.y + driftY - (pointer.y - star.y) * attraction * 0.04,
    glow: 0.3 + attraction * 0.7 + (pointer.active ? 0.1 : 0),
  };
}

export default function ConstellationBackground() {
  const pointerRef = useRef(INITIAL_POINTER);
  const frameRef = useRef(null);
  const [pointer, setPointer] = useState(INITIAL_POINTER);

  const flushPointer = useEffectEvent(() => {
    frameRef.current = null;
    setPointer({ ...pointerRef.current });
  });

  const queuePointer = useEffectEvent((nextPointer) => {
    pointerRef.current = nextPointer;

    if (!frameRef.current) {
      frameRef.current = window.requestAnimationFrame(() => {
        flushPointer();
      });
    }
  });

  useEffect(() => {
    const handlePointerMove = (event) => {
      queuePointer({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
        active: true,
      });
    };

    const resetPointer = () => {
      queuePointer(INITIAL_POINTER);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", resetPointer);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", resetPointer);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [queuePointer]);

  const transformedStars = STARS.map((star) => transformStar(star, pointer));
  const starLookup = Object.fromEntries(
    transformedStars.map((star) => [star.id, star]),
  );

  return (
    <div className="background-layer background-constellation" aria-hidden="true">
      <svg
        className="constellation-field"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="constellation-line-gradient"
            x1="6"
            y1="10"
            x2="94"
            y2="82"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#d66e49" />
            <stop offset="50%" stopColor="#8aa8b6" />
            <stop offset="100%" stopColor="#3c6073" />
          </linearGradient>
          <radialGradient id="constellation-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 247, 239, 0.95)" />
            <stop offset="35%" stopColor="rgba(140, 184, 206, 0.45)" />
            <stop offset="100%" stopColor="rgba(255, 247, 239, 0)" />
          </radialGradient>
        </defs>

        <circle
          className="constellation-cursor"
          cx={pointer.x}
          cy={pointer.y}
          r={pointer.active ? 17 : 11}
        />

        {DUST.map(([x, y], index) => (
          <circle
            key={`dust-${index}`}
            className="constellation-dust"
            cx={x}
            cy={y}
            r={index % 3 === 0 ? 0.26 : 0.18}
          />
        ))}

        {EDGES.map(([fromId, toId]) => {
          const from = starLookup[fromId];
          const to = starLookup[toId];
          const midpointX = (from.px + to.px) / 2;
          const midpointY = (from.py + to.py) / 2;
          const proximity = Math.max(
            0,
            1 - Math.hypot(pointer.x - midpointX, pointer.y - midpointY) / 38,
          );

          return (
            <line
              key={`${fromId}-${toId}`}
              className="constellation-line"
              x1={from.px}
              y1={from.py}
              x2={to.px}
              y2={to.py}
              style={{
                opacity: clamp(0.16 + proximity * 0.72, 0.14, 0.88),
                strokeWidth: 0.12 + proximity * 0.24,
              }}
            />
          );
        })}

        {transformedStars.map((star) => (
          <g key={star.id}>
            <circle
              className="constellation-star-glow"
              cx={star.px}
              cy={star.py}
              r={star.size * (1.7 + star.glow * 0.7)}
              style={{ opacity: clamp(0.2 + star.glow * 0.35, 0.18, 0.62) }}
            />
            <circle
              className="constellation-star-core"
              cx={star.px}
              cy={star.py}
              r={star.size * (0.72 + star.glow * 0.18)}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
