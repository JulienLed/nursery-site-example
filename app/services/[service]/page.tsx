"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader from "@/src/component/loader";
import { useServices } from "@/src/hook/hook";
import Image from "next/image";
import { Suspense, use } from "react";

interface Service {
  Titre: string;
  Slug: string;
  Description: string;
  Image: {
    url: string;
    width: number;
    height: number;
  }[];
}

export default function Page({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { data } = useServices();

  const services: Service[] = (data as unknown as Service[]) || [];

  const slug = use(params).service;

  const service = services.find((s) => s.Slug === slug);

  return (
    <Suspense fallback={<Loader />}>
      <div>
        <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
          <CardHeader>
            <CardTitle className="font-fredoka text-2xl text-chart-4">
              {service?.Titre}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Card className="!bg-popover !border-none !shadow-2xl">
              <CardContent className="grid grid-cols-1">
                <div className="w-[30vw] min-w-[250px] justify-self-center py-5">
                  {service?.Image[0].url && (
                    <Image
                      alt={service?.Titre + " Image"}
                      src={`https://crechedewavre.duckdns.org${service?.Image[0].url}`}
                      width={service?.Image[0].width}
                      height={service?.Image[0].height}
                      className="rounded-2xl"
                    />
                  )}
                </div>
                <p className="sm:px-10 py-5">{service?.Description}</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </Suspense>
  );
}
