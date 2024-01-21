import React from "react";
import Heading from './../../../components/back-office/Heading';
import LargeCards from './../../../components/back-office/LargeCards';
import SmallCards from './../../../components/back-office/SmallCards';
import DashboardCharts from './../../../components/back-office/DashboardCharts';
import CustomDataTable from './../../../components/back-office/CustomDataTable';

export default function page() {
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards />
      <SmallCards />
      <DashboardCharts />
      <CustomDataTable />
    </div>
  );
}
