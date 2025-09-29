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
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_URL
      : "http://localhost:3000";

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
  return { data, baseURL };
};

export const useProjects = () => {
  type Projet = Data["projets"];
  const [data, setData] = useState<Projet[]>([]);
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_URL
      : "http://localhost:3000";

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
  return { data, baseURL };
};

export const useServices = () => {
  const [data, setData] = useState<Data[]>([]);
  const baseURL =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_BASE_URL
      : "http://localhost:3000";

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
  return { data, baseURL };
};
