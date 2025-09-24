"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { menu } from "@/src/data/data";
import Image from "next/image";
import { use } from "react";

interface Service {
  title: string;
  path: string;
  description: string;
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
  params: Promise<{ service: string }>;
}) {
  const slug = use(params).service;

  const service = (menu[3].content as Service[]).find(
    (el) => el.path.split("/").pop() === slug
  );

  if (!service) return;
  return (
    <div>
      <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
        <CardHeader>
          <CardTitle className="font-fredoka text-2xl text-chart-4">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Card className="!bg-popover !border-none !shadow-2xl">
            <CardContent className="grid grid-cols-1">
              <div className="w-[30vw] min-w-[250px] justify-self-center py-5">
                <Image
                  alt={service.img.alt}
                  src={service.img.src}
                  width={service.img.width}
                  height={service.img.height}
                  className="rounded-2xl"
                />
              </div>
              <p className="sm:px-10 py-5">{service.description}</p>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
