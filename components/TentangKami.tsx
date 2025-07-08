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

export default function TentangKami() {
  return (
   <motion.main
        variants={variants}
        initial="hidden"
        animate="show"
      >

    <div>
      <div>
        <div className="relative h-screen flex justify-center items-end py-8 bg-cover bg-center text-white" style={{ backgroundImage: "url('/tentangkami.png')" }}>
          <motion.div variants={content} className="bg-white/30 text-gray-50 text-shadow-lg/30 mt-8 px-6 py-8 rounded-xl shadow-lg backdrop-blur-xs border border-gray-50">
            <p className="text-md font-thin text-center leading-tight my-8">
              Uchi Parfume adalah salah satu brand Parfum Refill terbesar di Indonesia. <br />
              Eksistensinya dibuktikan melalui 500+ store yang sudah tersebar hampir di seluruh wilayah Indonesia <br />
              dan sudah berdiri sejak tahun 2003. Saat ini, eksistensinya sudah masuk dalam platform online <br />
              yang bisa kamu kunjungi kapan saja dan di mana aja. 
            </p>
            <br />
            <div className="flex justify-center">
              <button className="text-center border border-gray-50 bg-white/30 text-shadow-lg text-gray-50 text-sm px-4 py-1 rounded-xl hover:bg-gray-100 hover:text-gray-500 font-semibold">
              Yuk Cari Tahu!
              </button>
            </div>
          </motion.div>
        </div>
        <motion.div variants={content} className="grid md:grid-cols-3 gap-6 my-8 mx-8">
          <div className="bg-blue-800/75 text-gray-50 py-8 px-4 rounded shadow">
            <h4 className="font-bold">Wangi Asik, Sesuai Karakteristik</h4>
            <p>Uchi Parfume menyediakan berbagai macam aroma yang
              dapat mewaliki setiap individu</p>
          </div>
          <div className="bg-blue-800/75 text-gray-50 py-8 px-4 rounded shadow">
            <h4 className="font-bold">Parfume Berkualitas, Harga Pas</h4>
            <p>Uchi Parfume merupakan parfume berkualiatas namun
              dengan harga yang bersaing</p>
          </div>
          <div className="bg-blue-800/75 text-gray-50 py-8 px-4 rounded shadow">
            <h4 className="font-bold">Ada Dimana Mana</h4>
            <p>Uchi Parfume tersedia di berbagai kota besar di pulau Jawa</p>
          </div>
        </motion.div>
      </div>
    </div>
      </motion.main>
  );
}