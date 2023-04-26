import { Suspense, lazy, useState, useEffect } from "react";
import Spinner from "../components/Spinner/Spinner";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import {
  fetchData,
  getTotal,
  arrangeData,
  arangePieChart,
  arrangeSocials,
} from "../utils";
import LineChart from "../components/LineGraph/LineGraph";
import DonutChart from "../components/DonutGraph/DonutGraph";
import DonutChartAlt from "../components/DonutGraph/DonutGraphAlt";
const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));

const Home = () => {
  const { isLoading, isError, data, error } = useQuery(
    "fetch",
    () => fetchData(),
    {
      onSuccess: (data) => {
        console.log(data);
        if (data) toast.success("Successful");
      },
      onError: () => {
        toast.error("An error occured");
      },
    }
  );
  const [graphData, setGraphData] = useState<any[]>();
  const [locations, setLocations] = useState<any[]>();
  const [refferal, setRefferal] = useState<any[]>();
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (data) {
      const result = getTotal(data.graph_data.views);
      const graphData = arrangeData(data.graph_data.views);
      const Locations = arangePieChart(data.top_locations);
      const sources = arrangeSocials(data.top_sources);
      setTotal(result);
      setGraphData(graphData);
      setLocations(Locations);
      setRefferal(sources);
    }
  }, [data]);

  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <div className="flex justify-center items-center">
        "An error has occurred: " + {(error as any).message};
      </div>
    );
  return (
    <Suspense fallback={<Spinner />}>
      <DashboardLayout>
        <div className=" ">
          {graphData && <LineChart data={graphData} total={total} />}

          <div className="my-5 grid  grid-cols-1 lg:grid-cols-2 gap-[1rem]">
            {locations && <DonutChart data={locations} />}
            {refferal && <DonutChartAlt data={refferal} />}
          </div>
        </div>
      </DashboardLayout>
    </Suspense>
  );
};

export default Home;