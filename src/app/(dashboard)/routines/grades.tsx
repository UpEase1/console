import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export async function Grades() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="flex flex-col w-full max-w-sm items-center space-y-2">
        <Label htmlFor="course-id">Course ID</Label>
        <Input id="course-id" placeholder="Enter Course ID" type="text" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Select Grade Type</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Grade Type</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup defaultValue="absolute">
            <DropdownMenuRadioItem value="absolute">Absolute</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="relative">Relative</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button className="w-full max-w-sm" type="submit">
        Get Grades
      </Button>
      <div className="flex flex-col w-full max-w-sm items-center space-y-2 border p-4 rounded-md">
        <h2 className="text-lg font-bold">Grades will be displayed here</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Please enter the Course ID and select the Grade Type, then click Get Grades.
        </p>
      </div>
    </div>
  )
}
