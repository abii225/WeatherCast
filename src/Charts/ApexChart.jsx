import React, { useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { context } from "../ContextApi/DataPack";

const ApexChart = () => {
  const { setTheme, data, setData, getWeather, getForCast } =
    useContext(context);

  const [chartData, setChartData] = useState({
    series: [
      {
        name: "Min Temperatures",
        data: [0, 0, 0, 0, 0],
      },
      {
        name: "Max Temperatures",
        data: [0, 0, 0, 0, 0],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "day",
        categories: ["Day1", "Day2", "Day3", "Day4", "Day5"],
        labels: {
          style: {
            colors: "white",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "white",
          },
        },
      },
      tooltip: {
        x: {
          format: "day",
        },
      },
    },
  });

  useEffect(() => {
    setChartData((prev) => {
      return {
        ...prev,
        series: [
          {
            name: "Min Temperatures",
            data: data.min,
          },
          {
            name: "Max Temperatures",
            data: data.max,
          },
        ],
      };
    });
  }, [data]);
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
