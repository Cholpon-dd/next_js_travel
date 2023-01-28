import Image from 'next/image';

const Mission = () => {
  return (
    <div className="h-auto mx-14 my-16" id="mission">
      <h2 className="text-center text-5xl md:text-4xl lg:text-5xl my-10 lg:mt-20 text-slate-800 capitalize">
        We make your travel easier
      </h2>
      <div className="grid sm:grid-cols-1 text-2xl md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-slate-700">We don't just plan travel.</h3>
          <h3 className="text-2xl font-semibold pb-3 text-slate-700">We live and breathe it.</h3>
          <p className="text-xl leading-7 text-slate-600">
            Our team of in-the-know travel experts crafts immersive, experiential itineraries in 87
            countries and on all seven continents. We take care of every last logistical detail so
            that you can spend every second soaking it all in. We think travel's pretty magical.
            And, whether you're traveling with a group, a few close friends, or solo, we can't wait
            to share it with you.
          </p>
        </div>
        <div>
          <Image
            src="/image/gallery/direct.jpg"
            width={450}
            height={250}
            alt="trip"
            className="object-cover h-64 rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
