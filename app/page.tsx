import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import { menu } from "@/src/component/data/data";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import NurseryMap from "@/src/component/map/nurseryMap";

export default function Page() {
  return (
    <Card className="max-w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-amber-300 !border-none !shadow-2xl">
      <CardHeader>
        <CardTitle className="font-fredoka text-2xl">
          La crêche de Wavre
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Card className="animate-fade-left delay-500 bg-amber-500 !border-none !shadow-2xl">
          <CardHeader>
            <CardTitle className="font-fredoka text-xl">Présentation</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-10">
            <section id="presentation" className="flex flex-col gap-5">
              <p>
                La Crèche de Wavre accueille les tout-petits dans un
                environnement chaleureux, sécurisé et éducatif. Notre équipe de
                professionnels accompagne chaque enfant dans son développement,
                avec une attention particulière au bien-être, à l'autonomie et à
                la découverte.
              </p>

              <p>Située au cœur de Wavre, la crèche propose :</p>
              <ul className="list-disc ml-5">
                <li>Des espaces adaptés et sécurisés.</li>
                <li>Des activités ludiques et pédagogiques.</li>
                <li>Une alimentation équilibrée et saine.</li>
                <li>Un suivi personnalisé pour chaque enfant.</li>
              </ul>
              <p>
                Notre mission : offrir un lieu où les enfants grandissent
                sereinement et où les parents ont confiance.
              </p>
            </section>
            <section
              id="pages"
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-10"
            >
              {menu.map((el) => {
                if (!el.img) return;
                return (
                  <div
                    className="flex flex-col gap-5 hover:scale-105 hover:text-accent duration-300 ease-in-out"
                    key={el.title}
                    id={el.title}
                  >
                    <Link href={el.path} className="flex flex-col text-center">
                      <p className="font-fredoka text-center text-xl whitespace-nowrap">
                        {el.title}
                      </p>

                      <Image
                        alt={el.title}
                        src={el.img.src}
                        width={el.img.width}
                        height={el.img.height}
                      />
                    </Link>
                  </div>
                );
              })}
            </section>
            <section id="map" className="flex justify-center">
              <NurseryMap />
            </section>
            <section id="contactAgain" className="font-fredoka text-xl mt-10">
              <a
                className="flex flex-col text-center sm:flex-row gap-2 items-center justify-center sm:items-center sm:justify-center hover:text-accent transition-colors duration-300 ease-in-out"
                href="mailto:info@crechewavre.be"
                target="_blank"
              >
                <IoMdMail className="text-[3rem]" /> N'hésitez pas à nous
                contacter pour plus d'informations !
              </a>
            </section>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
