import { useEffect, useState } from "react";

export default function CookieBanner({ onOpenPolicy }: { onOpenPolicy: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("sj-cookies");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("sj-cookies", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 16,
        left: 16,
        right: 16,
        zIndex: 1000,
        maxWidth: 480,
        margin: "0 auto",
        background: "#0f172a",
        border: "1px solid #334155",
        borderRadius: 12,
        padding: "16px 18px",
        color: "#e2e8f0",
        boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <p style={{ margin: "0 0 12px", fontSize: 14, lineHeight: 1.5 }}>
        We use essential cookies to run the site and remember your choices.{" "}
        <button
          onClick={onOpenPolicy}
          style={{
            background: "none",
            border: "none",
            color: "#c6a15b",
            cursor: "pointer",
            padding: 0,
            font: "inherit",
            textDecoration: "underline",
          }}
        >
          Cookie Policy
        </button>
      </p>
      <button
        onClick={accept}
        style={{
          background: "#c6a15b",
          color: "#1c140b",
          border: "none",
          borderRadius: 6,
          padding: "8px 16px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Accept
      </button>
    </div>
  );
}