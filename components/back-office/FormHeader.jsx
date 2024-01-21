"use client"
import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function FormHeader({ title }) {
    const router = useRouter();
    return (
        <div className="flex mb-10 items-center justify-between bg-white/20 p-5 rounded-lg">
            <h1 className="text-xl text-white">{title}</h1>
            <div onClick={() => router.back()} className="flex items-center cursor-pointer hover:bg-red-300/90 duration-300 bg-red-200 text-red-600 px-3 py-2 rounded-lg">
                <X size={20} />
                <h1 className="text-lg ml-2">Cancel</h1>
            </div>
        </div>
    )
}
