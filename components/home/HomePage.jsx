import CountrysCard from '../coutry/CountrysCard';
import PhotoGallery from '../gallery/PhotoGallery';
import Testimonials from '../testimonials/Testimonials';
import Direct from '../direct/Direct';
import WorldMap from '../map/Map';
import Advantage from '../advantage/Advantage';

const HomePage = ({ data }) => {
  return (
    <section className="max-w-screen-xl mx-auto ">
      <h2 className="text-center text-slate-800 text-5xl pt-8 pb-10">Why travel with us?</h2>
      <Advantage />
      <h2 className="text-center text-5xl md:text-4xl lg:text-5xl my-10 lg:mt-20 text-slate-800 capitalize">
        Popular Destinations
      </h2>
      <CountrysCard data={data} />
      <Direct />
      <PhotoGallery />
      <Testimonials />
      <WorldMap />
    </section>
  );
};

export default HomePage;
