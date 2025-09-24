"use client";

import DesktopMenu from "./desktopMenu";
import MobileMenu from "@/src/component/header/mobileMenu";
import { useWidthScreen } from "@/src/hook/hook";
import Image from "next/image";
import logo from "@/public/logo-creche.png";
import Link from "next/link";

export default function Header() {
  const screenWidth = useWidthScreen();
  return (
    <div className="grid grid-cols-3 items-center min-w-screen mt-10 z-50">
      {screenWidth > 1000 ? (
        <div className="col-span-3 grid grid-cols-3 items-center">
          <div
            id="logo"
            className="w-35 ml-5 sm:ml-[10vw] animate-fade-up col-span-1"
          >
            <Link href={"/"}>
              <Image
                alt="Logo de la crêche"
                src={logo}
                width={648}
                height={610}
              />
            </Link>
          </div>
          <div className="col-span-2">
            <DesktopMenu />
          </div>
        </div>
      ) : (
        <div className="col-span-3 grid grid-cols-3 items-center">
          <div id="logo" className="w-20 ml-10 animate-fade-up col-span-1">
            <Link href={"/"}>
              <Image
                alt="Logo de la crêche"
                src={logo}
                width={648}
                height={610}
              />
            </Link>
          </div>
          <div className="col-start-2 col-span-1 flex justify-center">
            <MobileMenu />
          </div>
        </div>
      )}
    </div>
  );
}
