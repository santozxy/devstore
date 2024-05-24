import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main className="grid max-h-[820px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group col-span-6 row-span-6 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          src="/moletom-never-stop-learning.png"
          alt="Moletom Never Stop Learning"
          width={920}
          height={920}
          quality={100}
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-start"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          src="/moletom-java.png"
          alt="Moletom Never Stop Learning"
          width={920}
          height={920}
          quality={100}
        />
      </Link>
      <Link
        href="/"
        className="group col-span-3 row-span-3 flex rounded-lg bg-zinc-900 overflow-hidden justify-center items-start"
      >
        <Image
          src="/moletom-ia-p-devs.png"
          className="group-hover:scale-105 transition-transform duration-300 ease-in-out"
          alt="Moletom Never Stop Learning"
          width={920}
          height={920}
          quality={100}
        />
      </Link>
    </main>
  );
}
