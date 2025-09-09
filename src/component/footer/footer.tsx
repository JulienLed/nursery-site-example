import { Card, CardContent } from "@/components/ui/card";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <Card className="min-w-screen bg-gradient-to-t from-sky-950 to-sky-400">
      <CardContent className="grid grid-cols-[15vw_70vw_15vw] items-center text-[0.8rem] text-white font-semibold">
        <section id="logo">
          <Image
            alt="Logo crêche"
            src={logo}
            width={648}
            height={610}
            className="w-30"
          />
        </section>
        <section id="legals" className="justify-self-center">
          <p>
            La crêche de Wavre -{" "}
            <span>
              <Link href={"/legals"}>Politique de confidentialité</Link>
            </span>
          </p>
        </section>
        <section id="contact" className="flex flex-col gap-2">
          <p>Crêche de Wavre</p>
          <a
            href="https://www.google.com/maps/search/+Rue+des+Landeaux,+12+%C3%A0+1300+Wavre"
            target="_blank"
          >
            Rue des Landeaux, 12 à 1300 Wavre
          </a>
          <a href="tel:+32010861245">Tel: 010/86.12.45</a>
          <a href="mailto:info@crechewavre.be">Mail: info@crechewavre.be</a>
        </section>
      </CardContent>
    </Card>
  );
}
