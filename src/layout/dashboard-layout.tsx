import Sidebar from "./sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid grid-cols-2">
      <Sidebar />
      <div className="bg-white">{children}</div>
    </div>
  );
}
