import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, textAnimation } from '@/variants';

const reasons = [
  {
    id: '01',
    text: 'We offer 175+ immersive, guided tours around the world. Wherever you choose to go, you will enjoy lots of advantages that make traveling with us different.',
    image: '/image/icons/check.svg',
  },
  {
    id: '02',
    text: 'While you are deciding what to take, we will be busy arranging your hotels, meals, tickets, and more tour essentials. Set off on a life-changing, horizon-expanding adventure with peace of mind nowing that we have got you covered every step of the way.',
    image: '/image/icons/check.svg',
  },
  {
    id: '01',
    text: 'When you are on tour, you will not just learn about local life. You will live it. We will take you inside workshops, kitchens, homes, and other private spaces where locals bring their trades and time-honored traditions to life—and where you can, too. ',
    image: '/image/icons/check.svg',
  },
];
const team = [
  { id: '1', name: 'Lora Orlando', image: '/image/gallery/about/girl_phone.avif' },
  { id: '2', name: 'Diego Tito', image: '/image/gallery/about/man_nasa.avif' },
  { id: '3', name: 'Mary Golvany', image: '/image/gallery/about/girl_camera.avif' },
  { id: '6', name: 'Fahty Ferat', image: '/image/gallery/about/man_trkey.avif' },
  { id: '7', name: 'Tony Serghios', image: '/image/gallery/about/man_camera.avif' },
  { id: '5', name: 'Christina Syrus', image: '/image/gallery/about/girl_city.avif' },
  { id: '4', name: 'Marco Nati', image: '/image/gallery/about/man_green.avif' },
  { id: '8', name: 'Sonya Lee', image: '/image/gallery/about/asian_girl.avif' },
];
const About = () => {
  return (
    <section className="h-auto px-5 mx-14">
      <motion.h2
        variants={textAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        custom={1}
        className="font-bold text-center text-3xl py-10 md:text-4xl mt-8 lg:text-5xl capitalize lg:mt-20 text-slate-800"
      >
        About us
      </motion.h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <motion.h3
            variants={fadeIn('right', 'tween', 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            className="sm:mb-4 text-4xl text-center font-semibold mb-2 text-slate-700"
          >
            Why travel with us
          </motion.h3>
          <motion.div
            variants={fadeIn('right', 'tween', 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            custom={3}
            className="text-xl leading-7 text-slate-600"
          >
            {reasons.map(({ id, text, image, i }) => (
              <div key={id} className="mb-2">
                <Image src={image} width={24} height={24} alt="check" className="inline mx-2" />
                <span>{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.3, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
        >
          <Image
            src="/image/gallery/about/mountain.jpg"
            width={600}
            height={300}
            alt="trip"
            className="object-cover rounded-md"
          />
        </motion.div>
      </div>
      <div className="mt-10" id="team">
        <h2 className="text-center text-slate-800 text-4xl font-semibold pb-8 capitalize">
          We are the Travel Experts
        </h2>
        <p className="text-center mb-8 text-xl  text-slate-700">
          Our team of experienced tour specialists have travelled to hundreds of countries around
          the globe and have decades of first-hand travel experience to share. Contact us now to
          have all of your tour-related questions answered!
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map(({ id, name, image, i }) => (
            <div key={id} className="bg-white h-80 w-64 shadow-md relative">
              <p
                className="absolute bottom-0 left-0 right-0 text-xl font-semibold  py-2 px-11 bg-gray-600 bg-clip-padding backdrop-filter 
                               backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white text-center"
              >
                {name}
              </p>
              <Image
                src={image}
                width={800}
                height={600}
                alt="team"
                className="h-80 w-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
