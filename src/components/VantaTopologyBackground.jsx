import { useEffect, useRef } from "react";
import p5 from "p5";
import TOPOLOGY from "vanta/dist/vanta.topology.min";

export default function VantaTopologyBackground() {
  const vantaRef = useRef(null);
  const vantaEffectRef = useRef(null);

  useEffect(() => {
    if (!vantaEffectRef.current && vantaRef.current) {
      vantaEffectRef.current = TOPOLOGY({
        el: vantaRef.current,
        p5,

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        minHeight: 200,
        minWidth: 200,

        scale: 1.0,
        scaleMobile: 1.0,

        // ⚡ Motion tuning
        points: 14.0,
        maxDistance: 20.0,
        spacing: 12.0,
        chaos: 3.0,
        waveSpeed: 1.8,

        // 🎨 Visuals
        color: 0x502550,
        backgroundColor: 0x000000,
      });
    }

    return () => {
      if (vantaEffectRef.current) {
        vantaEffectRef.current.destroy();
        vantaEffectRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}
