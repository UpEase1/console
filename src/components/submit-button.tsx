'use client'

import React from "react";
import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"

function SubmitBtn({children}: {children: React.ReactNode}) {
  const {pending} = useFormStatus();

  return (
    <Button disabled={pending} type="submit" className="ml-4 bg-[#1b44d4] disabled:bg-[#6581e7]">{children}</Button>
  )
}

export default SubmitBtn