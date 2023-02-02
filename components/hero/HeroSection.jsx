import { motion } from 'framer-motion';
const HeroSection = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-around
  relative h-screen"
    >
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.4,
          duration: 0.75,
        }}
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="bg-hero-pattern bg-cover w-full h-screen absolute top-0 -z-10 bg-fixed"
      />

      <div
        className="h-full w-full bg-gradient-to-b from-black/10 to-black/50
      absolute top-0 z-0"
      />
      <motion.div className="flex flex-col items-center justify-between z-10">
        <h1 className="text-4xl font-bold uppercase text-center tracking-wider pb-4 text-white">
          Adventure begins here
        </h1>
        <h2 className="text-3xl font-semibold text-center text-white">
          Choose from thousands of organized adventures
        </h2>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.9,
          }}
          className="relative border-2 border-r-white  bg-transparent py-2 px-5 font-medium uppercase
         transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-cyan-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100  rounded-md z-10 w-32 h-10 text-white mt-14"
        >
          Explore
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
