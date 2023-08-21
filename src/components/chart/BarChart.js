import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
// import { DS } from '../DashboardStyle';
import {
    Chart as ChartJS,
    registerables,
    CategoryScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
// import { colors } from '../../../constants/Color';
ChartJS.register(
    ...registerables
);

export default function BarChart() {

    const [first, setFirst] = useState(true);
    const [multipleDatasets, setMultipleDatasets] = useState(true);
    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {


                display: false

            },
            title: {
                display: true,
                text: "Monthly AirBnb Revenue Estimate",
                color: "#200955",
                font: {
                    size: 20,
                }
            },
        },
        scales: {
            y: {
                grid: {
                    tickColor: "#200955",
                },
                ticks: {
                    beginAtZero: true,
                    color: "#200955",
                    callback: (value) => `$${value}`,
                    font: {
                        size: 18,

                    },
                    padding: 20,

                }
            },
            x: {
                grid: {
                    tickColor: "#200955",
                },
                ticks: {
                    color: "#200955",
                    font: {
                        size: 18,
                    }
                }
            },
        },
    };


    return (
        <div>

            <div className='h-96 w-full mx-auto'>
                <Bar className='' data={

                    {
                        labels: "months" == 'months' ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] : labels,
                        datasets: [{
                            label: 'My First Dataset',
                            data: [5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000, 45000, 35000, 20000, 15000],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(201, 203, 207, 0.2)',

                            ],
                            borderColor: [
                                'rgb(255, 99, 132)',
                                'rgb(255, 159, 64)',
                                'rgb(255, 205, 86)',
                                'rgb(75, 192, 192)',
                                'rgb(54, 162, 235)',
                                'rgb(153, 102, 255)',
                                'rgb(201, 203, 207)',


                            ],
                            borderWidth: 1
                        }]
                    }
                }
                    options={options}
                />
            </div>
        </div>
    )
}