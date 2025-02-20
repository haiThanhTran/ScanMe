import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OrderChart = ({ data }) => { // OrderChart now expects 'data' prop for orders
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    setCurrentYear(year);
  }, []);

  const chartData = {
    labels: [
      "Tháng Một",
      "Tháng Hai",
      "Tháng Ba",
      "Tháng Tư",
      "Tháng Năm",
      "Tháng Sáu",
      "Tháng Bảy",
      "Tháng Tám",
      "Tháng Chín",
      "Tháng Mười",
      "Tháng Mười Một",
      "Tháng Mười Hai",
    ],
    datasets: [
      {
        label: "Số đơn hàng tháng trong năm ",
        data: data.map(item => item.orders), // Use orders data
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `Số đơn hàng tháng trong năm ${currentYear}`,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default OrderChart;