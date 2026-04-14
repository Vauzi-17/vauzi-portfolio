export default function DotPattern({ children, className }) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "24px 24px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Fade biar lebih halus (opsional tapi penting biar ga kasar) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
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