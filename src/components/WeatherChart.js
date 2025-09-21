// src/components/WeatherChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const WeatherChart = ({ data }) => (
  <LineChart width={600} height={300} data={data}>
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="time" />
    <YAxis />
    <Tooltip />
    <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
  </LineChart>
);

export default WeatherChart;
