import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.API_STRAPI}/projets?populate=*`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY_STRAPI}`,
    },
    cache: "no-store",
  });
  const resJson = await res.json();
  return NextResponse.json(resJson);
}
