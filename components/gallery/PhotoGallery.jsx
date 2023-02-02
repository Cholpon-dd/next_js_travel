'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, galleryPhotos, textVariant2 } from '@/variants';

const PhotoGallery = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mt-16 h-auto mb-16 "
    >
      <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className="text-center text-slate-800 text-5xl pt-8 pb-8 capitalize"
      >
        Adventures For Everyone
      </motion.h2>
      <h4 className="text-center text-slate-800 text-4xl  pb-10 capitalize">
        Familes, Couples, Young Adults, Solo
      </h4>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid sm:h-auto grid-col-1 md:h-auto md:grid-cols-2 lg:grid-cols-fluid grid-flow-row-dense gap-4"
      >
        <motion.div
          variants={galleryPhotos}
          initial="hidden"
          whileInView="show"
          custom={1}
          className="row-span-1 flex justify-center items-center"
        >
          <Image
            src="/image/gallery/solo3.jpeg"
            alt="family1"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={galleryPhotos}
          initial="hidden"
          whileInView="show"
          custom={2}
          className="flex justify-center items-center"
        >
          <Image
            src="/image/gallery/family3.jpeg"
            alt="solo2"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
          variants={galleryPhotos}
          initial="hidden"
          whileInView="show"
          custom={3}
          className="row-span-2 flex justify-center items-center"
        >
          <Image
            src="/image/gallery/solo.jpeg"
            alt="solo3"
            width={400}
            height={200}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={galleryPhotos}
          initial="hidden"
          whileInView="show"
          custom={4}
          className="flex justify-center items-center"
        >
          <Image
            src="/image/gallery/friend.jpeg"
            alt="solo4"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={galleryPhotos}
          initial="hidden"
          whileInView="show"
          custom={5}
          className="flex justify-center items-center"
        >
          <Image
            src="/image/gallery/hiking.jpg"
            alt="solo5"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={galleryPhotos}
          initial="hidden"
          whileInView="show"
          custom={6}
          className="flex justify-center items-center"
        >
          <Image
            src="/image/gallery/couple.jpeg"
            alt="solo6"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
        <motion.div
          variants={galleryPhotos}
          initial="hidden"
          whileInView="show"
          custom={7}
          className="flex justify-center items-center"
        >
          <Image
            src="/image/gallery/mountain.jpg"
            alt="solo6"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default PhotoGallery;
