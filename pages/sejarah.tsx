import Navbar from "@/components/Navbar";
import Sejarah from "@/components/Sejarah";
import Footer from "@/components/Footer";

export default function SejarahPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Sejarah />
      </main>
      <Footer />
    </>
  );
}