import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-16">
      <Container>
        <div className="flex flex-col gap-12">
          <div className="h-0 border-t-2 border-white" />

          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <Logo />
            <div className="hidden h-10 w-px bg-white sm:block" />
            <p className="max-w-xs text-sm text-white">
              AI engineering capacity through verified talent, teams, and
              expert evaluation
            </p>
          </div>

          <div className="flex flex-col flex-wrap gap-10 sm:flex-row sm:items-start">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-wider text-lime-200">
                Address
              </p>
              <div className="flex flex-col gap-6 sm:flex-row">
                <p className="w-48 text-sm text-white">
                  First Floor, 57 Greek Street
                  <br />
                  London
                  <br />
                  W1D 3DX
                </p>
                <p className="w-48 text-sm text-white">
                  651 N Broad St
                  <br />
                  Suite 206 Middleton, Delaware
                  <br />
                  19709
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-wider text-lime-200">
                Contact
              </p>
              <p className="w-48 text-sm text-white">
                info@hirebolt.com
                <br />
                +447404165080
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium uppercase tracking-widest text-lime-200">
                Social
              </p>
              <Link
                href="https://linkedin.com"
                className="text-white transition-colors hover:text-lime-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
