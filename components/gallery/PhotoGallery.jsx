import Image from 'next/image';

const PhotoGallery = () => {
  return (
    <div className="mt-16 h-auto mb-16 ">
      <h2 className="text-center text-slate-800 text-5xl pt-8 pb-8 capitalize">
        Adventures For Everyone
      </h2>
      <h4 className="text-center text-slate-800 text-4xl  pb-10 capitalize">
        Familes, Couples, Young Adults, Solo
      </h4>
      <div className="grid sm:h-auto grid-col-1 md:h-auto md:grid-cols-2 lg:grid-cols-fluid grid-flow-row-dense gap-4">
        <div className="row-span-1 flex justify-center items-center">
          <Image
            src="/image/gallery/solo3.jpeg"
            alt="family1"
            width={800}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/image/gallery/family3.jpeg"
            alt="solo2"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="row-span-2 flex justify-center items-center">
          <Image
            src="/image/gallery/solo.jpeg"
            alt="solo3"
            width={400}
            height={200}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/image/gallery/friend.jpeg"
            alt="solo4"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/image/gallery/hiking.jpg"
            alt="solo5"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/image/gallery/couple.jpeg"
            alt="solo6"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center">
          <Image
            src="/image/gallery/mountain.jpg"
            alt="solo6"
            width={600}
            height={400}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
