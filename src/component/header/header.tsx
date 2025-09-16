"use client";

import DesktopMenu from "./desktopMenu";
import MobileMenu from "@/src/component/header/mobileMenu";
import { useWidthScreen } from "@/src/hook/hook";
import Image from "next/image";
import logo from "@/public/logo.png";

export default function Header() {
  const screenWidth = useWidthScreen();
  return (
    <div className="grid grid-cols-3 min-w-screen mt-10 z-999">
      <div id="logo" className="w-30 ml-5 sm:ml-[10vw] animate-fade-up">
        <Image alt="Logo de la crêche" src={logo} width={648} height={610} />
      </div>
      <div id="menu" className="animate-fade-up">
        {screenWidth > 1000 ? (
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
