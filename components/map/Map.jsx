import Image from 'next/image';
import styles from './Map.module.css';
import { motion } from 'framer-motion';
import { fadeIn, textContainer } from '@/variants';

const WorldMap = () => {
  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-auto mx-14 my-16"
    >
      <motion.h2
        variants={textContainer}
        className="text-center text-5xl my-10 lg:mt-20 text-slate-800 capitalize"
      >
        With us you will receive
      </motion.h2>
      <motion.div
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="flex justify-between items-center mb-24"
      >
        <ol className={styles.list}>
          <li className="font-bold text-2xl text-slate-800">
            Best offers at low prices
            <p className="font-normal text-lg text-slate-600 px-2 py-3">
              Only here you can find the best tours at the lower prices. Because it is important for
              us that you explore the world.
            </p>
          </li>
          <li className="font-bold text-2xl text-slate-800">
            Any payment methods
            <p className="font-normal text-lg text-slate-600 px-2 py-3">
              We accept all types of payments for your convenience.
            </p>
          </li>
          <li className="font-bold text-2xl text-slate-800">
            Order tracking
            <p className="font-normal text-lg text-slate-600 px-2 py-3">
              You can easily track the stages of your order and change if necessary.
            </p>
          </li>
        </ol>
        <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className="relative">
          <Image
            src="/image/gallery/bridge.jpeg"
            alt="bridge"
            width={600}
            height={400}
            priority
            className={styles.img}
          />
          <Image
            src="/image/gallery/kmaoto.jpg"
            alt="field"
            width={600}
            height={400}
            priority
            className={`${styles.img} ${styles.img2}`}
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 2)}
        className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 mt-4"
      >
        <motion.div variants={fadeIn('up', 'tween', 0.4, 2)}>
          <Image
            src="/image/gallery/world-map2.png"
            alt="map"
            width={600}
            height={400}
            priority
            className="rounded-md"
          />
        </motion.div>
        <motion.div
          variants={fadeIn('up', 'tween', 0.4, 2)}
          className="font-bold text-2xl text-slate-800"
        >
          <h3 className="capitalize">Historical places, forests, mountains, sea.</h3>
          <h3 className="capitalize">Where do you want?</h3>
          <p className="font-normal text-lg text-slate-600 px-2 py-3">
            We will send you anywhere in the world, all that remains is to book now.
          </p>
          <p className="font-normal text-lg text-slate-600 px-2 py-3">
            With 24/7 customer service, flexible booking conditions and extensive insurance options,
            we are there for you when plans change.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorldMap;
