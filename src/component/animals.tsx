import Image from "next/image";

export default function Deer() {
  return (
    <div className=" absolute-z-10">
      <Image
        className="absolute top-100 left-[2vw] -z-10 w-30"
        alt="Image d'un cerf"
        src={"/cerf.png"}
        width={201}
        height={510}
      />
      <Image
        className="absolute top-200 right-[2vw] -z-10 w-30"
        alt="Image d'un cerf"
        src={"/cerf2.png"}
        width={232}
        height={427}
      />
      <Image
        className="absolute top-350 left-[2vw] -z-10 w-30"
        alt="Image d'un renard"
        src={"/fox.png"}
        width={266}
        height={313}
      />
    </div>
  );
}
