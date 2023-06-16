"use client";

import { SafeUser } from "@/app/types";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useUpgradeModal from "@/app/hooks/useUpgradeModal";
import { signOut } from "next-auth/react";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const upgradeModal = useUpgradeModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const handleUpgrade = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    upgradeModal.onOpen();
  }, [currentUser, loginModal]);

  if (!currentUser) {
    return (
      <div className="relative">
        <div className="flex flex-row items-center gap-3">
          <div
            onClick={handleUpgrade}
            className="
                      hidden
                      md:block
                      text-sm
                      font-semibold
                      py-3
                      px-4
                      rounded-full
                      hover:bg-neutral-100
                      transition
                      cursor-pointer
                  "
          >
            Upgrade to Plus
          </div>
          <div
            onClick={registerModal.onOpen}
            className="
                      hidden
                      md:block
                      text-sm
                      md:text-md
                      font-semibold
                      py-3
                      px-4
                      rounded-full
                      text-white
                      bg-blue-400
                      hover:bg-blue-500 
                      transition
                      cursor-pointer
                  "
          >
            Sign up
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={handleUpgrade}
          className="
                    hidden
                    md:block
                    text-sm
                    font-semibold
                    py-3
                    px-4
                    rounded-full
                    hover:bg-neutral-100
                    transition
                    cursor-pointer
                "
        >
          Upgrade to Plus
        </div>
        <div
          onClick={toggleOpen}
          className="
                p-4
                md:py-1
                md:px-2
                border-[1px]
                border-neutral-200
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition
            "
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
          "
        >
          <div className="flex z-10 flex-col cursor-pointer">
            {currentUser ? (
              <>
                <div
                  className="
                  px-4
                  py-3
                  "
                >
                  Signed in as{" "}
                  <div className="font-semibold">{currentUser.name}</div>
                </div>
                <hr />
                <MenuItem label="Your profile" onClick={() => {}} />
                <MenuItem label="Your templates" onClick={() => {}} />
                <MenuItem label="Your schedules" onClick={() => {}} />
                <hr />
                <MenuItem label="Features" onClick={() => {}} />
                <MenuItem label="Upgrade to Plus" onClick={() => {}} />
                <hr />
                <MenuItem label="Sign out" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Log in" />
                <MenuItem onClick={registerModal.onOpen} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
