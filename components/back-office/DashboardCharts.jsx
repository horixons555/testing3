import React from 'react'
import WeeklySalesChart from './WeeklySalesChart'
import BestSellingProductsChart from './BestSellingProductsChart'

export default function DashboardCharts() {
    return (
        <div className='grid grid-cols-2 gap-5 rounded-xl'>
            <WeeklySalesChart />
            <BestSellingProductsChart />
        </div>
    )
}
