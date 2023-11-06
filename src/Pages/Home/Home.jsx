import React from "react";
import { Outlet } from "react-router-dom";
import { HOC } from "../../Components/HOC/HOC";
import { ArcElement, Tooltip, Legend } from "chart.js";
import{ Chart as ChartJS} from 'chart.js/auto';
import { Bar, Doughnut, Line, Scatter } from "react-chartjs-2";
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend);
function Home() {
  const data = {
    labels: ["Cloth", "Pent", "T-Shirts", "shoes", "Belt", "Watch"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "#cfeeb6",
          "#84b8ac",
          "#93c5eb",
          "#b991eb",
          "#e6b7e7",
          "#d76489",
        ],
        borderWidth: 1,
      },
    ],
  };

  const optionsDoughnut = {
    maintainAspectRatio: false,
    plugins : {
      legend : {
        position : 'right',
        labels : {
          usePointStyle : true,
          pointStyle : 'rect'
        }
      }
    }
  };
  
  const options = {
    maintainAspectRatio: false,
    plugins : {
      legend : {
        position : 'bottom',
        labels : {
          usePointStyle : true,
          pointStyle : 'rect'
        }
      }
    }
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const LineChartData = {
    labels,
    datasets: [
      {
        label: 'Cloth',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: '#d76489',
        backgroundColor: '#d76489',
      },
      {
        label: 'Other',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: '#84b8ac',
        backgroundColor: '#84b8ac',
      },
    ],
  };

  const ScatterChartData = {
    datasets: [
      {
        label: 'A dataset',
        data: Array.from({ length: 100 }, () => ({
          x: faker.datatype.number({ min: -100, max: 100 }),
          y: faker.datatype.number({ min: -100, max: 100 }),
        })),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };
  
  
  return (
    <>
      <div>
        <div className="row g-3">
          <div className="col-12 col-lg-5">
            <div className="chart_section">
              <h4>Daily Updates</h4>
              <div className="chart">
                <Doughnut data={data} options={optionsDoughnut} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="chart_section">
              <h4>Emission</h4>
              <div className="chart">
              <Line options={options} data={LineChartData} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <div className="chart_section">
              <h4>Reports</h4>
              <div className="chart">
              <Bar options={options} data={LineChartData} />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="chart_section">
              <h4>Reports</h4>
              <div className="chart">
              <Scatter options={options} data={ScatterChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOC(Home);
