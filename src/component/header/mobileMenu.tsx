"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { useState } from "react";
import { Data } from "@/src/data/dataType";
import { useMenus } from "@/src/hook/hook";
import { baseURL } from "@/src/hook/hook";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { data } = useMenus();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button name="menu-button" variant={"outline"} className="!border-none">
          <IoMenu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent className="!border-none">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <Accordion type="single" collapsible className="mt-20">
          {data.map((item: Data) => (
            <AccordionItem
              key={item.Titre}
              value={item.Titre}
              className="px-3 py-5 !text-lg font-medium !border-none"
            >
              {(item.projets && item.projets.length > 0) ||
              (item.services && item.services.length > 0) ? (
                <>
                  <AccordionTrigger className="text-lg font-medium !py-1">
                    {item.Titre}
                  </AccordionTrigger>
                  <AccordionContent aria-description={item.Titre}>
                    {item.projets &&
                      item.projets.map((projet) => (
                        <div key={projet.Slug} className="p-2">
                          <Link
                            href={`${baseURL}/projet-pedagogique/${projet.Slug}`}
                            onClick={() => setOpen(false)}
                          >
                            {projet.Titre}
                          </Link>
                        </div>
                      ))}
                    {item.services &&
                      item.services.map((service) => (
                        <div key={service.Slug} className="p-2">
                          <Link
                            href={`${baseURL}/services/${service.Slug}`}
                            onClick={() => setOpen(false)}
                          >
                            {service.Titre}
                          </Link>
                        </div>
                      ))}
                  </AccordionContent>
                </>
              ) : (
                <Link href={item.Path} onClick={() => setOpen(false)}>
                  {item.Titre}
                </Link>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
