import React from "react";
import useFetchData from "../../hooks/fetchData";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Piechart = () => {
  const data = useFetchData("/api/piechart");
  let allDatas = {
    labels: data?.map((item) => item.section),
    datasets: [
      {
        label: "User Results",
        data: data?.map((item) => item.value),
        backgroundColor: [
          "#1E5162",
          "#296E85",
          "#338BA8",
          "#67B7D1",
          "#ADD8E6",
        ],
      },
    ],
  };

  return (
    <div className="bg-white shadows p-4 h-[410px] rounded-[15px] w-full flex justify-center items-center">
      {data?.length ? <Pie data={allDatas} options={{}} /> : null}
    </div>
  );
};

export default Piechart;
