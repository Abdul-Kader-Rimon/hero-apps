import React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ReviewChart = ({ ratings }) => {
  const barData = ratings.map((r) => ({
    name: r.name,
    count: r.count,
  }));

  return (
    <div className="w-full h-[400px] p-6">
      <h2 className="text-2xl font-bold pl-8 ">Ratings</h2>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={barData}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis className="font-semibold" type="number" />
          <YAxis
            className="font-semibold"
            dataKey="name"
            type="category"
            scale="band"
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" barSize={25} fill="#FF8811" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReviewChart;
