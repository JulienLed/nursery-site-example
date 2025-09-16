"use client";

import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/src/component/map/map"), {
  ssr: false,
});

export default function NurseryMap() {
  return <Map />;
}
