import AuthenticationLayout from "@/layouts/authentication";
import ForgotPasswordForm from "@/components/application/forgot-password/form";

export default function Page() {
  return (
    <AuthenticationLayout>
      <section className="w-full h-max overflow-y-auto max-h-full flex flex-col items-center">
        <ForgotPasswordForm />
      </section>
    </AuthenticationLayout>
  );
}
