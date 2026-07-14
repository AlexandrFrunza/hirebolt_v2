import {
  ogImageContentType,
  ogImageSize,
  renderOgImage,
} from "@/lib/ogImage";

export const dynamic = "force-static";
export const alt = "Build AI — Hirebolt";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage(
    "Turn AI models into working products.",
    "Vetted AI engineers handling model selection, integration, and delivery."
  );
}
