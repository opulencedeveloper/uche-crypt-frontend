import RegisterForm from "@/components/application/register/form";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "SIGN UP",
  description:
    "This exclusive member portal gives you access to comprehensive lessons on crypto trading, blockchain technology, DeFi strategies, and much more. Stay connected to your learning journey, track your progress, and dive into actionable strategies that empower you to thrive in the crypto market.",
  keywords: [
    "Sign up",
    "crypto course access",
    "cryptocurrency mastery",
    "DeFi strategies",
    "blockchain technology",
    "crypto trading",
    "digital assets course",
    "financial success",
    "crypto market",
  ],
};

export default function Page() {
  return (
    <section className="w-full h-max flex flex-col items-center">
      <Suspense fallback={<p></p>}>
        <RegisterForm />
      </Suspense>
    </section>
  );
}
