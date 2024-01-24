"use client"
import { Button } from "@/components/ui/button";
type PageProps = {
  handleClick: (id:any) => void;
  providerName: string;
}

export default function Page({handleClick, providerName}: PageProps) {

  return (
    <Button onClick={handleClick} className="flex items-center justify-center space-x-2 rounded-full bg-white px-6 py-2 shadow-md">
            <ComputerIcon className="h-6 w-6" />
            <span>Sign in with {providerName}</span>
          </Button>
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

