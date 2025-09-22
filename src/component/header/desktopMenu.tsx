import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menu } from "../data/data";
import Link from "next/link";

export default function DesktopMenu() {
  return (
    <NavigationMenu viewport={false} className="!font-fredoka">
      <NavigationMenuList className="flex justify-evenly gap-[3vw]">
        {menu.map((item) => {
          return (
            <NavigationMenuItem key={item.title} className="!shadow-xl">
              {item.content ? (
                <>
                  <NavigationMenuTrigger className="!transition-all !duration-200 hover:!text-popover">
                    <NavigationMenuLink
                      asChild
                      className="hover:!bg-transparent"
                    >
                      <Link
                        className="!text-lg hover:!text-popover"
                        href={item.path}
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-60 !shadow-xl !border-0">
                    {item.content.map((subItem) => (
                      <NavigationMenuLink
                        key={subItem.title}
                        asChild
                        className="text-md"
                      >
                        <Link
                          href={subItem.path}
                          className="hover:!text-popover"
                        >
                          {subItem.title}
                        </Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} !transition-all !duration-200`}
                >
                  <Link
                    className="!text-lg hover:!text-popover"
                    href={item.path}
                  >
                    {item.title}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
