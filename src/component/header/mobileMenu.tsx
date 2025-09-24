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
import { menu } from "../../data/data";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

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
          {menu.map((item) => {
            return (
              <AccordionItem
                key={item.title}
                value={item.title}
                className="px-3 py-5 !text-lg font-medium !border-none"
              >
                {item.content ? (
                  <>
                    <AccordionTrigger className="text-lg font-medium !py-1">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      {item.content.map((subTitle) => {
                        return (
                          <div key={subTitle.title} className="p-2">
                            <Link
                              href={subTitle.path}
                              onClick={() => setOpen(false)}
                            >
                              {subTitle.title}
                            </Link>
                          </div>
                        );
                      })}
                    </AccordionContent>
                  </>
                ) : (
                  <Link href={item.path} onClick={() => setOpen(false)}>
                    {item.title}
                  </Link>
                )}
              </AccordionItem>
            );
          })}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
}
