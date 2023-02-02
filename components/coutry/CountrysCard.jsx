import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, textContainer } from '@/variants';

const CountrysCard = ({ data }) => {
  return (
    <div>
      <h2 className="text-center text-5xl my-10 lg:mt-20 text-slate-800 capitalize">
        Popular Destinations
      </h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex min-h-screen items-center justify-center"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {data.map(({ id, imageHome, title, idx }) => (
            <motion.div
              variants={textContainer(idx * 0.5, 0.75)}
              key={id}
              className="group relative cursor-pointer items-center justify-center overflow-hidden
            transition-shadow hover:shadow-xl hover:shadow-black/30"
            >
              <div className="h-96 w-72">
                <Image
                  src={imageHome}
                  alt="city"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-800 group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70" />
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {title}
                </p>
                <Link href={`/destinations/${id}`}>
                  <button className="rounded-lg bg-cyan-800 py-3 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                    See More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CountrysCard;
