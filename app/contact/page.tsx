import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "@/src/component/form";

export default function Page() {
  return (
    <div>
      <Card className="max-w-full w-full animate-fade-left duration-200 leading-8 sm:leading-10 !bg-accent !border-none !shadow-2xl">
        <CardHeader>
          <CardTitle className="font-fredoka text-chart-4 text-center text-3xl pb-5">
            Nous contacter
          </CardTitle>
        </CardHeader>
        <CardDescription className="text-chart-4 text-xl text-justify p-5">
          {
            "N'hésitez pas à nous contacter pour plus d'informations sur nos services !"
          }
        </CardDescription>
        <CardContent>
          <Card className="animate-fade-left delay-500 bg-popover !border-none !shadow-2xl">
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
