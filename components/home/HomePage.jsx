import Image from 'next/image';
import headset from '../../public/image/icons/headset.svg';
import plane from '../../public/image/icons/plane.svg';
import check from '../../public/image/icons/check.svg';
import visa from '../../public/image/icons/visa.svg';
import CountrysCard from '../coutry/CountrysCard';

const HomePage = ({ data }) => {
  return (
    <section className="max-w-screen-xl mx-auto ">
      <h2 className="text-center text-slate-800 text-5xl pt-8 pb-10">Why travel with us?</h2>
      <div className="flex items-center justify-around px-2 mb-16">
        <div className="flex items-center flex-col">
          <Image src={headset} alt="headset" width={48} height={48} className="" />
          <h3 className="pt-4 pb-2">CUSTOMER CARE</h3>
          <p className="w-[85%]">
            A team ready to assist you with your inquiries. Feel free to contact us for more
            information.
          </p>
        </div>
        <div className="flex items-center flex-col">
          <Image src={check} alt="protect" width={48} height={48} className="" />
          <h3 className="pt-4 pb-2">QUALITY</h3>
          <p className="w-[85%]">
            Our tour products are known for their exclusivity with exceptional quality and value.
          </p>
        </div>
        <div className="flex items-center flex-col">
          <Image src={plane} alt="pyramid" width={48} height={48} />
          <h3 className="pt-4 pb-2">MEMORABLE EXPERIENCES</h3>
          <p className="w-[85%]">
            Browse and book tours and activities so incredible, you’ll want to tell your friends.
          </p>
        </div>
        <div className="flex items-center flex-col">
          <Image src={visa} alt="visa cart" width={48} height={48} />
          <h3 className="pt-4 pb-2">BEST GUARANTEED RATE</h3>
          <p className="w-[85%]">
            We make sure that you get a total satisfaction according to your budget.
          </p>
        </div>
      </div>
      <h2 className="text-center text-5xl md:text-4xl lg:text-5xl my-10 lg:mt-20 text-slate-800 capitalize">
        Popular Destinations
      </h2>
      <CountrysCard data={data} />
    </section>
  );
};

export default HomePage;
