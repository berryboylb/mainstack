import React, { Suspense, useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useMediaQuery } from "react-responsive";

type Props = {
  data: any[];
  total: number;
};

const Chart: React.FC<Props> = ({ data, total }) => {
  const [aspect, setAspect] = useState<number>(1);
  const [minHeight, setMinHeight] = useState<string>("");
  const isMobile: boolean = useMediaQuery({ query: `(max-width: 768px)` });
  useEffect(() => {
    if (!isMobile) {
      setAspect(2.5);
      setMinHeight("400px");
    }
  }, [isMobile]);
  return (
    <Suspense>
      <div className="my-5 flex items-center justify-start font-sohne flex-wrap">
        <button
          onClick={() => (data.length = 1)}
          className="lg:text-[0.875rem] text-[0.75rem] font-semibold text-bold border border-[#EFF1F6] rounded-[100px] p-3 hover:text-primary hover:border-primary hover:bg-[#FFDDCD] mr-3"
          id="day"
          aria-label="a day"
        >
          1 Day
        </button>
        <button
          onClick={() => (data.length = 3)}
          className="lg:text-[0.875rem] text-[0.75rem] font-semibold text-bold border border-[#EFF1F6] rounded-[100px] p-3 hover:text-primary hover:border-primary hover:bg-[#FFDDCD] mr-3"
          id="day3"
          aria-label="3 days"
        >
          3 Days
        </button>
        <button
          onClick={() => (data.length = 7)}
          className=" mt-2 lg:mt-0 lg:text-[0.875rem] text-[0.75rem] font-semibold text-bold border border-[#EFF1F6] rounded-[100px] p-3 hover:text-primary hover:border-primary hover:bg-[#FFDDCD] mr-3"
          id="day7"
          aria-label="days7"
        >
          7 Days
        </button>
        <button
          onClick={() => (data.length = 30)}
          className=" mt-2 lg:mt-0 lg:text-[0.875rem] text-[0.75rem] font-semibold text-bold border border-[#EFF1F6] rounded-[100px] p-3 hover:text-primary hover:border-primary hover:bg-[#FFDDCD] mr-3"
          id="day30"
          aria-label="days30"
        >
          30 Days
        </button>
        <button
          className="  mt-2 lg:mt-0 lg:text-[0.875rem] text-[0.75rem] font-semibold text-primary border border-primary bg-[#FFDDCD] rounded-[100px] p-3 hover:text-primary hover:border-primary hover:bg-[#FFDDCD] mr-3"
          id="alltime"
          aria-label="alltime"
        >
          All Time
        </button>
        <button
          className=" mt-2 lg:mt-0 lg:text-[0.875rem] text-[0.75rem] font-semibold text-bold border border-[#EFF1F6] rounded-[100px] p-3 hover:text-primary hover:border-primary hover:bg-[#FFDDCD]"
          id="customDate"
          aria-label="customDate"
        >
          Custom Date
        </button>
      </div>
      <div className="border border-[#EFF1F6] p-5 rounded-[12px]">
        <h3 className="font-sohne lg:text-[1.125rem] text-base font-semibold text-bold">
          Page Views
        </h3>

        <p className="text-light my-1 lg:text-[0.875rem] text-[0.75rem]">
          All time
        </p>

        <h1 className="my-1 lg:my-5 text-bold lg:text-[3rem] text-[2.5rem] font-semibold">
          {total && total}
        </h1>
        <ResponsiveContainer
          width="100%"
          aspect={aspect}
          className={"w-full "}
          minHeight={minHeight}
        >
          <AreaChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
            // className="bg-[red]"
          >
            <defs>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF5403" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#FF5403" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              horizontal={true}
              vertical={false}
            />
            <XAxis dataKey="name" axisLine={false} height={35} />
            <YAxis
              axisLine={false}
              padding={{ top: 0, bottom: 0 }}
              minTickGap={0}
              width={35}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#FF5403"
              activeDot={{ r: 8 }}
              fill="url(#colorPv)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Suspense>
  );
};

export default Chart;
