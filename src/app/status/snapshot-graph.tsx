"use client";

import { Bar, BarChart, XAxis } from "recharts";

import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { SnapshotChartReq } from "./types";

const chartConfig = {
  status: {
    label: "Avg. Status (%)",
  },
} satisfies ChartConfig;

export default function SnapshotGraph({ data }: SnapshotChartReq) {
  return (
    <div>
      <div>
        <p className="font-medium text-stone-50">
          Daily Progress{" "}
          <span className="font-normal text-xs text-stone-300">
            (past {data.length} days)
          </span>
        </p>
        <p className="text-xs">
          Nightly snapshots of current average status recorded daily.
        </p>
      </div>

      <ChartContainer
        config={chartConfig}
        className="my-4 min-h-[80px] h-[80px] w-full"
      >
        <BarChart accessibilityLayer data={data}>
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={60}
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
    </div>
  );
}
