"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { Data } from "@/src/data/dataType";
import { useMenus } from "@/src/hook/hook";
import { baseURL } from "@/src/hook/hook";

export default function DesktopMenu() {
  const { data } = useMenus();

  return (
    <NavigationMenu viewport={false} className="!font-fredoka">
      <NavigationMenuList className="flex justify-evenly gap-[3vw]">
        {data.map((item: Data) => (
          <NavigationMenuItem key={item.Titre} className="!shadow-xl">
            {/* Menu avec projets */}
            {item.projets && item.projets.length > 0 ? (
              <>
                <NavigationMenuTrigger className="!transition-all !duration-200 hover:!text-chart-4">
                  <NavigationMenuLink
                    asChild
                    className="hover:!bg-transparent active:!bg-transparent focus:!bg-transparent"
                  >
                    <Link
                      className="!text-lg hover:!text-chart-4"
                      href={item.Path}
                    >
                      {item.Titre}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!w-60 !shadow-xl !border-0">
                  {item.projets.map((projet) => (
                    <NavigationMenuLink
                      key={projet.id}
                      asChild
                      className="text-md"
                    >
                      <Link
                        href={`${baseURL}/projet-pedagogique/${projet.Slug}`}
                        className="hover:!text-chart-4"
                      >
                        {projet.Titre}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </>
            ) : item.services && item.services.length > 0 ? (
              // Menu avec services
              <>
                <NavigationMenuTrigger className="!transition-all !duration-200 hover:!text-chart-4">
                  <NavigationMenuLink
                    asChild
                    className="hover:!bg-transparent active:!bg-transparent focus:!bg-transparent"
                  >
                    <Link
                      className="!text-lg hover:!text-chart-4"
                      href={item.Path}
                    >
                      {item.Titre}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="!w-60 !shadow-xl !border-0">
                  {item.services.map((service) => (
                    <NavigationMenuLink
                      key={service.id}
                      asChild
                      className="text-md"
                    >
                      <Link
                        href={`${baseURL}/services/${service.Slug}`}
                        className="hover:!text-chart-4"
                      >
                        {service.Titre}
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </>
            ) : (
              // Menu simple sans sous-items
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} !transition-all !duration-200`}
              >
                <Link className="!text-lg hover:!text-chart-4" href={item.Path}>
                  {item.Titre}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
