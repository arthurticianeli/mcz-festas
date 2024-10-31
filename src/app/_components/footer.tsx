import Link from "next/link";

export function Footer() {
  return (
    <footer className=" py-6 lg:py-8 w-fit mx-auto">
      <div className="flex w-fit mx-auto bg-white">
        <Link href="https://www.facebook.com/mczfestas">
          <span className="sr-only">Facebook</span>
          <img src="/assets/facebook.svg" alt="Facebook" className="h-7" />
        </Link>
        <Link href="https://www.instagram.com/mczfestas">
          <span className="sr-only">Instagram</span>
          <img src="/assets/instagram.svg" alt="Instagram" className="h-7" />
        </Link>
      </div>

      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 bg-white">
        © 2024
        <Link href="/" className="hover:underline">
          MczFestas™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
