import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type DashboardWrapperProps = {
  children: React.ReactNode;
};

// Instantiate real data
export function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
