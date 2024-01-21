import React from 'react'
import LargeCard from './LargeCard'

export default function LargeCards() {

    const orderStats = [
        {
            title: "Today Orders",
            sales: "12000",
            textColor: "text-emerald-500",
            bgColor: "bg-emerald-200",
        },
        {
            title: "Yesterday Orders",
            sales: "12000",
            textColor: "text-red-500",
            bgColor: "bg-red-200",
        },
        {
            title: "This Month",
            sales: "12000",
            textColor: "text-orange-500",
            bgColor: "bg-orange-200",
        },
        {
            title: "Last Month",
            sales: "12000",
            textColor: "text-blue-500",
            bgColor: "bg-blue-200",
        },
        {
            title: "All Time",
            sales: "12000",
            textColor: "text-yellow-500",
            bgColor: "bg-yellow-200/60",
        },
    ]

    return (
        <div className="my-5 grid grid-cols-1 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5">
            {
                orderStats.map((item, i) => {
                    return (
                        <LargeCard key={i} data={item} className="" />
                    )
                })
            }
        </div>
    )
}
