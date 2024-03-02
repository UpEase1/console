import { Skeleton } from "@/components/ui/skeleton"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className='p-10'>
      <div className='w-full flex justify-end'>
        <Button className="bg-upease_blue text-white px-4 py-4 rounded-lg text-base font-normal" disabled>Add Course</Button>
      </div>
      <div className="grid grid-cols-4 gap-3 my-5">
        {
          [1,2,3,4,5,6,7,8,9].map((id)=>{
            return (
              <div key={id} className="h-32 flex flex-col rounded-lg border-2 border-solid border-gray-300 justify-between text-wrap text-center p-3 hover:shadow-md hover:shadow-gray-300 transition-all">
                <Skeleton className="h-6 w-3/4" />
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

