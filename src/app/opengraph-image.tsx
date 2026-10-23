import { ImageResponse } from "next/og";

export const alt = "Shanvexa Technologies — Engineering What’s Next.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 70, background: "#f8f9f5", color: "#242a23" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 44 }}>
        <svg width="72" height="72" viewBox="0 0 40 40"><rect width="40" height="40" rx="10" fill="#c5ee82"/><path d="M8 7h24L18 20h14L8 34l12-13H8z" fill="#20271e"/></svg>
        Shanvexa Technologies
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 78, letterSpacing: -3 }}>Engineering What’s Next.</div>
        <div style={{ fontSize: 29 }}>Websites · Business systems · Mobile apps · Automation</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "2px solid #c5ee82", paddingTop: 24, fontSize: 24 }}>
        <span>Based in Uganda. Building beyond borders.</span><span>shanvexa</span>
      </div>
    </div>, size,
  );
}
