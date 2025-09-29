import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { Metadata } from "next";
import { Data } from "@/src/data/dataType";

export const metadata: Metadata = {
  title: "Page d'équipe de la crêche de Wavre",
  description: "La Page de l'équipe de la crêche de Wavre",
};

export type Member = Data["Member"];

const fetchTeam = async () => {
  const response = await fetch(`${process.env.API_STRAPI}/members?populate=*`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY_STRAPI}`,
    },
    cache: "no-store",
  });
  const json = await response.json();
  return json.data;
};

export default async function Page() {
  const data = await fetchTeam();
  return (
    <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
      <CardHeader>
        <CardTitle className="font-fredoka text-chart-4 text-center text-3xl pb-5">
          Notre Equipe
        </CardTitle>
        <CardDescription className="text-chart-4 text-xl text-justify pb-5">
          Notre équipe est composée de professionnelles passionnées par la
          petite enfance. Chacune apporte son expérience, son énergie et sa
          sensibilité pour offrir aux enfants un environnement sécurisant,
          stimulant et bienveillant. Ensemble, nous travaillons main dans la
          main pour accompagner chaque enfant dans ses découvertes et son
          développement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Card className="animate-fade-left delay-500 bg-popover !border-none !shadow-2xl">
          <CardHeader>
            <CardTitle className="font-fredoka text-xl">
              Des professionnelles au service de vos enfants
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-left delay-500 bg-popover !border-none">
            {data.map((member: Member) => {
              return (
                <Card
                  key={member.Name}
                  className="flex flex-col bg-yellow-600 border-accent !shadow-2xl"
                >
                  <CardHeader>
                    <CardTitle className="font-fredoka text-xl justify-self-center md:justify-self-start">
                      {member.Name} - {member.Role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      alt={member.Name}
                      src={member.Image[0].url}
                      width={member.Image[0].width}
                      height={member.Image[0].height}
                      className="w-[30vw] min-w-[230px] rounded-2xl justify-self-center"
                    ></Image>
                    <p className="leading-7 p-5">{member.Description}</p>
                    <p className="leading-7 px-5">
                      <span className="font-bold">Son petit plus: </span>
                      {member.FunFact}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
