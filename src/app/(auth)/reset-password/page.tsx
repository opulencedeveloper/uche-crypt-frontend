import AuthenticationLayout from "@/layouts/authentication";
import ResetPasswordForm from "@/components/application/reset-password/form";

export default function Page() {
  return (
    <AuthenticationLayout>
      <section className="w-full h-max flex flex-col items-center">
        <ResetPasswordForm />
      </section>
    </AuthenticationLayout>
  );
}
