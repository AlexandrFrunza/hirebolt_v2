import Image from "next/image";

export default function TestimonialCard({
  quote,
  body,
  role,
  company,
}: {
  quote: string;
  body: string;
  role: string;
  company: string;
}) {
  return (
    <div className="flex flex-1 basis-96 gap-6">
      <Image
        src="/home/quotes.svg"
        alt=""
        width={48}
        height={48}
        className="h-12 w-12 shrink-0"
      />
      <div className="flex flex-1 flex-col justify-between gap-6">
        <div className="flex flex-col gap-3">
          <p className="text-2xl font-medium text-white">{quote}</p>
          <p className="text-sm leading-6 font-medium text-zinc-400 sm:text-base">
            {body}
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium uppercase tracking-widest text-lime-200">
            {role}
          </p>
          <p className="text-sm leading-5 text-white sm:text-zinc-400">
            {company}
          </p>
        </div>
      </div>
    </div>
  );
}
