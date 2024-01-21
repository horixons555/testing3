"use client"
import { ChevronDown, ChevronRight, FilePen, LayoutDashboard, LogOut, NotebookText, Settings, ShoppingBasket, Store, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { BiGroup, BiStoreAlt } from 'react-icons/bi';
import { BsPersonLinesFill } from 'react-icons/bs';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"


export default function Sidebar({ showSidebar, setShowSidebar }) {

    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState(false);

    const catalogueLinks = [
        {
            title: "Products",
            icon: Users,
            href: "/dashboard/products"
        },
        {
            title: "Categories",
            icon: Store,
            href: "/dashboard/categories"
        },
        {
            title: "Attributes",
            icon: Store,
            href: "/dashboard/attributes"
        },
        {
            title: "Coupons",
            icon: ShoppingBasket,
            href: "/dashboard/coupons"
        },
    ];

    const sideBarLinks = [
        {
            title: "Customers",
            icon: Users,
            href: "/dashboard/customers"
        },
        {
            title: "Markets",
            icon: Store,
            href: "/dashboard/markets"
        },
        {
            title: "Farmers",
            icon: Store,
            href: "/dashboard/farmers"
        },
        {
            title: "Orders",
            icon: ShoppingBasket,
            href: "/dashboard/orders"
        },
        {
            title: "Staff",
            icon: BiGroup,
            href: "/dashboard/staff"
        },
        {
            title: "Community",
            icon: BiGroup,
            href: "/dashboard/staff"
        },
        {
            title: "Wallet",
            icon: Settings,
            href: "/dashboard/wallet"
        },
        {
            title: "Settings",
            icon: Settings,
            href: "/dashboard/setting"
        },
        {
            title: "Online Store",
            icon: BiStoreAlt,
            href: "/dashboard/settings"
        },
    ];

    const changeQuery = () => {
        if (openMenu == false) {
            setOpenMenu(true);
        } else {
            setOpenMenu(false);
        }
    }

    return (
        <div>
            <Link href="#" className="block text-lg font-bold text-yellow-500 ml-2 my-5">HORIXONS</Link>
            <div className='flex flex-col gap-y-3'>

                <Link
                    onClick={() => setShowSidebar(!showSidebar)}
                    href="/dashboard"
                    className={`flex gap-2 px-2 py-2 rounded-lg duration-300 hover:bg-orange-200 ${pathname == "/dashboard" ? "bg-orange-200 text-orange-600" : "bg-orange-100 text-black"}`}>
                    <LayoutDashboard size={20} className='mt-0.5' />
                    <span>Dashboard</span>
                </Link>

                <div className="bg-orange-100 rounded-lg ">
                    <Collapsible>

                        <CollapsibleTrigger
                            onClick={() => setOpenMenu(!openMenu)}
                            className='text-black duration-500 w-full  px-2 py-2 rounded-lg'>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <NotebookText size={20} />
                                    <span>Catalogue</span>
                                </div>
                                {
                                    openMenu ? <ChevronDown size={20} /> : <ChevronRight size={20} />
                                }
                            </div>
                        </CollapsibleTrigger>

                        <CollapsibleContent className="duration-500 bg-black/20 m-2 p-2 rounded-lg">
                            {
                                catalogueLinks.map((item, i) => {
                                    return (
                                        <div
                                            onClick={() => setShowSidebar(!showSidebar)}
                                            className={`flex flex-col rounded-lg px-3 py-2 m-1 ${item.href == pathname ? "bg-orange-200 text-orange-600" : "bg-orange-100 text-black"}`}>
                                            <Link href={item.href}>{item.title}</Link>
                                        </div>
                                    );
                                })
                            }
                        </CollapsibleContent>
                    </Collapsible>
                </div>

                {
                    sideBarLinks.map((item, i) => {
                        return (
                            <Link
                                onClick={() => setShowSidebar(!showSidebar)}
                                key={i}
                                href={item.href}
                                className={`text-black flex gap-2 px-2 py-2 rounded-lg duration-300 hover:bg-orange-200 ${item.href == pathname ? "bg-orange-200 text-orange-600" : "bg-orange-100 text-black"}`}>
                                <item.icon size={20} className='mt-0.5' />
                                <span>{item.title}</span>
                            </Link>
                        );
                    })
                }

                <Link
                    href="#"
                    className='flex gap-2 px-2 py-2 bg-orange-100 rounded-lg duration-300 hover:bg-orange-200 text-black'>
                    <LogOut size={20} className='mt-0.5' />
                    <span>Logout</span>
                </Link>

            </div>
        </div>
    );
}
