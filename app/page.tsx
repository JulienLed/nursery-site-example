import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import equipeLogo from "@/public/equipe.png";
import projetLogo from "@/public/projet.png";
import servicesLogo from "@/public/services.png";
import tarifLogo from "@/public/tarif.png";
import contactLogo from "@/public/contact.png";
import Image from "next/image";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-fredoka text-2xl">
          La crêche de Wavre
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Card>
          <CardHeader>
            <CardTitle className="font-fredoka text-xl">Présentation</CardTitle>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <section id="pages" className="flex justify-evenly">
              <div id="equipe">
                <Image
                  alt="image equipe"
                  src={equipeLogo}
                  width={1024}
                  height={1024}
                />
              </div>
              <div id="projet">
                <Image
                  alt="image projet"
                  src={projetLogo}
                  width={1024}
                  height={1024}
                />
              </div>
              <div id="services">
                <Image
                  alt="image services"
                  src={servicesLogo}
                  width={1024}
                  height={1024}
                />
              </div>
              <div id="tarif">
                <Image
                  alt="image tarif"
                  src={tarifLogo}
                  width={1024}
                  height={1024}
                />
              </div>
              <div id="contact">
                <Image
                  alt="image contact"
                  src={contactLogo}
                  width={1024}
                  height={1024}
                />
              </div>
            </section>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
