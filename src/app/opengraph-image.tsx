import {
  ogImageContentType,
  ogImageSize,
  renderOgImage,
} from "@/lib/ogImage";

export const dynamic = "force-static";
export const alt =
  "Hirebolt — High quality human intelligence for frontier AI";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function Image() {
  return renderOgImage(
    "High quality human intelligence for frontier AI",
    "Specialist talent, AI training workflows, and engineering capacity — on demand."
  );
}
