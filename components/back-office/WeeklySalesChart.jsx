'use client'
import { BarChart3, CircleDollarSign } from 'lucide-react';
import React, { useState } from 'react';
import { TbReportAnalytics } from "react-icons/tb";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function WeeklySalesChart() {

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const tabs = [
        {
            title: "Sales",
            type: "sales",
            Icon: CircleDollarSign,
            data: {
                labels,
                datasets: [
                    {
                        label: 'Sales',
                        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            },
        },
        {
            title: "Orders",
            type: "orders",
            Icon: TbReportAnalytics,
            data: {
                labels,
                datasets: [
                    {
                        label: 'Orders',
                        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                        borderColor: 'rgb(53, 162, 235)',
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            },
        }
    ];

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };




    const [chartToDisplay, setChartToDisplay] = useState("sales")

    return (
        <div className='myborder bg-white/10 rounded-lg p-5'>
            <div className=' mb-5 flex items-center rounded-lg px-3 py-2 bg-black/20'>
                <BarChart3 className='text-white' />
                <h1 className='text-2xl ml-3 font-semibold text-white'>Weekly Report</h1>
            </div>

            <div className='flex items-end gap-10 border-b-2 border-black/10'>

                {
                    tabs.map((tab, i) => {
                        return (
                            <div onClick={() => setChartToDisplay(tab.type)} key={i} className={`flex cursor-pointer items-center hover:bg-black/10  duration-500 border-b-2 -mb-0.5 py-1.5 px-4 ${chartToDisplay == tab.type ? "border-red-500 text-red-500" : " text-white border-transparent"}`}>
                                <tab.Icon size={20} />
                                <button className='ml-2 text-lg'>{tab.title}</button>
                            </div>
                        );
                    })
                }

            </div>

            {
                tabs.map((tab, i) => {
                    if (chartToDisplay === tab.type) {
                        return (
                            <div key={i} className='mt-10'>
                                <Line options={options} data={tab.data} />
                            </div>
                        );
                    }
                })
            }

        </div>
    )
}