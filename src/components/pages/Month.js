import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import BarChart from "../BarChart";
import Data from "../Data";

Chart.register(CategoryScale);

function Month(){

    const [chartData, setChartData] = useState({
        labels: Data.map((data) => data.month), 
        datasets: [
          {
            label: "Works Sold",
            data: Data.map((data) => data.worksSold),
            backgroundColor: ["#22B84F", "#7E4C00"],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });

    return(

        <div className='newBorder3'>
            <h1>Monthly Stats Page</h1>
            <BarChart chartData={chartData} />
        </div>


    );

}

export default Month;