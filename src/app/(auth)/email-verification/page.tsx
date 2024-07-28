import EmailVerificationForm from "@/components/application/email-verification/form";

export default function Page() {
  return (
    <section className="w-full h-max overflow-y-auto max-h-full flex flex-col items-center">
      <EmailVerificationForm />
    </section>
  );
}
