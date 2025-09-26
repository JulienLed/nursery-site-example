import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.API_KEY_STRAPI;
  const api = process.env.API_STRAPI;
  const response = await fetch(`${api}/projets?populate=*`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
  const jsonResponse = await response.json();
  return NextResponse.json(jsonResponse);
}
