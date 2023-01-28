import Link from 'next/link';
import Image from 'next/image';
const AllDestinations = ({ data }) => {
  return (
    <section className="px-5 mx-auto">
      <h2 className="font-bold text-center text-3xl py-10 md:text-4xl mt-10 lg:text-5xl capitalize lg:mt-20 text-slate-800">
        Explore by destination
      </h2>
      <div className="mx-auto grid md:grid-cols-2 max-w-7xl lg:grid-cols-3 gap-8 pt-6 px-4 sm:grid-cols-1 lg:px-8">
        {data.map(({ id, image, title, description }) => (
          <div
            key={id}
            className="shadow-md w-full rounded-xl rounded-tl-[90px] rounded-tr-[90px] relative overflow-hidden flex flex-col"
          >
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="h-64 object-cover rounded-t-lg md:h-80
              hover:scale-110 ease-in-out duration-300"
            />
            <h2 className="text-center text-2xl md:text-2xl font-medium text-slate-800 mt-3">
              {title}
            </h2>
            <p className="text-slate-600 my-4 px-2">{description}</p>
            <Link
              key={id}
              href={`/destinations/${id}`}
              className="relative mt-auto mb-4 inline-block text-center shadow-md self-center bg-cyan-600 py-2 px-5 font-medium uppercase
              transition-colors before:absolute before:left-0 before:top-0 before:rounded-md before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-cyan-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100 rounded-md z-10 w-32 h-10 text-white"
            >
              Explore
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllDestinations;
