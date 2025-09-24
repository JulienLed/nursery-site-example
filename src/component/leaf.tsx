"use client";

import { motion, number } from "motion/react";
import leaf1 from "@/public/leaf.png";
import leaf2 from "@/public/leaf-2.png";
import leaf3 from "@/public/leaf-3.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { StaticImageData } from "next/image";

interface Leaf {
  id: number;
  leaf: StaticImageData;
  left: string;
  duration: number;
  width: number;
  rotate: string;
  delay: number;
}

export default function Leaf({ numberLeaf }: { numberLeaf: number }) {
  const [leafs, setLeafs] = useState<Leaf[]>([]);
  const pathName = usePathname();

  useEffect(() => {
    const onLoad = () => {
      const leafArr = [leaf1, leaf2, leaf3];
      const leavesArr = [];
      for (let i = 0; i < numberLeaf; i++) {
        leavesArr.push({
          id: i,
          leaf: leafArr[Math.floor(Math.random() * 3)],
          left: `${Math.floor(Math.random() * 100)}%`,
          duration:
            Math.floor(Math.random() * 10) + document.body.scrollHeight / 100,
          width: Math.floor(Math.random() * 30) + 20,
          rotate: `${Math.floor(Math.random() * 2000)}`,
          delay: Math.floor(Math.random() * 50),
        });
      }
      setLeafs(leavesArr);
    };
    window.addEventListener("resize", onLoad);
    window.addEventListener("load", onLoad);
    onLoad();
    return () => {
      removeEventListener("load", onLoad);
      removeEventListener("resize", onLoad);
    };
  }, [pathName, numberLeaf]);

  return (
    <div className="absolute w-full h-full z-100 pointer-events-none overflow-hidden">
      {leafs.map((leaf: Leaf) => {
        return (
          <motion.div
            key={leaf.id}
            className="absolute"
            style={{ left: leaf.left }}
            animate={{
              y: ["-50px", document.body.scrollHeight + "px"],
              rotateZ: ["0deg", Number(leaf.rotate) + "deg"],
            }}
            transition={{
              duration: leaf.duration,
              times: [0, 1],
              repeat: Infinity,
              repeatType: "loop",
              delay: leaf.delay,
              ease: "linear",
            }}
          >
            <Image
              alt="leaf"
              src={leaf.leaf}
              width={900}
              height={892}
              style={{ width: leaf.width }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
