"use client";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/auth";
import { useUser } from "@/contexts/user";

import Footer from "@/components/application/footer";
import Navigation from "@/components/application/guest-layout/navigation";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user }: any = useUser();
  const { fetchUser } = useAuth();

  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");

    if (!token) {
      router.push("/login");
    } else if (token && !user) {
      fetchUser({ token });
    }
  }, []);

  return (
    <main className="w-full">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
