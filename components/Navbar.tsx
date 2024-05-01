import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <section className="flex justify-between bg-gradient-to-r p-4 bg-transparent fixed top-0 left-0 w-full">
      <Image src={"/images/reactLogo.svg"} alt="react" height={40} width={40} />
      {/* //!see if you need a navbar */}
      <Image src={"/images/nextLogo.svg"} alt="next" height={40} width={40} />
    </section>
  );
};

export default Navbar;
