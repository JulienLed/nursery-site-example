import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { menu } from "../../data/data";
import Link from "next/link";

const fetchMenu = async () => {
  const response = await fetch(
    `${process.env.API_STRAPI}/api/menus?populate=*`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY_STRAPI}`,
      },
      cache: "no-store",
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse.data;
};

export default async function DesktopMenu() {
  const data = await fetchMenu();
  return (
    <NavigationMenu viewport={false} className="!font-fredoka">
      <NavigationMenuList className="flex justify-evenly gap-[3vw]">
        {data.map(
          (item: {
            Titre: string;
            Path: string;
            ImageProject: {
              height: number;
              width: number;
              url: string;
            };
            Member: {
              Name: string;
              Role: string;
              ImageProject: {
                height: number;
                width: number;
                url: string;
              };
              Description: string;
              FunFact: string;
            };
            Projet: {
              Titre: string;
              Description: string;
              Details: string[];
              ImageProject: {
                height: number;
                width: number;
                url: string;
              };
              Slug: string;
            };
            Service: {
              Titre: string;
              Slug: string;
              Description: string;
              ImageProject: {
                height: number;
                width: number;
                url: string;
              };
            };
            Tarif: {
              jour: number;
              price: number;
            };
          }) => {
            return (
              <NavigationMenuItem key={item.Titre} className="!shadow-xl">
                {item.Projet && item.Service ? (
                  <>
                    <NavigationMenuTrigger className="!transition-all !duration-200 hover:!text-chart-4">
                      <NavigationMenuLink
                        asChild
                        className="hover:!bg-transparent"
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
                      {item.content.map((subItem) => (
                        <NavigationMenuLink
                          key={subItem.title}
                          asChild
                          className="text-md"
                        >
                          <Link
                            href={subItem.path}
                            className="hover:!text-chart-4"
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
                      className="!text-lg hover:!text-chart-4"
                      href={item.Path}
                    >
                      {item.Titre}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            );
          }
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
