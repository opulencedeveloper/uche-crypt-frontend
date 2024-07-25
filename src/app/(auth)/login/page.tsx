import Link from "next/link";
import LoginForm from "@/components/application/login/form";
import AuthenticationLayout from "@/layouts/authentication";

export default function Page() {
  return (
    <AuthenticationLayout>
      <section className="w-full h-max overflow-y-auto max-h-full flex flex-col items-center">
        <LoginForm />
      </section>
    </AuthenticationLayout>
  );
}
