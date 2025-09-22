import Sidebar from "./sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen h-full">
      <Sidebar />
      <div className="bg-blue-400 w-full p-4">{children}</div>
    </div>
  );
}
