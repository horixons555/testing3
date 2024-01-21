import Heading from '@/components/back-office/Heading';
import PageHeader from '@/components/back-office/PageHeader';
import TableAction from '@/components/back-office/TableAction';
import { Plus, Search, Trash2, Upload } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function page() {
  return (
    <div>

      <div className="flex items-center justify-between">
        <Heading title={"Category"} />
        <Link href={"/dashboard/categories/new"}>
          <div className="flex items-center bg-blue-100 hover:bg-blue-200 duration-300 px-3 py-2 rounded-lg gap-2 cursor-pointer text-blue-600">
            <Plus size={25} />
            <h1 className="text-lg">Add New Category</h1>
          </div>
        </Link>
      </div>

      <TableAction />

    </div>
  );
}
