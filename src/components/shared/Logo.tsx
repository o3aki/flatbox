"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/bxLogo.svg"
        alt="logo"
        className="hidden cursor-pointer mx-4 sm:block"
        width={100}
        height={90}
      />
    </Link>
  );
};

export default Logo;
