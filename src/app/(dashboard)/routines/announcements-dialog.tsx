/**
 * @see https://v0.dev/t/BhzAUVg9JHN
 */
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {postAnnouncement} from "@/services/data-fetch"


export function RoutinesNotifications() {
  async function createAnnouncement(formData: FormData) {
    'use server'
    // Todo data validation
    console.log(postAnnouncement(formData))
  }

  return (
    <div key="1" className="max-w-4xl h-full mx-auto my-8">
      <form action={createAnnouncement}>
        <div id="Top Section" className="mb-10">
          <div id="Text Area" className="mb-4">
            <input 
              name="subject"
              className="w-full p-2 border-2 border-gray-300 rounded-md mb-2" 
              placeholder="Subject" 
            />

            <Textarea 
              name="announcement_message"
              className=" border-2 border-gray-300 placeholder:text-gray-400" 
              placeholder="Announcement Message" 
            />
          </div>

          <div id="Attachement & Submit" className="flex items-center justify-between">
            <input name="files" className="" multiple type="file"/>
            {/* <label className="">
              <p className="flex flex-row bg-white border-2 border-gray-100 px-4 py-[0.65rem] rounded-md text-sm cursor-pointer hover:bg-gray-100 transition-all">
                <PaperclipIcon className="w-5 h-5 mr-2" />
                Attach Documents
              </p>
            </label> */}

            <div id="Post Section" className="flex items-center">
              <Button type="submit" className="ml-4 bg-[#1b44d4]">Post Announcement</Button>
            </div>
          </div>
        </div>
      </form>

      <div id="Past Announcements" className="flex flex-col">
        <div id="Title & Filter" className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Past Announcements</h2>
        
          <Select>
            <SelectTrigger className="w-[100px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ScrollArea className="h-fit">
          <div className="space-y-2">
            {
              <Card className="p-3 text-sm">
                <p>
                  Notice: Initiation of best research performance for UG and PG (MTech/MCA/MSc) students in MIT. This
                  award will be given on Research Day at MIT. The last date of submission is 8th March 2023
                </p>
              </Card>
            }
            <Card className="p-3 text-sm">
              <p>
                Seat Allocation - JAN 14- FIRST SEM BTECH- ENGG.MATHEMATICS_(CHEMISTRY GROUP AND REREGISTERED STUDENTS)-
                2.30 PM - 5.30 PM
              </p>
            </Card>
            <Card className="p-3 text-sm">
              <p>
                Notice: Initiation of best research performance for UG and PG (MTech/MCA/MSc) students in MIT. This
                award will be given on Research Day at MIT. The last date of submission is 8th March 2023
              </p>
            </Card>
            <Card className="p-3 text-sm">
              <p>
                Seat Allocation - JAN 14- FIRST SEM BTECH- ENGG.MATHEMATICS_(CHEMISTRY GROUP AND REREGISTERED STUDENTS)-
                2.30 PM - 5.30 PM
              </p>
            </Card>
            <Card className="p-3 text-sm">
              <p>
                Notice: Initiation of best research performance for UG and PG (MTech/MCA/MSc) students in MIT. This
                award will be given on Research Day at MIT. The last date of submission is 8th March 2023
              </p>
            </Card>
          </div>
        </ScrollArea>

      </div>
    </div>
  )
}


function PaperclipIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}