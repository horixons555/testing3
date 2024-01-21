"use client"

import React, { useState } from 'react';
import data from "../../data.json";

export default function CustomDataTable() {

    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentlyDisplayedData = data.slice(startIndex, endIndex);
    const totalPages = Math.ceil(data.length / PAGE_SIZE);
    const itemEndIndex = Math.min(startIndex + PAGE_SIZE, data.length);

    return (
        <div className='mt-10'>
            <h1 className='text-2xl mb-10 font-semibold text-white'>Recent Orders</h1>




            <div class="relative overflow-x-auto sm:rounded-lg">

                <table class="w-full text-sm text-left ">

                    <thead class="bg-emerald-500">
                        <tr>
                            <th scope="col" class="p-4">
                                <div class="flex items-center">
                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                </div>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                ID#
                            </th>
                            <th scope="col" class="px-6 py-3">
                                First Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Last Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Gender
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody className="">

                        {
                            currentlyDisplayedData.map((item, i) => {
                                return (
                                    <tr key={i} class="bg-emerald-100 border-b-2 border-black/30 hover:bg-emerald-200 duration-300">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded  dark:bg-gray-700 dark:border-gray-600" />
                                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-black">
                                            {item.id}
                                        </th>
                                        <th scope="row" class="px-6 py-4 font-medium text-black">
                                            {item.first_name}
                                        </th>
                                        <td class="px-6 py-4 text-black">
                                            {item.last_name}
                                        </td>
                                        <td class="px-6 py-4 text-black">
                                            {item.email}
                                        </td>
                                        <td class="px-6 py-4 text-black">
                                            {item.gender}
                                        </td>
                                        <td class="px-6 py-4 ">
                                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                        </td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
                <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">

                    <span class="text-sm font-normal text-blue-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-white dark:text-white">{startIndex + 1}-{itemEndIndex}</span> of <span class="font-semibold text-white">{data.length}</span></span>


                    <ul class="inline-flex -space-x-px rtl:space-x-reverse mr-2 text-sm">
                        <li>
                            <button className='bg-emerald-500 mr-0.5 px-1.5 disabled:cursor-not-allowed disabled:opacity-50 rounded-lg py-1' disabled={currentPage == 1} onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                        </li>
                        <li className="flex cursor-pointer">
                            {
                                Array.from({ length: totalPages }, (item, index) => {
                                    return (
                                        <h1
                                            onClick={() => setCurrentPage(index + 1)}
                                            key={index}
                                            className={`hover:bg-white duration-300 px-3 mx-0.5 rounded-lg py-1 ${currentPage == index + 1 ? "bg-white" : "bg-white/50"}`}>
                                            {index + 1}
                                        </h1>
                                    );
                                })
                            }
                        </li>
                        <li>
                            <button className='bg-emerald-500 ml-0.5 px-1.5 rounded-lg py-1 disabled:cursor-not-allowed disabled:opacity-50' disabled={currentPage == totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>



        </div>
    )
}
