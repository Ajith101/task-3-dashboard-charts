import React from "react";
import Piechart from "../components/charts/Piechart";
import BarChart from "../components/charts/BarChart";
import Table from "../components/Table";

const Dashboard = () => {
  return (
    <section className="w-full flex flex-col h-full overflow-y-scroll justify-between px-4 md:px-16 py-3">
      <div>
        <h2 className="text-[18px] font-bold py-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <BarChart />
          <Piechart />
        </div>
      </div>
      <Table />
    </section>
  );
};

export default Dashboard;
