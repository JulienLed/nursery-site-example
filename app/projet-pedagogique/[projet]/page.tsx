import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { menu } from "@/src/component/data/data";

export default function Page(props: { params: { projet: string } }) {
  const slug = props.params.projet;
  const projet = menu[2].content?.find(
    (el: { title: string; path: string }) => el.path.split("/").pop() === slug
  );
  if (!projet) return;
  return (
    <div>
      <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-amber-300 !border-none !shadow-2xl">
        <CardHeader>
          <CardTitle className="font-fredoka text-2xl">
            {projet.title}
          </CardTitle>
        </CardHeader>
        <CardContent>{projet.description}</CardContent>
      </Card>
    </div>
  );
}
