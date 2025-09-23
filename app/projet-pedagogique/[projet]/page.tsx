"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { menu } from "@/src/data/data";
import Image from "next/image";
import { use } from "react";

interface Project {
  title: string;
  path: string;
  description: string;
  details: string[];
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export default function Page({
  params,
}: {
  params: Promise<{ projet: string }>;
}) {
  const slug = use(params).projet;

  const projet = (menu[2].content as Project[]).find(
    (el) => el.path.split("/").pop() === slug
  );

  if (!projet) return;
  return (
    <div>
      <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
        <CardHeader>
          <CardTitle className="font-fredoka text-2xl text-chart-4">
            {projet.title}
          </CardTitle>
          <CardDescription className="text-xl text-chart-4">
            {projet.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="!bg-popover !border-none">
            <CardContent className="grid grid-cols-1">
              <div className="w-[30vw] min-w-[300px] justify-self-center py-5">
                <Image
                  alt={projet.img.alt}
                  src={projet.img.src}
                  width={projet.img.width}
                  height={projet.img.height}
                  className="rounded-2xl"
                />
              </div>
              <ul className="list-disc px-10 py-5">
                {projet.details.map((detail, index) => {
                  return (
                    <li key={index}>
                      <h2>{detail}</h2>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
