"use client"
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

// Type Def
type PageProps = {
  handleClick: (id:any) => void;
  providerName: string;
}


export default function Page() {

  return (
    <Button onClick={()=>{signIn(undefined, {callbackUrl: "/"})}} className="flex items-center justify-center space-x-2 rounded-full bg-black shadow-md p-6" type="submit">
      <span>Sign in with Microsoft</span>
    </Button>
  ) 
}
