import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { NavigationMenuDemo, SiteHeader } from "@/components/site-header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          <div className="flex flex-col flex-1">
            <main className="w-full">
              <SiteHeader />
              {/* <SidebarTrigger /> */}
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
