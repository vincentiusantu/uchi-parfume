import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const menuItems = [
    { name: "Beranda", path: "/" },
    { name: "Sejarah", path: "/sejarah" },
    { name: "Produk", path: "/produk" },
    { name: "Tentang Kami", path: "/tentang-kami" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-blue-800 text-white z-50 shadow px-6 py-4">
      <div className='flex justify-between items-center text-xs'>
        <img src="/logo-navbar.png" alt="Logo" className="h-[40px]" />
        <div className="flex gap-4">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                className={`px-4 py-2 border-2 rounded-full font-medium transition-all duration-200 ${
                  router.pathname === item.path
                    ? "border-gray-50 text-yellow-200 bg-linear-to-b from-blue-500 to-blue-800"
                    : "border-transparent text-gray-100 hover:border-gray-50 hover:text-yellow-200 hover:bg-linear-to-b hover:from-blue-500 hover:to-blue-800"
                }`}
              >
                {item.name}
              </div>
            </Link>
          ))}
        </div>
        <div className='w-12'></div>
      </div>
    </nav>
  );
}