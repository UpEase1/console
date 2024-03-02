"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdownMenu"

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Navbar = () => {
  useEffect(() => {
    console.log(window.location.pathname)
  }, [])
  
  const path = usePathname();

  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <nav className='w-full flex px-8 py-4 justify-between border-b-[1px] border-[#D0D0D0] bg-[#F8FAFC]'>
        <div className="flex items-center justify-center">
            <Link href='/' className=' text-2xl text-blue-800 '>UpEase</Link>
        </div>
        <ul className='text-lg flex flex-col md:flex-row gap-4 '>
          <li className="p-2.5 hover:bg-blue-100 hover:rounded-xl transition-all">
            <Link href="/" className="">
              <DropdownMenu>
                <DropdownMenuTrigger >Copilot</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Build</DropdownMenuItem>
                  <DropdownMenuItem>Assign</DropdownMenuItem>
                  <DropdownMenuItem><Link href="../copilots/insights/">Insights</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Link>
          </li>
          <li className={path == "/routines" ? 'p-2.5 bg-[#1D44D3] text-white rounded-xl transition-all' : 'p-2.5 hover:bg-blue-100 rounded-xl transition-all'}><Link href='/routines' className=''>Routines</Link></li>

          <li className={path == "/students" ? 'p-2.5 bg-[#1D44D3] text-white rounded-xl transition-all' : 'p-2.5 hover:bg-blue-100 rounded-xl transition-all'}><Link href='/students' className=''>Students</Link></li>

          <li className={path == "/courses" ? 'p-2.5 bg-[#1D44D3] text-white rounded-xl transition-all' : 'p-2.5 hover:bg-blue-100 rounded-xl transition-all'}><Link href='/courses' className=''>Courses</Link></li>

          <li className='p-2.5 hover:bg-blue-100 rounded-xl transition-all' ><Link href='/api/auth/signout' className=''>Logout</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
