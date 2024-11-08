import RegisterForm from "@/components/application/register/form";
import { Suspense } from "react";

export default function Page() {
  return (
    <section className="w-full h-max flex flex-col items-center">
      <Suspense fallback={<p></p>}>
        <RegisterForm />
      </Suspense>
    </section>
  );
}
