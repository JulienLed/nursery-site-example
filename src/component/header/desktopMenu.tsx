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
    <NavigationMenu viewport={false}>
      <NavigationMenuList className="flex justify-evenly gap-20">
        {menu.map((item) => {
          return (
            <NavigationMenuItem key={item.title}>
              {item.content ? (
                <>
                  <NavigationMenuTrigger className="!transition-all !duration-200">
                    <NavigationMenuLink className="hover:!bg-transparent">
                      <Link className="!text-lg" href={item.path}>
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    {item.content.map((subItem) => (
                      <NavigationMenuLink key={subItem.title} asChild>
                        <Link href={subItem.path}>{subItem.title}</Link>
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink
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
