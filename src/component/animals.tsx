import Image from "next/image";

export default function Deer() {
  return (
    <div>
      <Image
        className="-z-10 absolute top-100 left-[2%] w-30"
        alt="Image d'un cerf"
        src={"/cerf.png"}
        width={201}
        height={510}
      />
      <Image
        className="-z-10 absolute top-200 right-[2%] w-30"
        alt="Image d'un cerf"
        src={"/cerf2.png"}
        width={232}
        height={427}
      />
      <Image
        className="-z-10 absolute top-300 left-[2%] w-30"
        alt="Image d'un renard"
        src={"/fox.png"}
        width={266}
        height={313}
      />
    </div>
  );
}
