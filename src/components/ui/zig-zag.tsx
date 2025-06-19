// ZigzagParticles.tsx
import React from "react";

const ZigzagParticles = () => {
  const ribbons = Array.from({ length: 10 });

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {ribbons.map((_, i) => (
        <div key={i} className={`ribbon ribbon-${i}`} />
      ))}
    </div>
  );
};

export default ZigzagParticles;
