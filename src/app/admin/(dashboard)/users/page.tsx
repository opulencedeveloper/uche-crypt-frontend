import { Metadata } from "next";

import AdminDashboardHeader from "@/components/application/admin/dashboard/ui/admin-dashboard-header";
import AdminUserBody from "@/components/application/admin/dashboard/users/admin-user-body";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  // description:
  //   "This exclusive member portal gives you access to comprehensive lessons on crypto trading, blockchain technology, DeFi strategies, and much more. Stay connected to your learning journey, track your progress, and dive into actionable strategies that empower you to thrive in the crypto market.",
  // keywords: [
  //   "Sign in",
  //   "crypto course access",
  //   "cryptocurrency mastery",
  //   "DeFi strategies",
  //   "blockchain technology",
  //   "crypto trading",
  //   "digital assets course",
  //   "financial success",
  //   "crypto market",
  // ],
};

export default function Page() {
  return (
    <section className="w-full h-dvh overflow-y-auto pb-7">
      <AdminDashboardHeader title="Users" subtitle="Manage users and their referral percentages" />
        <AdminUserBody />
    </section>
  );
}
