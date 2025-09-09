"use client";

import DesktopMenu from "./desktopMenu";
import MobileMenu from "@/src/component/header/mobileMenu";
import { useWidthScreen } from "@/src/hook/hook";
import Image from "next/image";
import logo from "@/public/logo.png";
import { useEffect } from "react";

export default function Header() {
  const screenWidth = useWidthScreen();
  useEffect(() => console.log(screenWidth), []);
  return (
    <div className="grid grid-cols-3 min-w-screen mt-10">
      <div id="logo" className="w-30 ml-5 sm:ml-[10vw]">
        <Image alt="Logo de la crêche" src={logo} width={648} height={610} />
      </div>
      <div id="menu">
        {screenWidth > 640 ? (
          <DesktopMenu />
        ) : (
          <div className="flex justify-center">
            <MobileMenu />
          </div>
        )}
      </div>
    </div>
  );
}
