"use client";

import { MdMenu } from "react-icons/md";
import IconButton from "../IconButton";
import Logo from "../Logo";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";

const NavigationHeader = () => {
  const sidebar = useContext(SidebarContext);

  return (
    <div className="flex flex-row items-center">
      <IconButton
        onClick={() => (sidebar?.isOpen ? sidebar.onClose() : sidebar?.onOpen)}
      >
        <MdMenu className="w-6 h-6" />
      </IconButton>
      <Logo />
    </div>
  );
};

export default NavigationHeader;
