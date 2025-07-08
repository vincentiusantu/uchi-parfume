import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-10 px-6 border-t mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <img src="/logo.png" alt="Logo" className="mb-4 h-[60px]" />
          <p className='text-lg font-semibold'>Berlangganan di kita</p><br />
          <p className="text-xs">Tetap up to date dengan berita terbaru dan promo menarik.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Media Sosial</h4>
          <ul>
            <li className='flex gap-2'><img src="/instagram.webp" alt="Logo" className="mb-4 h-[20px]" />@uchiparfumeofficial</li>
            <li className='flex gap-2'><img src="/tiktok.png" alt="Logo" className="mb-4 h-[20px]" />@uchiparfumeofficial</li>
            <li className='flex gap-2'><img src="/facebook.png" alt="Logo" className="mb-4 h-[20px]" />Uchi Parfume</li>
            <li className='flex gap-2'><img src="/twitter.png" alt="Logo" className="mb-4 h-[20px]" />@UchiParfume_</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Toko Kami</h4>
          <ul>
            <li>Shopee</li>
            <li>Tokopedia</li>
            <li>Offline Store</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Halaman</h4>
          <ul>
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/sejarah">Sejarah</Link></li>
            <li><Link href="/produk">Produk</Link></li>
            <li><Link href="/tentang-kami">Tentang Kami</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-8">&copy;2025 Uchi Parfume. All rights reserved.</div>
    </footer>
  );
}