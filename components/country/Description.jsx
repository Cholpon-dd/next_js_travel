import Image from 'next/image';
import styles from './Destinations.module.css';
const Description = ({ data }) => {
  const { title, image, image2, image3, description, address } = data || {};
  return (
    <div className="max-w-7xl mx-auto py-4">
      <h2 className="font-bold text-center uppercase text-3xl py-10 md:text-4xl lg:text-5xl  lg:mt-20 text-slate-800">
        {title}
      </h2>
      <div
        className={`${styles.container} grid md:h-auto grid-cols-2 lg:h-auto object-cover mb-10`}
      >
        <Image width={600} height={600} src={image} alt={title} className={styles.foto1} />
        <Image width={400} height={330} src={image2} alt={title} className={styles.foto2} />
        <Image width={400} height={400} src={image3} alt={title} className={styles.foto3} />
      </div>
      <p className="text-lg leading-7 text-slate-600 border-solid border-slate-400 border-2 rounded-md px-3 py-4">
        {description}
      </p>
    </div>
  );
};

export default Description;
