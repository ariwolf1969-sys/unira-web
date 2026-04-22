import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050a0e",
          borderRadius: "6px",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 900,
            color: "#10b981",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          U
        </div>
        <div
          style={{
            position: "absolute",
            top: 2,
            right: 3,
            width: 12,
            height: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" fill="#FFD700" stroke="#DAA520" strokeWidth="1" />
            <circle cx="10" cy="11" r="1" fill="#B8860B" />
            <circle cx="14" cy="11" r="1" fill="#B8860B" />
            <path d="M 10 14 Q 12 16 14 14" stroke="#B8860B" strokeWidth="1" fill="none" strokeLinecap="round" />
            {[0,45,90,135,180,225,270,315].map(a => (
              <line key={a} x1="12" y1="12" x2={12 + 7 * Math.cos(a * Math.PI / 180)} y2={12 + 7 * Math.sin(a * Math.PI / 180)} stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" />
            ))}
          </svg>
        </div>
      </div>
    ),
    { ...size }
  );
}
