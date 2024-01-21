import React from 'react'
import "../../styles/globals.css"
import { TbBasket } from 'react-icons/tb'

export default function SmallCard({ data }) {
    const { title, numbers, iconColor, bgColor, icons } = data;
    return (
        <div className='bg-black/40 text-black myborder rounded-lg flex px-3 py-2 items-center'>
            <div className={`mr-5 w-16 h-16 flex rounded-full items-center justify-center ${bgColor}`}>
                <data.icons size={25} className={`${data.iconColor}`} />
            </div>
            <div className='h-full w-0.5 mr-5 rounded-full bg-white/20' />
            <div>
                <h1 className="text-lg text-white font-medium">{title}</h1>
                <h1 className="text-xl text-white font-semibold">{numbers}</h1>
            </div>
        </div>
    )
}
