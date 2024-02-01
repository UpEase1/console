import React from 'react'
import { getServerSession } from "next-auth/next"
import authOptions from "@/auth.options"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  
  return (
    <div className="flex flex-col flex-grow overflow-hidden mt-10">
      <div className="flex-grow overflow-x-hidden overflow-y-auto ">
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg border shadow-md overflow-hidden relative">
          <Image
            alt="Decorative image"
            className="absolute top-0 h-32 w-full object-cover opacity-30 blur -translate-x-[24px]"
            height="300"
            src="/bg.jpeg"
            style={{
              aspectRatio: "400/300",
              objectFit: "cover",
            }}
            width="400"
          />
          <div className="flex items-center space-x-4 pt-8">
            <Avatar>
              <AvatarImage alt="Cathy Chu" src="/placeholder.svg?height=100&width=100" />
            </Avatar>
            <div>
              <h1 className="text-2xl font-semibold">Judge</h1>
              <p className="text-sm text-gray-500">Imagine Cup</p>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Full Name</span>
                <span>Megan Bowen</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Email Address</span>
                <span>ImagineCupJudges@v2tzs.onmicrosoft.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Student ID</span>
                <span>48d31887-5fad-4d73-a9f5-3c356e68a038</span>
              </div>
            </div>
            <h2 className="text-lg font-semibold mt-8 mb-4">Additional Information</h2>
            <div className="flex items-center justify-between">
              <span className="font-medium">Gender</span>
              <span>Not provided</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
