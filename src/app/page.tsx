import BarChart from "@/components/charts/bar-chart";
import { LineChart } from "@/components/charts/line-chart";
import { PieChart } from "@/components/charts/pie-chart";

export default function Dashboard() {
  // add more charts
  return (
    <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div>
        <p>Total Sales</p>
        <BarChart />
      </div>
      <div>
        <p>Total Sales</p>
        <PieChart />
      </div>
      <div>
        <p>Total Sales</p>
        <LineChart />
      </div>
    </div>
  );
}
