import Link from "next/link";

export default function Tabs() {
  return (
    <div className="p-6 px-8 w-full flex gap-2 sticky top-0 left-0 h-16 justify-between bg-background z-30 items-center align-middle">
      <div>ryan&apos;s site</div>

      <div className="w-fit flex gap-10">
        <Link
          href="/#awesome"
          className=" text-red-400 h-full flex items-center font-extrabold   underline"
        >
          ACTUAL INTERESTING THINGS
        </Link>
        <Link href="/#current" className="h-full flex items-center underline">
          current
        </Link>

        <Link
          href="/#accomplishments"
          className="h-full flex items-center underline"
        >
          accomplishments
        </Link>
      </div>
    </div>
  );
}
