import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header>
      <nav className="max-w-4xl mx-auto px-5 pt-8 pb-16">
        <div className="-ml-[0.7rem]">
          <Link href="/">
            <a className="px-3 py-2 relative rounded-md text-gray-400 hover:text-white hover:bg-neutral-900 transition-all">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="px-3 py-2 relative rounded-md text-gray-400 hover:text-white hover:bg-neutral-900 transition-all">
              About
            </a>
          </Link>
        </div>
        {/* TODO: theme toggler */}
      </nav>
    </header>
  );
};

export default Header;