import Navbar from "@/components/Navbar";
import Produk from "@/components/Produk";
import Footer from "@/components/Footer";

export default function ProdukPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Produk />
      </main>
      <Footer />
    </>
  );
}