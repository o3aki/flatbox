"use client";

import BoxIcon from "@/components/shared/BoxIcon";
import MenuItem from "./MenuItem";

import { PiUserSquareFill, PiSignOut } from "react-icons/pi";
import { signOut } from "next-auth/react";
import { useContext } from "react";
import { CreateChannelModalContext } from "@/context/CreateChannelModalContext";
import { CurrentChannelContext } from "@/context/CurrentChannelContext";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  onClose: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onClose }) => {
  const createChannelModal = useContext(CreateChannelModalContext);
  const currentChannel = useContext(CurrentChannelContext);

  const router = useRouter();

  return (
    <>
      <div className="w-screen h-screen z-30" onClick={onClose} />
      <div className="absolute rounded-md shadow-md w-72 bg-zinc-800 ring-2 top-16 text-sm flex flex-col overflow-hidden z-40">
        <MenuItem
          logo={<PiUserSquareFill className="w-7 h-7 mr-4" />}
          label="Ваш канал"
          onClick={() => {
            if (!currentChannel) {
              createChannelModal?.onOpen();
            } else {
              router.push(`/channel/${currentChannel.id}`);
            }
            onClose();
          }}
        />
        <MenuItem
          logo={<BoxIcon />}
          label="Студия"
          onClick={() => {
            if (!currentChannel) {
              createChannelModal?.onOpen();
            } else {
              router.push(`/studio`);
            }
            onClose();
          }}
        />
        <MenuItem
          logo={<PiSignOut className="w-7 h-7 mr-4" />}
          label="Выйти"
          onClick={() => {
            signOut();
            onClose();
          }}
        />
      </div>
    </>
  );
};

export default UserMenu;
