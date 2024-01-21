import { Search, Trash2, Upload } from 'lucide-react';
import React from 'react'

export default function TableAction() {
    return (
        <div className="flex items-center justify-between mt-12 bg-white/20 p-3 rounded-lg">

            <div className="flex items-center">

                {/* Export Button */}
                <div className="flex items-center cursor-pointer bg-emerald-200 text-emerald-600 px-3 py-2 rounded-lg">
                    <Upload size={20} />
                    <h1 className="text-lg ml-2">Export</h1>
                </div>

                {/* Search Button */}
                <div className="flex items-center ml-10 bg-white/50 rounded-lg px-2">
                    <Search size={22} />
                    <input type="text" placeholder="Search category by name..." className="text-black text-lg rounded-lg border-none outline-none ml-2 bg-transparent focus:border-none focus:outline-none focus:ring-0 w-full" />
                </div>

            </div>

            {/* Delete Button */}
            <div className="flex items-center cursor-pointer hover:bg-red-300/90 duration-300 bg-red-200 text-red-600 px-3 py-2 rounded-lg">
                <Trash2 size={20} />
                <h1 className="text-lg ml-2">Delete</h1>
            </div>

        </div>
    );
}
