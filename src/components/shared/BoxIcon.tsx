"use client";

import Image from "next/image";

const BoxIcon = () => {
  return (
    <Image
      src="/images/boxIcon.ico"
      alt="boxicon"
      width={18}
      height={18}
      className="w-7 h-7 mr-4"
    />
  );
};

export default BoxIcon;
