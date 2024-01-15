import React from 'react'
import { getServerSession } from "next-auth/next"
import authOptions from "@/auth.options"

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  return (
    <>
      HOMEPAGE - Documentation
      <p>
      {session?.user?.name}
      </p>
      TOKEN
      <p>
      {session?.accessToken}
      </p>
    </>
  )
}

export default Dashboard;
