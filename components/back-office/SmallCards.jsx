import React from 'react'
import SmallCard from './SmallCard';
import { ShoppingCart } from 'lucide-react';
import { FaArrowsRotate, FaCheck } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";

export default function SmallCards() {

    const orderStatus = [
        {
            title: "Total Orders",
            numbers: 1200,
            iconColor: "text-blue-600",
            bgColor: "bg-blue-200",
            icons: ShoppingCart,
        },
        {
            title: "Pending Orders",
            numbers: 1400,
            iconColor: "text-red-600",
            bgColor: "bg-red-200",
            icons: FaArrowsRotate,
        },
        {
            title: "Processing Orders",
            numbers: 1600,
            iconColor: "text-orange-600",
            bgColor: "bg-orange-200",
            icons: FaShippingFast,
        },
        {
            title: "Delivred Orders",
            numbers: 1800,
            iconColor: "text-emerald-600",
            bgColor: "bg-emerald-200",
            icons: FaCheck,
        }
    ]

    return (
        <div className="my-5 grid grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1  gap-5">
            {
                orderStatus.map((data, i) => {
                    return (
                        <SmallCard key={i} data={data} className="myborder" />
                    )
                })
            }
        </div>
    )
}
