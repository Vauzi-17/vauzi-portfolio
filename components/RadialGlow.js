export default function RadialGlow({ children, className }) {
  return (
    <div className={className} style={{ position: "relative", overflow: "hidden" }}>

      {/* Glow kiri atas */}
      <div style={{
        position: "absolute",
        top: "-100px",
        left: "-100px",
        width: "450px",
        height: "450px",
        background: "radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Glow kanan bawah */}
      <div style={{
        position: "absolute",
        bottom: "-100px",
        right: "-100px",
        width: "450px",
        height: "450px",
        background: "radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(60px)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>

    </div>
  );
}