import { Bell, LayoutDashboard, LogOut, MenuIcon, SunIcon, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TbUserEdit } from "react-icons/tb";
import { FaXmark } from 'react-icons/fa6';


export default function Navbar({ setShowSidebar, showSidebar }) {
    return (
        <div className='flex w-full flex-row text-black items-center justify-between'>

            <div
                onClick={() => setShowSidebar(!showSidebar)}
            >
                <MenuIcon
                    className='hover:bg-white/15 text-white duration-300 w-12 cursor-pointer  h-12 p-3 rounded-full' />
            </div>

            <div className='flex flex-row items-center gap-x-5'>
                <SunIcon className='hover:bg-white/15 text-white duration-300 w-12 cursor-pointer  h-12 p-3 rounded-full' />

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className='relative'>
                            <Bell className='hover:bg-white/15 text-white duration-300 w-12  cursor-pointer h-12 p-3 rounded-full' />
                            <h1 className='absolute right-2 top-0 text-xs bg-emerald-300 px-1.5 py-0.5 rounded-full'>5</h1>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-black text-white">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='text-back hover:bg-white/20 duration-300'>
                            <div className="flex flex-row items-center">
                                <Image className="rounded-full" src="/bot.png" width={40} height={40} />
                                <div className="flex flex-col ml-2">
                                    <h1 className="truncate w-80 text-sm">This is the following test notification for this website.</h1>
                                    <div className="flex flex-row mt-1 items-center">
                                        <h1 className="text-xs bg-red-400 mr-3 rounded-full px-2 py-0.5">Out of Stock</h1>
                                        <h1 className="text-sm">10 Jun 2024 - 12:00 PM</h1>
                                    </div>
                                </div>
                                <FaXmark size={10} className="text-white ml-2 flex-1 h-12 w-8 bg-white/20 p-2 rounded-md" />
                            </div>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>



                {/* <User className='hover:bg-black/15 duration-300 w-12 cursor-pointer  h-12 p-3 rounded-full' /> */}

                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className='w-12 h-12 rounded-full border-2 border-white/80'>
                            <Image src="/profile.jpg" width={48} height={48} className='rounded-full' />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-52 bg-black text-white">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className='hover:bg-white text-back duration-300'>
                            <LayoutDashboard size={20} />
                            <h1 className='text-lg ml-2'>Dashboard</h1>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='hover:bg-white text-back duration-300'>
                            <TbUserEdit size={20} />
                            <h1 className='text-lg ml-2'>Edit Profile</h1>
                        </DropdownMenuItem>
                        <DropdownMenuItem className='hover:bg-white text-back duration-300'>
                            <LogOut size={20} />
                            <h1 className='text-lg ml-2'>Logout</h1>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </div>
        </div>
    );
}