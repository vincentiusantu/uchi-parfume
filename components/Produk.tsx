  import { motion } from "framer-motion";

  const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
}

const content = {
    hidden: {
        opacity: 0,
        y: 30
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1
        }
    }
}
  
  const products = [
    {
      name: "APRODISIAQ",
      description: "Woods Parfume",
      image: "/aprodisiaq.png",
      price: "Rp134.680",
    },
    {
      name: "ZAMZAM",
      description: "Oriental Soft Oriental",
      image: "/zamzam.png",
      price: "Rp134.680",
    },
    {
      name: "MYSTIC RUBY",
      description: "Mossy Woods Parfume",
      image: "/mystic.png",
      price: "Rp134.680",
    },
    {
      name: "DOGA VULCANO",
      description: "Woods Parfume",
      image: "/doga.png",
      price: "Rp134.680",
    },
  ];

export default function Produk() {
  return (
   <motion.main
        variants={variants}
        initial="hidden"
        animate="show"
      >

    <div>
      <div className="relative h-screen flex justify-end px-8 items-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/produk.png')" }}>
        <motion.div variants={content} className="bg-white/30 text-gray-50 text-shadow-lg/20 mt-8 px-8 py-8 rounded-xl shadow-lg backdrop-blur-xs border border-gray-50">
          <h1 className="text-3xl md:text-5xl leading-tight ">
            <span className="font-thin">Wangi</span><br />
            <span className="font-bold">Dimana</span> <span className="font-thin">aja,</span><br />
            <span className="font-bold">Kapan</span> <span className="font-thin">Kita</span>
          </h1>
          <p>
            Parfume yang 100% cocok buat kamu si paling aktif!
          </p>
          <br />
          <button className="border border-gray-50 bg-white/30 text-shadow-lg text-gray-50 text-sm px-4 py-1 rounded-xl hover:bg-gray-100 hover:text-gray-500 font-semibold">
            Yuk Cari Tahu!
          </button>
        </motion.div>
      </div>
      <motion.div variants={content} className="my-8">
        <p className="text-center text-blue-800 text-3xl font-bold">Produk Kita</p>
        <br />
        <br />
        <p className="text-center text-gray-800 text-md font-thin">Katalog</p>
        <br />
        <hr />
        <br />
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 my-8 mx-8">
            {products.map((product, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
                >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                  />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <h3 className={
                  `absolute top-4 left-4 text-xl font-extrabold leading-tight tracking-wide ${
                    product.name === 'ZAMZAM'
                    ? "text-gray-600"
                    : "text-white"
                  }`
                }>
                    {product.name.split(" ").map((part, i) => (
                      <span key={i} className="block">
                        {part}
                      </span>
                    ))}
                  </h3>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-sm font-medium">{product.price}</p>
                    <button className="bg-white text-gray-900 text-sm px-4 py-1 rounded hover:bg-gray-100 font-semibold">
                      Beli Sekarang
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br />
          <br />
      </motion.div>
    </div>
</motion.main>
  );
}