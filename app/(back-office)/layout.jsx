"use client"

import React, { useState } from 'react'
import "../../styles/globals.css"
import Sidebar from '../../components/back-office/Sidebar';
import Navbar from '../../components/back-office/Navbar';
import Image from 'next/image';

export default function Layout({ children }) {

    const [showSidebar, setShowSidebar] = useState(true);

    return (
        <div className="flex gap-5 p-3 w-full relative  min-h-screen">

            <div
                className={`bg-black/30 rounded-lg myborder backdrop-blur-2xl px-3 overflow-y-scroll height min-w-52 max-w-52 ${showSidebar ? "absolute -left-full duration-300 delay-500" : "duration-300 delay-500"}`}>
                <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
            </div>

            <div className='w-full'>

                <div className=' bg-black/30 myborder rounded-lg backdrop-blur-2xl px-10 flex items-center justify-center h-20'>
                    <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
                </div>

                <main className='mt-5 myborder  bg-black/30 backdrop-blur-2xl text-black rounded-xl p-5 pr-5 overflow-y-scroll myheight'>{children}</main>

            </div>

            <div>
                <Image src="/bg2.jpg" className='w-full h-full absolute top-0 right-0 -z-50' fill />
            </div>

        </div>
    )
}
