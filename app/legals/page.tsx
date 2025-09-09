import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notre politique de Confidentialité</CardTitle>
        <CardDescription>
          Chez Crêche de Wavre, nous prenons au sérieux la protection de vos
          données personnelles lorsque vous utilisez notre site web.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>Données collectées :</strong> informations fournies
            volontairement (formulaire de contact, newsletter) et données
            techniques minimales pour le fonctionnement du site.
          </li>
          <li>
            <strong>Utilisation des données :</strong> répondre aux demandes,
            envoyer des informations demandées et assurer le bon fonctionnement
            et la sécurité du site.
          </li>
          <li>
            <strong>Partage des données :</strong> nous ne vendons ni ne
            partageons vos données à des fins commerciales. Partage uniquement
            avec nos prestataires techniques pour le fonctionnement du site.
          </li>
          <li>
            <strong>Conservation des données :</strong> le temps nécessaire à la
            finalité ou selon la législation applicable.
          </li>
          <li>
            <strong>Vos droits :</strong> accéder, corriger ou supprimer vos
            données, ou retirer votre consentement à tout moment (ex. se
            désabonner de la newsletter). Contact : contact@creche-de-wavre.be
          </li>
          <li>
            <strong>Sécurité :</strong> mesures techniques pour protéger vos
            données contre tout accès non autorisé.
          </li>
          <li>
            <strong>Modifications :</strong> la politique peut être mise à jour,
            la version la plus récente sera toujours disponible sur le site.
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
