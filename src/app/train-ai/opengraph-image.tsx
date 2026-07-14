import {
  ogImageContentType,
  ogImageSize,
  renderOgImage,
} from "@/lib/ogImage";

export const dynamic = "force-static";
export const alt = "Train AI — Hirebolt";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage(
    "Human intelligence for AI training and evaluation.",
    "Expert-led evaluation, benchmarks, post-training datasets, and human feedback workflows."
  );
}
