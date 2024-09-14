"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-05-04", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-05", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-06", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-07", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-08", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-09", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-10", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-11", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-12", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-13", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-14", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-15", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-16", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-17", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-18", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-19", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-20", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-21", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-22", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-23", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-24", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-25", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-26", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-27", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-28", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-29", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-30", avg: 100, fill: "#2BAC76" },
  { date: "2024-05-31", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-01", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-02", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-03", avg: 30, fill: "#E95858" },
  { date: "2024-06-04", avg: 45, fill: "#E95858" },
  { date: "2024-06-05", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-06", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-07", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-08", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-09", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-10", avg: 65, fill: "#FFAF36" },
  { date: "2024-06-11", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-12", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-13", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-14", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-15", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-16", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-17", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-18", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-19", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-20", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-21", avg: 75, fill: "#FFAF36" },
  { date: "2024-06-22", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-23", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-24", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-25", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-26", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-27", avg: 100, fill: "#2BAC76" },
  { date: "2024-06-30", avg: 45, fill: "#E95858" /* red */ },
  { date: "2024-06-29", avg: 55, fill: "#FFAF36" /* yellow */ },
  { date: "2024-06-28", avg: 100, fill: "#2BAC76" /* green */ },
  { date: "2024-06-29", avg: null, fill: "#2BAC76" /* green */ },
  { date: "2024-06-30", avg: null, fill: "#2BAC76" /* green */ },
  { date: "2024-07-01", avg: undefined, fill: "#2BAC76" /* green */ },
];

const chartConfig = {
  status: {
    label: "Avg. Status (%)",
  },
} satisfies ChartConfig;

export default function SnapshotGraph({ data }) {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[72px] h-[72px] w-full"
    >
      <BarChart accessibilityLayer data={data}>
        <XAxis
          dataKey="date"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={72}
          tickFormatter={(value) => {
            const date = new Date(value);
            return date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            });
          }}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              className="w-[160px] font-sans"
              nameKey="status"
              labelClassName="text-black"
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
              }}
            />
          }
        />
        <Bar dataKey="avg" radius={2} />
      </BarChart>
    </ChartContainer>
  );
}
