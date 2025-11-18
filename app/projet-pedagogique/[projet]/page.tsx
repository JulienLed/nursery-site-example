"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { Suspense, use } from "react";
import { useProjects } from "@/src/hook/hook";
import Loader from "@/src/component/loader";

type Projet = {
  Slug: string;
  Titre: string;
  Description: string;
  ImageProject: { url: string; width: number; height: number }[];
  Details: string[];
};

export default function Page({
  params,
}: {
  params: Promise<{ projet: string }>;
}) {
  const { data } = useProjects();

  const projets: Projet[] = (data as unknown as Projet[]) || [];

  const slug = use(params).projet;

  const projet = projets.find((p) => p.Slug === slug);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
          <CardHeader>
            <CardTitle className="font-fredoka text-2xl text-chart-4">
              {projet?.Titre}
            </CardTitle>
            <CardDescription className="text-xl text-chart-4">
              {projet?.Description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Card className="!bg-popover !border-none">
              <CardContent className="grid grid-cols-1">
                <div className="w-[30vw] min-w-[250px] justify-self-center py-5">
                  {projet?.ImageProject[0].url && (
                    <Image
                      alt={projet?.Titre + " Image"}
                      src={`https://crechedewavre.duckdns.org${projet?.ImageProject[0].url}`}
                      width={projet?.ImageProject[0].width}
                      height={projet?.ImageProject[0].height}
                      className="rounded-2xl"
                      priority
                    />
                  )}
                </div>
                <ul className="list-disc sm:px-10 py-5">
                  {projet?.Details.map((detail, index) => (
                    <li key={index}>
                      <h2>{detail}</h2>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Suspense>
    </div>
  );
}
