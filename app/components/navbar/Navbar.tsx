"use client";

import Container from "../Container";
import Logo from "./Logo";
import NavbarMenu from "./NavbarMenu";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className="fixed w-full bg-white ">
      <div
        className="
                py-4
                border-b-[1px]
                "
      >
        <Container>
          <div
            className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    "
          >
            <Logo />
            <NavbarMenu />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
