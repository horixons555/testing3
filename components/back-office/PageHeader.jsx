import React from 'react'
import Heading from './Heading'
import { Plus } from 'lucide-react'
import { Link } from 'next/link';

export default function PageHeader({ heading, linkTitle, href }) {
    return (
        <div className="flex items-center justify-between">
            <Heading title={heading} />
            <Link href={href}>
                <div className="flex items-center bg-blue-100 hover:bg-blue-200 duration-300 px-3 py-2 rounded-lg gap-2 cursor-pointer text-blue-600">
                    <Plus size={25} />
                    <h1 className="text-lg">{linkTitle}</h1>
                </div>
            </Link>
        </div>
    )
}
