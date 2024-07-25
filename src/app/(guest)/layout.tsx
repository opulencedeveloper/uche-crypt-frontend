import Footer from "@/components/application/footer";
import Navigation from "@/components/application/guest-layout/navigation";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full">
      <Navigation />
      {children}
      <Footer />
    </main>
  );
}
