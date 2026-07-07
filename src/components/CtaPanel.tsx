import { ReactNode } from "react";
import Image from "next/image";
import Button from "./Button";
import TextLink from "./TextLink";

export default function CtaPanel({
  title,
  description,
  buttonLabel = "Get started",
  buttonHref = "/contact",
  secondaryLabel,
  secondaryHref = "/contact",
  showDecoration = false,
}: {
  title: ReactNode;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  showDecoration?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-800 p-8 outline outline-1 -outline-offset-1 outline-white/5 sm:p-12">
      {showDecoration && (
        <div
          className="pointer-events-none absolute right-[-32px] bottom-[-112px] hidden sm:block"
          aria-hidden
        >
          <Image src="/cta-decoration.svg" alt="" width={347} height={398} />
        </div>
      )}
      <div className="relative flex flex-col gap-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 className="font-display text-3xl font-bold leading-9">
            {title}
          </h2>
          <p className="text-xl font-medium text-slate-300">{description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <Button href={buttonHref}>{buttonLabel}</Button>
          {secondaryLabel && (
            <TextLink href={secondaryHref}>{secondaryLabel}</TextLink>
          )}
        </div>
      </div>
    </div>
  );
}
