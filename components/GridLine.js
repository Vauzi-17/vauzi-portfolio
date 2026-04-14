export default function GridLine({ children, className }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid line */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Fade biar lebih smooth */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 50%, rgba(0,0,0,0.7) 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}