import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 sm:py-16">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="h-0 border-t-2 border-white" />

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <Logo className="h-11 w-auto" />
            <div className="h-px w-full bg-white/10 sm:hidden" />
            <div className="hidden h-10 w-px bg-white sm:block" />
            <p className="w-full text-sm leading-5 font-normal text-white sm:hidden">
              AI engineering capacity through verified talent, teams, and
              expert evaluation
            </p>
            <p className="hidden w-[325px] max-w-full text-sm leading-[22px] font-normal text-white sm:block">
              AI engineering capacity through verified talent, teams, and
              expert evaluation
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-start sm:gap-[23px]">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-wider text-lime-200">
                Address
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <p className="text-sm leading-5 text-white sm:hidden">
                  First Floor, 57 Greek Street
                  <br />
                  London, W1D 3DX
                </p>
                <p className="hidden w-[193px] text-sm text-white sm:block">
                  First Floor, 57 Greek Street
                  <br />
                  London
                  <br />
                  W1D 3DX
                </p>
                <p className="text-sm leading-5 text-white sm:hidden">
                  651 N Broad St, Suite 206 Middleton,
                  <br />
                  Delaware, 19709
                </p>
                <p className="hidden w-[194px] text-sm text-white sm:block">
                  651 N Broad St
                  <br />
                  Suite 206 Middleton, Delaware
                  <br />
                  19709
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:w-[411px]">
              <p className="text-xs font-medium uppercase tracking-wider text-lime-200">
                Contact
              </p>
              <p className="w-48 text-sm text-white">
                info@hirebolt.com
                <br />
                +447404165080
              </p>
            </div>

            <div className="hidden sm:block sm:w-[193px]" aria-hidden />

            <div className="mt-12 flex flex-col gap-2 sm:mt-0 sm:w-[194px]">
              <p className="text-xs font-medium uppercase tracking-widest text-lime-200">
                Social
              </p>
              <Link
                href="https://www.linkedin.com/company/hireboltt"
                aria-label="LinkedIn"
              >
                <Image
                  src="/LinkedIn.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
