import React, { Suspense } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

type Props = {
  data: any[];
};

const Chart: React.FC<Props> = ({ data }) => {
  return (
    <Suspense>
      <div className="border border-[#EFF1F6] p-5 rounded-[12px]">
        <div className="flex items-center justify-between mt-2 w-full flex-wrap ">
          <p className="text-bold lg:text-[0.875rem] text-[0.75rem] w-full lg:w-auto font-semibold capitalize">
            Top Referral source
          </p>

          <Link
            to=""
            className="text-primary lg:text-[0.875rem] text-[0.75rem] w-full lg:w-auto mt-[1rem] lg:mt-0"
          >
            View full reports
          </Link>
        </div>
        <div className="flex flex-wrap mt-5">
          <div className="lg:w-1/2 mt-2">
            {data &&
              data.length > 0 &&
              data.map((item, i) => (
                <div key={i} className="flex items-center my-2 font-sohne">
                  <img
                    src={item.flag}
                    alt={item.flag}
                    width={"21px"}
                    height={"20px"}
                    className="w-[21px] h-[20px] object-contain rounded-[5px]"
                  />
                  <h4 className="flex items-center ml-2 text-bold text-sm lg:text-base capitalize">
                    {item.source}{" "}
                    <span className="ml-2 font-semibold">{item.percent}%</span>
                    <span
                      className="w-[12px] h-[12px] rounded-full bg-primary ml-2"
                      style={{ background: item.color }}
                    ></span>
                  </h4>
                </div>
              ))}
          </div>
          <div className="flex justify-center items-center w-full md:w-auto md:ml-5 lg:ml-0">
            {data && (
              <PieChart width={200} height={200} className="">
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="count"
                >
                  <Legend />
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
};
export default Chart;
