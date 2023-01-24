import Link from 'next/link';
import Image from 'next/image';
const AllDestinations = ({ data }) => {
  return (
    <section className="px-5 mx-auto">
      <h2 className="font-bold text-center text-3xl py-10 md:text-4xl mt-10 lg:text-5xl  lg:mt-20 text-slate-800">
        Popular Destinations
      </h2>
      <div className="mx-auto grid md:grid-cols-2 max-w-7xl lg:grid-cols-3 gap-8 pt-6 px-4 sm:grid-cols-1 lg:px-8">
        {data.map(({ id, image, title, description }) => (
          <div key={id} className="shadow-md rounded-lg relative overflow-hidden flex flex-col">
            <Image
              src={image}
              alt={title}
              width={600}
              height={400}
              className="h-64 object-cover rounded-t-lg md:h-80
              hover:scale-110 ease-in-out duration-300"
            />
            <div className="flex-1 justify-center items-center">
              <h2 className="text-center text-2xl md:text-2xl font-medium text-slate-800 mt-3">
                {title}
              </h2>
              <p className="text-slate-600 mt-3">{description}</p>

              <Link
                key={id}
                href={`/destinations/${id}`}
                className="mt-6 block bg-cyan-500 text-white hover:bg-cyan-600 px-6 py-4 leading-4 text-center rounded-lg shadow-md"
                //     className="block text-center text-white bg-cyan-500 py-2 px-10 rounded-lg font-semibold m-4
                // hover:bg-blue-700 focus:scale-95 transition-all duration-200 ease-out"
              >
                Explore
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllDestinations;
