import React from 'react';
import { FaArrowDown } from "react-icons/fa6";
import Image from 'next/image';
import { TbAdjustmentsDollar } from 'react-icons/tb';

export default function LargeCard({ data }) {
    return (
        <div className={`${data.className} cursor-pointer rounded-xl text-black p-5 flex flex-col bg-emerald-200 items-center justify-center`}>

            <TbAdjustmentsDollar size={30} className="text-black" />

            <h1 className='text-lg text-black mt-2 font-bold'>{data.title}</h1>

            <FaArrowDown className='my-2 text-black' size={15} />

            <h1 className={`text-2xl px-3 text-center py-1 rounded-lg font-bold text-emerald-600 `}>PKR. {data.sales}</h1>
        </div>
    )
}
