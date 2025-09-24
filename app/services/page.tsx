import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { menu } from "@/src/data/data";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page des services de la crêche de Wavre",
  description: "La Page des services de la crêche de Wavre",
};

export default function Page() {
  return (
    <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
      <CardHeader>
        <CardTitle className="font-fredoka text-2xl text-chart-4 pb-5">
          Nos Services
        </CardTitle>
        <CardDescription className="text-popover text-xl text-justify pb-5">
          Nous vous proposons différents services pour vos petits.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-left delay-500 bg-accent !border-none rounded-2xl m-5 p-10">
        {menu[3].content?.map((service) => {
          return (
            <Link
              key={service.title}
              href={service.path}
              className="hover:scale-105 rounded-2xl transition-all duration-200 ease-in-out"
            >
              <Card className="flex flex-col !border-none bg-popover hover:bg-yellow-400 !shadow-2xl transition-all duration-200 ease-in-out">
                <CardHeader>
                  <CardTitle className="font-fredoka text-xl justify-self-center md:justify-self-center">
                    {service.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            </Link>
          );
        })}
      </CardContent>
    </Card>
  );
}
