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
  mobileButtonLabel,
  mobileSecondaryLabel,
  mobileSecondaryHref = "/contact",
  showDecoration = false,
  decorationDesktopClassName = "right-[-32px] bottom-[-112px]",
}: {
  title: ReactNode;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  mobileButtonLabel?: string;
  mobileSecondaryLabel?: string;
  mobileSecondaryHref?: string;
  showDecoration?: boolean;
  decorationDesktopClassName?: string;
}) {
  const hasMobileOverride = Boolean(mobileButtonLabel);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-800 p-8 pb-[88px] outline outline-1 -outline-offset-1 outline-white/5 sm:px-12 sm:py-10">
      {showDecoration && (
        <>
          <div
            className="pointer-events-none absolute right-[-20px] bottom-[-108px] flex h-[256.038px] w-[223.723px] flex-col items-center justify-center sm:hidden"
            aria-hidden
          >
            <Image
              src="/cta-decoration-mobile.svg"
              alt=""
              width={224}
              height={257}
            />
          </div>
          <div
            className={`pointer-events-none absolute hidden sm:block ${decorationDesktopClassName}`}
            aria-hidden
          >
            <Image src="/cta-decoration.svg" alt="" width={347} height={398} />
          </div>
        </>
      )}
      <div className="relative flex flex-col gap-16 sm:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="font-display text-[32px] leading-9 font-bold">
            {title}
          </h2>
          <p className="max-w-[702px] text-base leading-6 font-medium text-[#BECAD2] sm:text-xl sm:leading-8">
            {description}
          </p>
        </div>
        {hasMobileOverride ? (
          <>
            <div className="flex flex-col items-center gap-8 sm:hidden">
              <Button href={buttonHref} className="w-[264px]">
                {mobileButtonLabel}
              </Button>
              {mobileSecondaryLabel && (
                <TextLink href={mobileSecondaryHref} className="leading-4">
                  {mobileSecondaryLabel}
                </TextLink>
              )}
            </div>
            <div className="hidden flex-wrap items-center gap-8 sm:flex">
              <Button href={buttonHref}>{buttonLabel}</Button>
              {secondaryLabel && (
                <TextLink href={secondaryHref}>{secondaryLabel}</TextLink>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-wrap items-center gap-8">
            <Button href={buttonHref}>{buttonLabel}</Button>
            {secondaryLabel && (
              <TextLink href={secondaryHref}>{secondaryLabel}</TextLink>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
