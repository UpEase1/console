import { getServerSession } from "next-auth/next"
import { access } from "fs"
import { toast } from "sonner"

import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"

import { postAnnouncement, getAnnouncements } from "@/services/data-fetch"
import authOptions from '@/auth.options'
import { revalidatePath } from "next/cache"

export async function Announcements() {
  const session = await getServerSession(authOptions);
  const announcements: Array<{subject: string, content: string}> = await getAnnouncements(session?.accessToken!);

  async function createAnnouncement(formData: FormData) {
    'use server'
    // Todo data validation
    await postAnnouncement(formData, session?.accessToken!);
    revalidatePath("/routines")
  }

  return (
    <div key="1" className="max-w-4xl h-full w-full mx-auto my-8">
      <form action={createAnnouncement} >
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
            <Input type="file" multiple name="file_attachments"></Input>

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

        <ScrollArea className="h-[150px] w-full">
          <div className="space-y-2">
            {
              announcements.map((announcement)=>{
              return (
                <Card 
                  key={announcement.subject} 
                  className="p-3 text-sm">
                  <p className="font-bold pr-1">{announcement.subject}: </p>
                  <p> {announcement.content} </p>
                </Card>
              )
              })
            }
          </div>
        </ScrollArea>

      </div>
    </div>
  )
}