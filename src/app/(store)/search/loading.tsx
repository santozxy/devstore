import { Skeleton } from "@/components/skeleton";
export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4">
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
