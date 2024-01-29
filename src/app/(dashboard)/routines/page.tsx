import React from 'react'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Announcements } from '@/app/(dashboard)/routines/announcements';
import { Grades } from '@/app/(dashboard)/routines/grades';

const students = () => {
  return (
    <div className='grid grid-cols-2 gap-5 m-20'>
      <Dialog>
        <DialogTrigger>
          <div 
            className='rounded-2xl border-2 border-solid border-gray-300 flex flex-row items-center justify-between h-32 px-8 hover:shadow-md hover:shadow-gray-300 transition-all cursor-pointer'>
              <p className='font-bold text-2xl text-[#1339BF]'>Calculate Grades</p>
              <Image src="/Grades.png" alt='Grades Icon' height={75} width={75}></Image>
          </div>
        </DialogTrigger>
        <DialogContent className='h-5/6'>
          <Grades></Grades>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>
          <div 
            className='rounded-2xl border-2 border-solid border-gray-300 flex flex-row items-center justify-between h-32 px-8 hover:shadow-md hover:shadow-gray-300 transition-all cursor-pointer text-left'>
              <p className='font-bold text-2xl text-[#EC008C] pr-6 '>Create and View Announcements</p>
              <Image src="/Rocket.png" alt='Grades Icon' height={75} width={75}></Image>
          </div>
        </DialogTrigger>
        <DialogContent className='h-5/6'>
          <Announcements></Announcements>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>
          <div 
            className='rounded-2xl border-2 border-solid border-gray-300 flex flex-row items-center justify-between h-32 px-8 hover:shadow-md hover:shadow-gray-300 transition-all cursor-pointer'>
            <p className='font-bold text-2xl '>Generate Hall Ticket</p>
            <Image src="/Print.png" alt='Grades Icon' height={75} width={75}></Image>
          </div>
        </DialogTrigger>
        <DialogContent className='h-5/6'>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>
          <div 
            className='rounded-2xl border-2 border-solid border-gray-300 flex flex-row items-center justify-between h-32 px-8 hover:shadow-md hover:shadow-gray-300 transition-all cursor-pointer'>
            <p className='font-bold text-2xl '>Calculate GPA</p>
            <Image src="/Print.png" alt='Grades Icon' height={75} width={75}></Image>
          </div>
        </DialogTrigger>
        <DialogContent className='h-5/6'>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default students