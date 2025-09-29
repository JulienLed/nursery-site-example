export type Data = {
  id: number;
  Titre: string;
  Path: string;
  Image: {
    height: number;
    width: number;
    url: string;
  }[];
  Member: {
    Name: string;
    Role: string;
    Image: {
      height: number;
      width: number;
      url: string;
    }[];
    Description: string;
    FunFact: string;
  };
  projets: {
    id: number;
    Titre: string;
    Description: string;
    Details: string[];
    ImageProjet: {
      height: number;
      width: number;
      url: string;
    }[];
    Slug: string;
  }[];
  services: {
    id: number;
    Titre: string;
    Slug: string;
    Description: string;
    ImageProject: {
      height: number;
      width: number;
      url: string;
    };
  }[];
  Tarif: {
    jour: number;
    price: number;
  };
};
