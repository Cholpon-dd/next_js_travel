import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Destinations.module.css';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

const Description = ({ data }) => {
  const { title, image, image2, image3, description } = data || {};
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto py-4">
      <motion.h2
        variants={fadeIn('up', 'tween', 0.3, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="font-bold text-center uppercase text-3xl py-10 md:text-4xl lg:text-5xl  lg:mt-20 text-slate-800"
      >
        {title}
      </motion.h2>
      <div
        className={`${styles.container} grid sm:grid-cols-1 md:h-auto grid-cols-2 lg:h-auto object-cover mb-10`}
      >
        <Image width={600} height={600} src={image} alt={title} className={styles.foto1} />
        <Image width={400} height={330} src={image2} alt={title} className={styles.foto2} />
        <Image width={400} height={400} src={image3} alt={title} className={styles.foto3} />
      </div>
      <p className="text-lg leading-7 text-slate-600 border-solid border-slate-400 border-2 rounded-md px-3 py-4">
        {description}
      </p>
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={() => router.back()}
          className="relative mt-10  mb-4  text-center shadow-md self-center bg-cyan-600 py-2 px-5 font-medium uppercase
              transition-colors before:absolute before:left-0 before:top-0 before:rounded-md before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-cyan-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 rounded-md z-10 w-32 h-10 text-white"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Description;
