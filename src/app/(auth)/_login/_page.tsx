import { Button } from "@/components/ui/button"
import { getProviders, signIn } from "next-auth/react"
import { getServerSession } from "next-auth/next"
import options from "@/auth.options"
import LoginButton from "@/app/(auth)/_login/login-button"

export default async function Component() {

  const session = await getServerSession(options)

  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!
  if (session) {
    return { redirect: { destination: "/" } }
  }

  const providers = await getProviders()

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
          <LoginButton handleClick={customSignIn} providerName={provider.name}/>
        </div>
        ))):null}
      </div>
    </div>
  )
}
async function customSignIn(id: any) {
  "use server"
  signIn(id)
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

