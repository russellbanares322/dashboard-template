import { ChartColumnIncreasing, LayoutDashboard, Settings } from "lucide-react";
import { Sidebar } from "./types";

export const sidebarItems: Sidebar[] = [
  {
    name: "Dashboard",
    path: "/dashboard",
    breadCrumbTitle: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Analytics",
    path: "/analytics",
    breadCrumbTitle: "Analytics",
    icon: ChartColumnIncreasing,
  },
  {
    name: "Settings",
    path: "/settings",
    breadCrumbTitle: "Settings",
    icon: Settings,
  },
];
