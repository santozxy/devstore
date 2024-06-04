import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart } from "lucide-react";
import { CardWidget } from "./cart-widget";
import { SearchBar } from "./search-bar";
export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link className="text-2xl font-extrabold text-white" href="/">
          devstore
        </Link>
        <SearchBar />
      </div>
      <div className="flex items-center gap-4">
        <CardWidget />
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
