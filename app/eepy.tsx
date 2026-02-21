import Image from "next/image";
export default function Eepy() {
  return (
    <div className="w-[428px]">
      <Image
        src="/eepy_colored.png"
        alt="eepy ducky"
        width={428}
        height={428}
        className="h-auto w-full"
      />
    </div>
  );
}
