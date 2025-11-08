import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type DashboardWrapperProps = {
  children: React.ReactNode;
};
export function DashboardWrapper({ children }: DashboardWrapperProps) {
  // Improve this layout
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
