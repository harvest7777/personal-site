"use client";

export default function Fog() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-5"
      aria-hidden
      style={{
        background:
          "linear-gradient(to top, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 20%, transparent 60%)",
      }}
    />
  );
}
