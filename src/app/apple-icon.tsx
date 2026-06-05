import { ImageResponse } from "next/og";

// iOS home-screen icon: AH monogram in brand indigo on cream.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F9F7F2",
          color: "#3730A3",
          fontSize: 84,
          fontWeight: 700,
          letterSpacing: -4,
        }}
      >
        AH
      </div>
    ),
    { ...size }
  );
}
