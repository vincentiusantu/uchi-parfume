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

export default function Hero() {
  return (
    <motion.main
        variants={variants}
        initial="hidden"
        animate="show"
      >
    <div>
      <div className="relative h-screen flex flex-col items-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/home.jpg')" }}>
        <motion.div variants={content} className="bg-white/30 text-gray-50 text-shadow-lg/30 mt-8 px-6 py-4 rounded-xl shadow-lg backdrop-blur-xs border border-gray-50">
          <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight ">
            PARFUME KEREN <br /> NAIKIN MOOD 100%
          </h1>
        </motion.div>
      </div>
      <motion.div variants={content} className="flex justify-center text-center py-8 my-8 text-s">
        <p>
          Selamat datang di Uchi Parfume! Temukan keharuman yang mampu merefleksikan karakter <br />
          profesional dan percaya diri Anda. Kami hadir untuk memberikan sentuhan aroma elegan yang <br />
          cocok menemani aktivitas di dunia kerja maupun keseharian Anda. Di sini, Anda dapat menjelajahi <br />
          beragam pilihan parfum eksklusif dengan nuansa fun dan modern yang dirancang khusus untuk <br />
          Anda yang aktif, dinamis, dan selalu ingin tampil memikat. Temukan parfum favorit Anda disini!
        </p>
      </motion.div>
    </div>
    </motion.main>
  );
}