import React from 'react'
import Image from 'next/image'

const students = () => {
  return (
    <div className='grid grid-cols-2 gap-5 m-20'>
      <div 
        className='rounded-2xl border-2 border-solid border-gray-300 flex flex-row items-center justify-between p-8 hover:shadow-md hover:shadow-gray-300 transition-all cursor-pointer'>
          <p className='font-bold text-2xl text-[#1339BF]'>Calculate Grades</p>
          <Image src="/Grades.png" alt='Grades Icon' height={75} width={75}></Image>
      </div>

      <div 
        className='rounded-2xl border-2 border-solid border-gray-300 justify-between flex items-center p-10 hover:shadow-md hover:shadow-gray-300 transition-all cursor-pointer '>
          <p className='font-bold text-2xl text-[#EC008C] pr-12 '>Create and View Announcements</p>
          <Image src="/Rocket.png" alt='Grades Icon' height={75} width={75}></Image>
      </div>
      
      <div 
        className='rounded-2xl border-2 border-solid border-gray-300 flex items-center p-12 hover:shadow-md hover:shadow-gray-300 transition-all cursor-pointer'>
        <p className='font-bold text-2xl '>Generate Hall Ticket</p>
      </div>
      <div 
        className='rounded-2xl border-2 border-solid border-gray-300 flex items-center p-12 hover:shadow-md hover:shadow-gray-300 transition-all cursor-pointer'>
        <p className='font-bold text-2xl '>Calculate GPA</p>
      </div>
    </div>
  )
}

export default students