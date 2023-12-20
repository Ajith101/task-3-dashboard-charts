import React, { useState } from "react";
import useFetchData from "../../hooks/fetchData";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = () => {
  const barData = useFetchData("/api/barchart");
  let userData = {
    labels: barData?.map((item) => item.x),
    datasets: [
      {
        label: "User Gained",
        data: barData?.map((item) => item.y),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="bg-white h-[410px] shadows p-4 rounded-[15px] w-full flex justify-center items-center">
      {barData?.length && <Bar data={userData} />}
    </div>
  );
};

export default BarChart;
