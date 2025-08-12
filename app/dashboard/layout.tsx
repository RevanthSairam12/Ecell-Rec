import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./dashboard.css";

export const metadata: Metadata = {
  title: "E-Cell REC Student Dashboard",
  description: "Student dashboard for E-Cell REC startup submission portal",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-layout dark min-h-screen w-full overflow-x-hidden">
      {children}
      <Toaster />
    </div>
  );
}
