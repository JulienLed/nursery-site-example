"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { menu } from "@/src/data/data";
import { Button } from "@/components/ui/button";

export default function Page() {
  const tarifsArr = menu[4].tarifs;
  const [value, setValue] = useState(0);
  const [price, setPrice] = useState(0);
  const handleValidate = () =>
    setPrice(() => {
      if (value === 1) return 90;
      let tarif = tarifsArr?.find((tarif) => tarif.jour === value);
      if (!tarif) return 0;
      return tarif.price;
    });
  return (
    <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
      <CardHeader>
        <CardTitle className="font-fredoka text-chart-4 text-center text-3xl pb-5">
          Nos Tarifs
        </CardTitle>
        <CardDescription className="text-chart-4 text-xl text-justify pb-5">
          Nous facturons 90€ par journée. Découvrez votre prix en complétant les
          informations ci-dessous :
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Card className="flex flex-col items-center animate-fade-left delay-500 bg-popover !border-none !shadow-2xl">
          <div className="flex flex-col items-center gap-5 w-[60vw] sm:w-[50vw]">
            <Label htmlFor="days" className="text-xl whitespace-nowrap">
              Le nombre de jours par semaine :
            </Label>
            <Input
              id="days"
              type="number"
              min={1}
              max={5}
              onChange={(e) => setValue(Number(e.target.value))}
              onKeyDown={(e) => e.key === "Enter" && handleValidate()}
              onBlur={() => handleValidate()}
              placeholder="Chiffre entre 1 et 5"
              className="w-[10vw] min-w-[100px] border-amber-800 bg-amber-800 hover:bg-accent/80 text-chart-4 text-center transition-all duration-200 ease-in"
            />
            <Button
              onClick={() => handleValidate()}
              className="w-fit hover:scale-110 hover:bg-accent/80 bg-accent active:translate-y-0.5 text-base font-bold rounded-2xl transition-all duration-200 ease-in-out"
            >
              Valider
            </Button>
          </div>
          <div className="flex justify-center">
            <p className="text-xl">
              {price === 90
                ? price + " € pour un seul jour."
                : price + " € par mois"}
            </p>
          </div>
        </Card>
      </CardContent>
    </Card>
  );
}
