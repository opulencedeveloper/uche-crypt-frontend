import AuthenticationLayout from "@/layouts/authentication";
import RegisterForm from "@/components/application/register/form";

export default function Page() {
  return (
    <AuthenticationLayout>
      <section className="w-full h-max max-h-full overflow-y-auto flex flex-col items-center">
        <RegisterForm />
      </section>
    </AuthenticationLayout>
  );
}
