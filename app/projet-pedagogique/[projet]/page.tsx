import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { menu } from "@/src/component/data/data";
import Image from "next/image";

interface Project {
  title: string;
  path: string;
  description: string;
  details: string[];
  img: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

interface PageProps {
  params: { projet: string };
}

export default function Page({ params }: PageProps) {
  const slug = params.projet;

  const projet = (menu[2].content as Project[]).find(
    (el) => el.path.split("/").pop() === slug
  );

  if (!projet) return;
  return (
    <div>
      <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
        <CardHeader>
          <CardTitle className="font-fredoka text-2xl text-popover">
            {projet.title}
          </CardTitle>
          <CardDescription className="text-xl text-popover">
            {projet.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Card className="!bg-popover !border-none">
            <CardContent className="flex flex-col items-center">
              <Image
                alt={projet.img.alt}
                src={projet.img.src}
                width={projet.img.width}
                height={projet.img.height}
                className="w-[30vw] min-w-[300px] rounded-2xl"
              />
              {projet.details.map((detail, index) => {
                return (
                  <ul key={index}>
                    <li>
                      <h2>{detail}</h2>
                    </li>
                  </ul>
                );
              })}
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
