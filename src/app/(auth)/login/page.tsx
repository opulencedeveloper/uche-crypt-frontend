import LoginForm from "@/components/application/login/form";
import { Suspense } from "react";

export default function Page() {
  return (
    <section className="w-full h-max flex flex-col items-center">
      <Suspense fallback={<p></p>}>
        <LoginForm />
      </Suspense>
    </section>
  );
}
