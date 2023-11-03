/* eslint-disable no-unused-vars */
import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StackedBarChart = () => {
    const data = [
        { 'name': 'A1', 'value': 100 },
        { 'name': 'A2', 'value': 300 },
        { 'name': 'A3', 'value': 500 },
        { 'name': 'A4', 'value': 900 },
        { 'name': 'A5', 'value': 120 },
    ]
    return (
        <div>
            <BarChart
                width={700}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value"  fill="#F884d8" />
            </BarChart>
        </div>
    );
};

export default StackedBarChart;