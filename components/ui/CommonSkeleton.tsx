import { Skeleton } from '@/components/ui/skeleton'

export function CommonSkeleton() {
  return (
    <div className="flex flex-col space-y-3 p-3 items-center mt-10">
      <Skeleton className="h-[400px] w-[700px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[300px]" />
        <Skeleton className="h-4 w-[250px]" />
      </div>
    </div>
  )
}
