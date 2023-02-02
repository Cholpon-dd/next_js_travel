import CountrysCard from '../coutry/CountrysCard';
import PhotoGallery from '../gallery/PhotoGallery';
import Testimonials from '../testimonials/Testimonials';
import WorldMap from '../map/Map';
import Advantage from '../advantage/Advantage';
import Mission from '../mission/Mission';

const HomePage = ({ data }) => {
  return (
    <section className="max-w-screen-xl mx-auto ">
      <Advantage />
      <CountrysCard data={data} />
      <Mission />
      <PhotoGallery />
      <Testimonials />
      <WorldMap />
    </section>
  );
};

export default HomePage;
