"use client";

import { motion } from "motion/react";
import leaf1 from "@/public/leaf.png";
import leaf2 from "@/public/leaf-2.png";
import leaf3 from "@/public/leaf-3.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Leaf({ numberLeaf }: { numberLeaf: number }) {
  const [pageHeight, setPageHeight] = useState("0px");
  const [leafs, setLeafs] = useState<any[]>([]);
  const leafArr = [leaf1, leaf2, leaf3];
  const pathName = usePathname();

  useEffect(() => {
    const height = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
    setPageHeight(height + "px");
    const leavesArr = [];
    for (let i = 0; i < numberLeaf; i++) {
      leavesArr.push({
        id: i,
        leaf: leafArr[Math.floor(Math.random() * 3)],
        left: `${Math.floor(Math.random() * 100)}%`,
        duration: Math.floor(Math.random() * 3) + height / 100,
        width: Math.floor(Math.random() * 30) + 20,
        rotate: `${Math.floor(Math.random() * 720)}deg`,
        delay: Math.floor(Math.random() * 80),
      });
    }
    setLeafs(leavesArr);
  }, [pathName]);

  return (
    <div
      className="absolute w-full -top-70 z-100 pointer-events-none"
      style={{ height: pageHeight }}
    >
      {leafs.map(
        (leaf: {
          id: number;
          leaf: string;
          left: string;
          duration: number;
          width: number;
          rotate: string;
          delay: number;
        }) => {
          return (
            <motion.div
              key={leaf.id}
              className="absolute"
              style={{ left: leaf.left }}
              animate={{
                y: ["0px", pageHeight],
                rotateZ: ["0deg", leaf.rotate],
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
                className="drop-shadow-2xl"
              />
            </motion.div>
          );
        }
      )}
    </div>
  );
}
