import Image from 'next/image';
import styles from '../map/Map.module.css';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant2, fadeIn } from '@/variants';
const advan = [
  {
    id: 1,
    title: 'CUSTOMER CARE',
    image: '/image/icons/headset.svg',
    description:
      'A team ready to assist you with your inquiries. Feel free to contact us for more information.',
  },
  {
    id: 2,
    title: 'QUALITY',
    image: '/image/icons/plane.svg',
    description:
      'Our tour products are known for their exclusivity with exceptional quality and value.',
  },
  {
    id: 3,
    title: 'MEMORABLE EXPERIENCES',
    image: '/image/icons/check.svg',
    description:
      'Browse and book tours and activities so incredible, you will want to tell your friends.',
  },
  {
    id: 4,
    title: ' BEST GUARANTEED RATE',
    image: '/image/icons/visa.svg',
    description: 'We make sure that you get a total satisfaction according to your budget.',
  },
];

const Advantage = () => {
  return (
    <div>
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-center text-slate-800 text-5xl pt-8 pb-10 capitalize"
      >
        Why travel with us?
      </motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col sm:gap-2 md:flex-row md:gap-4 max-w-7xl mx-auto"
        id="advantage"
      >
        {advan.map(({ id, title, image, description, index }) => (
          <motion.div
            key={id}
            variants={fadeIn('right', 'spring', index * 1, 0.98)}
            className="flex items-center flex-col border rounded-md bg-white pt-3 pb-3 md:w-1/3 transition duration-100 ease-in-out"
          >
            <Image src={image} alt="title" width={36} height={36} className={styles.icons} />
            <h3 className="md:pt-4 pb-2 text-2xl text-slate-700 font-bold md:text-xl">{title}</h3>
            <p className="text-xl text-slate-600 md:w-2/3 md:text-lg lg:w-[85%] ">{description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Advantage;
