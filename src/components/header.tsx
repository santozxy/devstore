import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold text-white" href="/">
          devstore
        </Link>
        <form
          action=""
          className="flex w-[32opx] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
        >
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="bg-transparent flex-1 text-sm outline-none placeholder:text-zinc-500 "
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <ShoppingCart className="w-6 h-6" />
          <span className="text-sm">Cart (0)</span>
        </Link>
        <div className="w-px h-4 bg-zinc-700" />
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/santozxy.png"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
            alt="avatar"
          />
        </Link>
      </div>
    </header>
  );
}
