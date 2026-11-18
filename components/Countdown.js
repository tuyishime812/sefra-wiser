"use client";

import { useEffect, useMemo, useState } from "react";

function compute(target) {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const sec = Math.floor(diff / 1000);
  const days = Math.floor(sec / 86400);
  const hrs = Math.floor((sec % 86400) / 3600);
  const min = Math.floor((sec % 3600) / 60);
  const s = sec % 60;
  return { days, hrs, min, s };
}

export default function Countdown({ dateISO }) {
  const target = useMemo(() => new Date(dateISO).getTime(), [dateISO]);
  const [parts, setParts] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tick = () => setParts(compute(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (!mounted) {
    return <div className="countdown" aria-label="Countdown loading" />;
  }

  if (!parts) {
    return <p className="display" style={{ fontSize: "1.75rem", marginTop: "1rem" }}>Out now</p>;
  }

  const units = [
    ["Days", parts.days],
    ["Hrs", parts.hrs],
    ["Min", parts.min],
    ["Sec", parts.s],
  ];

  return (
    <div className="countdown" aria-label="Countdown to release">
      {units.map(([label, value]) => (
        <div className="unit" key={label}>
          <b>{String(value).padStart(2, "0")}</b>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
