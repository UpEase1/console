import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className='p-10'>
      <div className='w-full flex justify-end '>
        <div className="ml-auto">
          <Button className="bg-blue-500 text-white" disabled>Add Course</Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6 my-5">
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
        <div className="w-100 h-28 max-w-sm rounded-md border p-4">
          <Skeleton className="h-6 w-3/4" />
        </div>
      </div>
    </div>
  )
}

