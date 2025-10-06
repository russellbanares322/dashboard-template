import { LayoutDashboard, Settings } from "lucide-react";
import { Sidebar } from "./types";

// Instantiate route pages
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
    icon: Settings,
  },
  {
    name: "Settings",
    path: "/settings",
    breadCrumbTitle: "Settings",
    icon: Settings,
  },
];
