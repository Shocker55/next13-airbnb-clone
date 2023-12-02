"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { signOut, useSession } from "next-auth/react";

import useRegisterModal from "@/app/_common/hooks/useRegisterModal";
import useLoginModal from "@/app/_common/hooks/useLoginModal";
import useRentModal from "@/app/_common/hooks/useRentModal";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";

const UserMenu = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!session) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [session, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 md:block"
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className="hove:shadow-md flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={session?.user?.image} />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            {session ? (
              <>
                <MenuItem onClick={() => router.push("/trips")} label="My trips" />
                <MenuItem onClick={() => router.push("/favorites")} label="My favorites" />
                <MenuItem onClick={() => router.push("/reservations")} label="My reservations" />
                <MenuItem onClick={() => router.push("/properties")} label="My properties" />
                <MenuItem onClick={rentModal.onOpen} label="Airbnb my home" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
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
