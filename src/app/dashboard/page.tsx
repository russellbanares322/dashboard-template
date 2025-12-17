import BarChart from "./bar-chart";
import { PieChart } from "./pie-chart";

// Display more charts
export default function Dashboard() {
  return (
    <div className="px-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {/* Content */}
      <div>
        <p>Total Sales</p>
        <BarChart />
      </div>
      <div>
        <p>Total Sales</p>
        <PieChart />
      </div>
    </div>
  );
}
