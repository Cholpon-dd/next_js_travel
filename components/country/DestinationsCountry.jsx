import Link from 'next/link';
import Image from 'next/image';
import styles from './Destinations.module.css';
import { motion } from 'framer-motion';
import { fadeIn, textAnimation } from '@/variants';

const DestinationsCountry = ({ data, pageName }) => {
  return (
    <div className="px-5 mx-auto">
      <motion.h2
        variants={textAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        custom={1}
        className="font-bold text-center text-3xl capitalize py-10 md:text-4xl mt-10 mb-10 lg:text-5xl  lg:mt-20 text-slate-800"
      >
        Trip to {pageName}
      </motion.h2>

      <div className="flex md:flex-wrap flex-col gap-20">
        {data.map(({ id, city, imageDesc, title, shortdesc }) => (
          <motion.div
            variants={fadeIn('right', 'tween', 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={2}
            key={id}
            className={`${styles.card}`}
          >
            <Image src={imageDesc} alt={title} width={400} height={300} className={styles.img} />
            <div key={id} className={styles.content}>
              <h3 className="sm:text-lg md:text-3xl  text-white uppercase mb-2">{title}</h3>
              <p className="sm:text-md md:text-lg text-white">{shortdesc}</p>
              <Link
                key={id}
                href={`/destinations/${city}/${id}`}
                className="font-extrabold text-cyan-700 leading-10"
              >
                <p className="relative group">
                  <span>Learn more</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-cyan-400 transition-all group-hover:w-full"></span>
                </p>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsCountry;
