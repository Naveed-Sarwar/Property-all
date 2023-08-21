import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
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

export default function LineChart() {


    const options = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: "#200955",
                }
            },
            title: {
                display: true,
                text: "",
                color: "#200955",
                font: {
                    size: 18,
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
                    minRotation: 0,
                    maxRotation: 0,
                    color: "#200955",
                    font: {
                        size: 14,
                        weight: 'bold',
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
                        weight: 'bold',
                    }
                }
            },
        },
    };
    const data = [
        300000,
        400000,
        500000,
        200000,
        400000,
    ]

    return (
        <div>

            <div className='h-96 w-full mx-auto'>
                <Line className='' data={

                    {
                        labels: "months" == 'months' ? ['2019', '2020', '2021', '2022', "2023"] : labels,
                        datasets: [{
                            label: 'RevPAN',
                            data: data,
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