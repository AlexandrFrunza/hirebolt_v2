import {
  ogImageContentType,
  ogImageSize,
  renderOgImage,
} from "@/lib/ogImage";

export const dynamic = "force-static";
export const alt = "Hire AI Talent — Hirebolt";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage(
    "AI engineering capacity. Made simple.",
    "Search a global network of verified engineers, AI-augmented teams, and expert evaluators."
  );
}
