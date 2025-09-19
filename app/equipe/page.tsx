import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { menu } from "@/src/component/data/data";
import Image from "next/image";

export default function Page() {
  return (
    <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-amber-300 !border-none !shadow-2xl">
      <CardHeader>
        <CardTitle className="font-fredoka text-2xl">Notre Equipe</CardTitle>
        <CardDescription>
          Notre équipe est composée de professionnelles passionnées par la
          petite enfance. Chacune apporte son expérience, son énergie et sa
          sensibilité pour offrir aux enfants un environnement sécurisant,
          stimulant et bienveillant. Ensemble, nous travaillons main dans la
          main pour accompagner chaque enfant dans ses découvertes et son
          développement.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Card className="animate-fade-left delay-500 bg-amber-500 !border-none !shadow-2xl">
          <CardHeader>
            <CardTitle className="font-fredoka text-xl">
              Des professionnelles au service de vos enfants
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-left delay-500 bg-amber-500 !border-none">
            {menu[1].members?.map((member) => {
              return (
                <Card
                  key={member.name}
                  className="flex flex-col bg-amber-300 !border-none !shadow-2xl"
                >
                  <CardHeader>
                    <CardTitle className="font-fredoka text-xl justify-self-center md:justify-self-start">
                      {member.name} - {member.role}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Image
                      alt={member.name}
                      src={member.img.src}
                      width={member.img.width}
                      height={member.img.height}
                      className="w-[30vw] rounded-2xl justify-self-center"
                    ></Image>
                    <p className="leading-7 p-5">{member.description}</p>
                    <p className="leading-7 px-5">
                      <span className="font-bold">Son petit plus: </span>
                      {member.funFact}
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
