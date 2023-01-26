import Link from 'next/link';
import Image from 'next/image';
import styles from './Destinations.module.css';

const DestinationsCountry = ({ data, pageName }) => {
  return (
    <div className="px-5 mx-auto">
      <h2 className="font-bold text-center text-3xl capitalize py-10 md:text-4xl mt-10 mb-10 lg:text-5xl  lg:mt-20 text-slate-800">
        Trip to {pageName}
      </h2>

      <div className="flex md:flex-wrap flex-col gap-20">
        {data.map(({ id, city, imageDesc, title, shortdesc }) => (
          <div key={id} className={`${styles.card}`}>
            <Image src={imageDesc} alt={title} width={400} height={300} className={styles.img} />
            <div className={styles.content}>
              <h3 className="sm:text-lg md:text-3xl  text-white uppercase mb-2">{title}</h3>
              <p className="sm:text-md md:text-lg text-white">{shortdesc}</p>
              <Link
                key={id}
                href={`/destinations/${city}/${id}`}
                className="font-bold text-purple-800"
              >
                Learn more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsCountry;
