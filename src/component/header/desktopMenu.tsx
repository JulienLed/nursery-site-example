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
                  <NavigationMenuTrigger className="!transition-all !duration-200">
                    <NavigationMenuLink
                      asChild
                      className="hover:!bg-transparent"
                    >
                      <Link className="!text-lg" href={item.path}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!w-60 !shadow-xl">
                    {item.content.map((subItem) => (
                      <NavigationMenuLink key={subItem.title} asChild>
                        <Link href={subItem.path}>{subItem.title}</Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} !transition-all !duration-200`}
                >
                  <Link className="!text-lg" href={item.path}>
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
