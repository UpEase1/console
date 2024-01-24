"use client";
import React from "react";
import Link from "next/link";

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
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <nav className='w-full flex p-8 justify-between '>
        <div>
            <Link href='/' className=' text-2xl text-blue-800 '>UpEase</Link>
        </div>
        <ul className=' text-2xl flex flex-col md:flex-row gap-8 '>
          <li className="p-2.5 hover:bg-blue-100 hover:rounded-xl">
            <Link href="/" className="">
              <DropdownMenu>
                <DropdownMenuTrigger>Copilot</DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Build</DropdownMenuItem>
                  <DropdownMenuItem>Assign</DropdownMenuItem>
                  <DropdownMenuItem><Link href="../copilots/insights/">Insights</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </Link>
          </li>
          <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='/routines' className=''>Routines</Link></li>
          <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='/students' className=''>Students</Link></li>
          <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='/courses' className=''>Courses</Link></li>
          <li className='p-2.5 hover:bg-blue-100 hover:rounded-xl'><Link href='/api/auth/signout' className=''>Logout</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;
