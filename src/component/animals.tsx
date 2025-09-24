import Image from "next/image";

export default function Deer() {
  return (
    <div className="absolute w-full h-full -z-10 pointer-events-none">
      {/* Cerf gauche */}
      <div className="absolute top-[70px] left-[20px] w-30">
        <Image
          src="/cerf.png"
          alt="Cerf gauche"
          width={201}
          height={510}
          className="w-full h-auto"
          fetchPriority="high"
        />
      </div>

      {/* Cerf droit */}
      <div className="absolute top-[850px] right-[20px] w-30">
        <Image
          src="/cerf2.png"
          alt="Cerf droit"
          width={232}
          height={427}
          className="w-full h-auto"
          fetchPriority="high"
        />
      </div>

      {/* Renard */}
      <div className="absolute top-[1300px] left-[20px] w-30">
        <Image
          src="/fox.png"
          alt="Renard"
          width={266}
          height={313}
          className="w-full h-auto"
          fetchPriority="high"
        />
      </div>
    </div>
  );
}
