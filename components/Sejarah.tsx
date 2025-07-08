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

export default function Sejarah() {
  return (
   <motion.main
        variants={variants}
        initial="hidden"
        animate="show"
      >

    <div>
      <div className="relative h-screen flex justify-end px-8 items-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/sejarah1.png')" }}>
        <motion.div variants={content} className="bg-white/30 text-gray-50 text-shadow-lg/30 mt-8 px-6 py-4 rounded-xl shadow-lg backdrop-blur-xs border border-gray-50">
          <h1 className="text-3xl md:text-5xl text-center leading-tight ">
            <span className="font-bold">Sejarah</span> <span className="font-thin">Kita</span>
          </h1>
          <p>
            Uchi Parfume adalah perusahaan isi ulang parfum yang menyediakan <br />
            berbagai jenis parfum, mulai dari parfum lokal hingga internasional, <br />
            jenisnya dari parfum bibit hingga parfum campuran. Uchi parfume <br />
            menawarkan berbagai jenis produk isi ulang parfum dengan berbagai <br />
            varian aroma sehingga konsumen dapat memilih sesuai selera. Uchi <br />
            Parfume terletak di Jl. Gatot Subroto No. 230, Binong, Kota Bandung, <br />
            Jawa Barat.
            <br /><br />
            Uchi Parfume berdiri sejak tahun 2003 yang berawal di daerah <br />
            Ciwastra Bandung dengan kios ukuran 3 x 4 M dengan sederhana, <br />
            kemudian seiring berjalannya waktu uchi parfume banyak diminati <br />
            dan mendapat keuntungan besar kemudian mendirikan cabang di <br />
            beberapa daerah hingga saat ini cabang telah menyebar diseluruh <br />
            kawasan Indonesia.
          </p>
        </motion.div>
      </div>
      <motion.div variants={content} className="flex justify-center gap-4 my-8">
        <div>
          <img src="/sejarah2.png" alt="Logo" className="w-100 h-50 object-cover object-center rounded-lg"/>
        </div>
        <div className="bg-blue-800/75 text-gray-50 text-shadow-lg/20 px-6 py-4 rounded-xl shadow-lg backdrop-blur-xs border border-gray-50">
          <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight ">
            Dimulai tahun 2003
          </h1>
          <p>
            Bapak Zul dan istri memulai bisnis Uchi Parfume dengan membuka <br />
            toko pertama di Bandung.
          </p>
        </div>
      </motion.div>
      <motion.div variants={content} className="flex justify-center gap-4 my-8">
        <div className="bg-blue-800/75 text-gray-50 text-shadow-lg/20 px-6 py-4 rounded-xl shadow-lg backdrop-blur-xs border border-gray-50">
          <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight ">
            Perkembangan pesat
          </h1>
          <p>
            Uchi Parfume berkembang pesat dari satu toko menjadi ratusan <br />
            cabang yang tersebar di seluruh Indonesia.
          </p>
        </div>
        <div>
          <img src="/indonesia.png" alt="Logo" className="w-100 h-50 object-cover object-center rounded-lg"/>
        </div>
      </motion.div>
      <motion.div variants={content} className="flex justify-center gap-4 my-8">
        <div>
          <img src="/sejarah3.png" alt="Logo" className="w-100 h-50 object-cover object-center rounded-lg"/>
        </div>
        <div className="bg-blue-800/75 text-gray-50 text-shadow-lg/20 px-6 py-4 rounded-xl shadow-lg backdrop-blur-xs border border-gray-50">
          <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight ">
            Kualitas
          </h1>
          <p>
            Dengan lebih dari 400 cabang tersebar di seluruh wilayah Indonesia <br />
            dan lebih dari 800 varian, Uchi Parfume memastikan kualitasnya <br />
            dengan mengimpor bibit parfum langsung dari Eropa, Singapura, dan <br />
            Malaysia.
          </p>
        </div>
      </motion.div>
    </div>
    </motion.main>
  );
}