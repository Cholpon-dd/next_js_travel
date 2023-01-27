import Image from 'next/image';
import headset from '../../public/image/icons/headset.svg';
import plane from '../../public/image/icons/plane.svg';
import check from '../../public/image/icons/check.svg';
import visa from '../../public/image/icons/visa.svg';

const Advantage = () => {
  return (
    <div className="md:flex max-w-7xl mx-auto">
      {/* className="flex items-center justify-around px-2 mb-16" */}
      <div className="flex items-center flex-col">
        <Image src={headset} alt="headset" width={48} height={48} className="" />
        <h3 className="md:pt-4 pb-2 text-2xl text-slate-800 font-bold lg:text-xl">CUSTOMER CARE</h3>
        <p className="md:w-full text-xl lg:w-[85%] lg:text-lg">
          A team ready to assist you with your inquiries. Feel free to contact us for more
          information.
        </p>
      </div>
      <div className="flex items-center flex-col">
        <Image src={check} alt="protect" width={48} height={48} />
        <h3 className="md:pt-4 pb-2 text-2xl text-slate-800 font-bold lg:text-xl">QUALITY</h3>
        <p className="md:w-full text-xl lg:w-[85%] lg:text-lg">
          Our tour products are known for their exclusivity with exceptional quality and value.
        </p>
      </div>
      <div className="flex items-center flex-col">
        <Image src={plane} alt="pyramid" width={48} height={48} className="md:mb-2" />
        <h3 className="md:pt-4 pb-2 text-2xl text-slate-800 font-bold lg:text-xl">
          MEMORABLE EXPERIENCES
        </h3>
        <p className="md:w-full text-xl lg:w-[85%] lg:text-lg">
          Browse and book tours and activities so incredible, you’ll want to tell your friends.
        </p>
      </div>
      <div className="flex items-center flex-col">
        <Image src={visa} alt="visa cart" width={48} height={48} />
        <h3 className="md:pt-4 pb-2 text-2xl text-slate-800 font-bold lg:text-xl">
          BEST GUARANTEED RATE
        </h3>
        <p className="md:w-full text-xl lg:w-[85%] lg:text-lg">
          We make sure that you get a total satisfaction according to your budget.
        </p>
      </div>
    </div>
  );
};

export default Advantage;
