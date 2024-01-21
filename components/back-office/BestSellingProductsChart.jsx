'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ArrowUpNarrowWide } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BestSellingProductsChart() {

    const data = {
        labels: ['Orange', 'Banana', 'Mango', 'Apple', 'Watermelon'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 8, 2],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                    'rgba(255, 255, 255, 1)',
                ],
                borderWidth: 2,
            },
        ],
    };

    return (
<div className='myborder bg-white/10 rounded-lg p-5'>
            <div className=' mb-5 flex items-center rounded-lg px-3 py-2 bg-black/20'>
                <ArrowUpNarrowWide className=' text-white' />
                <h1 className='text-2xl ml-3 text-white font-semibold'>Best Selling Items</h1>
            </div>

            <div className="p-10">
                <Pie data={data} />
            </div>
        </div>
    )
}
