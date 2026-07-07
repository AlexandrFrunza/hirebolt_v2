import Image from "next/image";

export default function HireTestimonial({
  quoteIcon,
  quote,
  author,
  role,
}: {
  quoteIcon: string;
  quote: string;
  author: string;
  role: string;
}) {
  return (
    <div className="flex w-full max-w-[628px] items-start gap-6">
      <Image
        src={quoteIcon}
        alt=""
        width={48}
        height={48}
        className="mt-0.5 shrink-0 opacity-30"
      />
      <div className="flex max-w-[508px] flex-col gap-6">
        <p className="text-sm leading-6 text-white/95">{quote}</p>
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-widest text-lime-200">
            {author}
          </p>
          <p className="text-base text-white">{role}</p>
        </div>
      </div>
    </div>
  );
}
