import { Suspense } from "react";
import ResetPasswordForm from "@/components/application/reset-password/form";

export default function Page() {
  return (
    <section className="w-full h-max flex flex-col items-center">
      <Suspense fallback="Redirecting...">
        <ResetPasswordForm />
      </Suspense>
    </section>
  );
}
