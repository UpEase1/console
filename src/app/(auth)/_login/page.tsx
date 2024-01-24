"use client"
import { Button } from "@/components/ui/button"
import { getProviders, signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import options from "@/auth.options"

export default function Component() {

  const session = useSession()

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } }
  }

  const providers = getProviders()

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg')",
        }}
      >
        <div className="flex h-full w-full items-center justify-center">
          <SchoolIcon className="h-20 w-20" />
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-bold">UpEase</h1>
        {providers ? (Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <Button onClick={() => signIn(provider.id)} className="flex items-center justify-center space-x-2 rounded-full bg-white px-6 py-2 shadow-md">
            <ComputerIcon className="h-6 w-6" />
            <span>Sign in with {provider.name}</span>
          </Button>
        </div>
        ))):null}
      </div>
    </div>
  )
}

function ComputerIcon(props:any) {
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
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function SchoolIcon(props:any) {
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
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}

