import Navbar from "@/components/Navbar";
import TentangKami from "@/components/TentangKami";
import Footer from "@/components/Footer";

export default function TentangKamiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <TentangKami />
      </main>
      <Footer />
    </>
  );
}