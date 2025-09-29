"use client";

import { useState, useEffect } from "react";
import { Data } from "../data/dataType";

export const useWidthScreen = () => {
  const [screenWidth, setScreenWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenWidth;
};

export const useMenus = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/menus`);
        const resJson = await res.json();

        const sortedResJson = resJson.data.sort((a: Data, b: Data) =>
          a.Titre.localeCompare(b.Titre)
        );
        setData(sortedResJson);
      } catch (err) {
        console.error("Erreur fetch menu:", err);
      }
    };

    fetchData();
  }, []);
  return { data };
};

export const useProjects = () => {
  type Projet = Data["projets"];
  const [data, setData] = useState<Projet[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/projets`);
        const resJson = await res.json();
        setData(resJson.data);
      } catch (err) {
        console.error("Erreur fetch projets:", err);
      }
    };

    fetchData();
  }, []);
  return { data };
};

export const useServices = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/services`);
        const resJson = await res.json();
        setData(resJson.data);
      } catch (err) {
        console.error("Erreur fetch services:", err);
      }
    };

    fetchData();
  }, []);
  return { data };
};

export const useTarifs = () => {
  type Tarif = Data["Tarif"];
  const [data, setData] = useState<Tarif[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/tarifs`);
        const resJson = await res.json();
        setData(resJson);
      } catch (err) {
        console.error("Erreur fetch menu:", err);
      }
    };

    fetchData();
  }, []);
  return { data };
};
