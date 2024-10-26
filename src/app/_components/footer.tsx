import Link from "next/link";
import Container from "./container";

export function Footer() {
  return (
    <Container>
      <footer className="mx-auto w-full py-6 lg:py-8 bg-white">
        <div className="flex justify-between mb-1">
          <Link href="/" className="flex items-center h-full my-auto">
            <img
              src="/assets/logofamilia.png"
              className="h-10 me-3"
              alt="FlowBite Logo"
            />
          </Link>

          <div className="flex h-full my-auto">
            <Link href="https://www.facebook.com/mczfestas">
              <span className="sr-only">Facebook</span>
              <img src="/assets/facebook.svg" alt="Facebook" className="h-7" />
            </Link>
            <Link href="https://www.instagram.com/mczfestas">
              <span className="sr-only">Instagram</span>
              <img
                src="/assets/instagram.svg"
                alt="Instagram"
                className="h-7"
              />
            </Link>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024
            <Link href="/" className="hover:underline">
              MczFestas™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </Container>
  );
}

export default Footer;
