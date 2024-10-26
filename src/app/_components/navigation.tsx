import Link from "next/link";
import MenuMobile from "./MenuMobile";

const navigation = [
  { name: "Contato", href: "https://www.instagram.com/maceioparafamilia/" },
  { name: "Fornecedor", href: "#" },
];

export default function Navigation() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Mcz Festas</span>
            <img src="/assets/logo.png" alt="Logo" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <MenuMobile navigation={navigation} />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className=" text-sm leading-6 hidden lg:flex lg:flex-1 lg:justify-end ">
          Fornecedor?&nbsp;
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 text-gray-900 hover:underline"
          >
            Entrar <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
