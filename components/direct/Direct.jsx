import Image from 'next/image';

const Direct = () => {
  return (
    <div className="h-auto mx-14 my-16">
      <h2 className="text-center text-5xl md:text-4xl lg:text-5xl my-10 lg:mt-20 text-slate-800 capitalize">
        We make your travel easier
      </h2>
      <div className="grid sm:grid-cols-1 text-2xl md:grid-cols-2 gap-10">
        <div>
          <p className="lg:text-xl leading-7 text-slate-600 ">
            We offer 175+ immersive, guided tours around the world. Wherever you choose to go,
            you’ll enjoy lots of advantages that make traveling with us different. While you’re
            deciding what to take, we’ll be busy arranging your hotels, meals, tickets, and more
            tour essentials. Set off on a life-changing, horizon-expanding adventure with peace of
            mind knowing that we’ve got you covered every step of the way. When you’re on tour, you
            won't just learn about local life. You’ll live it. We’ll take you inside workshops,
            kitchens, homes, and other private spaces where locals bring their trades and
            time-honored traditions to life—and where you can, too. Want to make pasta under the
            tutelage of an Italian chef? Or learn proper pineapple-picking techniques from a farmer
            in Costa Rica? We’re here to make it happen.
          </p>
        </div>
        <div>
          <Image
            src="/image/gallery/direct.jpg"
            width={450}
            height={150}
            alt="trip"
            className="object-cover h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Direct;
