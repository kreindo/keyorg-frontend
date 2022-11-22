import Link from 'next/link';
import Image from 'next/image';
const Nav = () => {
  return (
    <nav className="flex w-full flex-wrap items-center justify-between bg-[#91998b] py-4 px-4 text-lg text-white md:py-0">
      <div>
        <Link href="/" passHref>
          {/* eslint-disable @next/next/no-img-element */}
          <Image
            className="m-3"
            src="https://github.com/kreindo.png"
            width={50}
            height={50}
            alt="Strapi Logo"
          />
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="block h-6 w-6 cursor-pointer md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>

      <div
        className="hidden w-full md:flex md:w-auto md:items-center"
        id="menu"
      >
        <ul
          className="
              space-x-2
              pt-4 text-base
              text-gray-700
              md:flex 
              md:justify-between md:pt-0"
        >
          <li>
            <Link
              className="block py-2 text-white hover:text-purple-400 md:p-2"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="block py-2 text-white hover:text-purple-400 md:p-2"
              href="/status"
            >
              Status
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
