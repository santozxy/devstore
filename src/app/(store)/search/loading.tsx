"use client";

import { Skeleton } from "@/components/skeleton";
import { useSearchParams } from "next/navigation";

export default function SearchLoading() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-lg font-bold">
        Resultados para: <span>{query ?? ""}</span>
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className=" h-96" />
        <Skeleton className=" h-96" />
        <Skeleton className=" h-96" />
        <Skeleton className=" h-96" />
        <Skeleton className=" h-96" />
        <Skeleton className=" h-96" />
      </div>
    </div>
  );
}
