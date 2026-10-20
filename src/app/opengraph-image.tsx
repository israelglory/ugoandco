import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse cannot read CSS variables, so the brand tokens are repeated here.
const ivory = "#faf7f0";
const ink = "#12110f";
const gold = "#b8913f";
const goldText = "#806128";
const muted = "#5a554c";

/** Cached so the image is prerendered at build time and needs no files at runtime. */
async function loadAssets() {
  "use cache";
  cacheLife("max");
  const read = (path: string) => readFile(join(process.cwd(), "src/assets", path));
  const [serif, serifItalic, sans, monogram] = await Promise.all([
    read("og/cormorant-garamond-500-normal.ttf"),
    read("og/cormorant-garamond-400-italic.ttf"),
    read("og/jost-500-normal.ttf"),
    read("monogram.png"),
  ]);
  return {
    serif: new Uint8Array(serif),
    serifItalic: new Uint8Array(serifItalic),
    sans: new Uint8Array(sans),
    monogram: `data:image/png;base64,${monogram.toString("base64")}`,
  };
}

export default async function OpengraphImage() {
  const { serif, serifItalic, sans, monogram } = await loadAssets();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: ivory,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          right: -170,
          top: -210,
          borderRadius: 9999,
          border: `1px solid ${gold}`,
          display: "flex",
        }}
      />
      {}
      <img src={monogram} width={150} height={149} alt="" />
      <div
        style={{
          marginTop: 30,
          fontFamily: "Cormorant",
          fontSize: 96,
          letterSpacing: "0.06em",
          color: ink,
        }}
      >
        {site.name}
      </div>
      <div style={{ width: 72, height: 1, background: gold, marginTop: 22 }} />
      <div style={{ marginTop: 24, fontFamily: "Cormorant Italic", fontSize: 40, color: goldText }}>{site.tagline}</div>
      <div
        style={{
          marginTop: 30,
          fontFamily: "Jost",
          fontSize: 16,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: muted,
        }}
      >
        {site.footer.areasLine}
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Cormorant", data: serif.buffer, weight: 500, style: "normal" },
        { name: "Cormorant Italic", data: serifItalic.buffer, weight: 400, style: "italic" },
        { name: "Jost", data: sans.buffer, weight: 500, style: "normal" },
      ],
    },
  );
}
