import React, { useEffect, useState } from "react";
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const UserChart = ({ data }) => { // UserChart now expects 'data' prop for revenue
  const [currentYear, setCurrentYear] = useState("");

  useEffect(() => {
    const now = new Date();
    const year = now.getFullYear();
    setCurrentYear(year);
  }, []);

  const chartData = {
    labels: [
      'Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu',
      'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'
    ],
    datasets: [
      {
        label: 'Doanh thu',
        data: data.map(item => item.revenue), // Use revenue data
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Doanh thu của shop trong năm ${currentYear}`,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default UserChart;