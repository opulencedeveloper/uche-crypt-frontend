"use client";
import Footer from "@/components/application/footer";
import Navigation from "@/components/application/guest-layout/navigation";

import Cookies from "js-cookie";
import { useUser } from "@/contexts/user";
import { useAuth } from "@/hooks/auth";
import { useEffect } from "react";
import AdminDashboardNavigation from "@/components/application/admin/dashboard/admin-dashboard-navigation";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user }: any = useUser();
  const { fetchUser } = useAuth();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token && !user) {
      fetchUser({ token });
    }
  }, []);

  return (
    <main className="w-full h-dvh flex ">
      <AdminDashboardNavigation/>
      {children}
     
    </main>
  );
}
