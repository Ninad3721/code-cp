import { Skeleton } from '@/components/ui/skeleton'

export function CodeRunningSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[800px] rounded-xl" />
      <div className="space-y-2"></div>
    </div>
  )
}
