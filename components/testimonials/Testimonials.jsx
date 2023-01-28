import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Testimonials.module.css';
import { motion } from 'framer-motion';

const testim = [
  {
    id: '1',
    img: '/image/gallery/users/71.jpg',
    userName: 'Maria Kate',
    text: 'I can’t describe my experience with OnATrip, this was one of my first experience and hopefully way many more to come. Our guide Tony was very helpful and knowledgeable. Thank you OnATrip. My friends are already booking trips with OnATrip!!',
  },
  {
    id: '2',
    img: '/image/gallery/users/36.jpg',
    userName: 'Nanny Crowl',
    text: 'I think the trip, overall, was a huge success. Everything went as planned. I referred to that sO many times for details, using both the schedule by day and the pdf of the Final Itinerary. Both had different info that I needed to see....',
  },
  {
    id: '3',
    img: '/image/gallery/users/37.jpg',
    userName: 'Leam Jason',
    text: 'We are back from Santorini and wanted to send you a sincere thank you for helping us organize our trip.  It was indeed the trip of a lifetime and we are so grateful and appreciative of the work you did to help make it so magical. ',
  },
  {
    id: '5',
    img: '/image/gallery/users/1.jpg',
    userName: 'Paolo Debuce',
    text: 'Thank you for arranging an amazing trip. The whole trip went very smoothly and we all had our best holiday ever. The trek was the highlight and we had the best guides and the staff at all the lodges were great.',
  },
  {
    id: '4',
    img: '/image/gallery/users/51.jpg',
    userName: 'Marc Murrey',
    text: 'The trip could not have been better. Thank you again for all the effort you put in to organizing the trip. We will be sure to recommend you to anyone interested in going to Norway.',
  },

  {
    id: '6',
    img: '/image/gallery/users/19.jpg',
    userName: 'Julia West',
    text: 'It has been a couple of weeks now since our dream vacation on the Nice ended but the memories are still fresh and wonderful. ',
  },
];

const Testimonials = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="mt-16 mb-16">
      <h2 className="text-center text-slate-800 text-5xl  pb-10 capitalize">
        A customer said about us:{' '}
      </h2>
      <div ref={carousel} className={styles.carousel} id="testim">
        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="flex lg:gap-4">
          {testim.map(({ id, userName, text, img }) => (
            <div key={id} className={styles.item}>
              <p className="text-xl italic mx-auto text-slate-600">{text}</p>
              <div className="mt-12 mb-6 flex justify-center">
                <Image
                  src={img}
                  alt={userName}
                  width={400}
                  height={300}
                  className="shadow-lg w-24 h-24 rounded-full border-2 border-white"
                />
              </div>
              <p className="text-gray-700 text-center italic text-lg">{userName}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
