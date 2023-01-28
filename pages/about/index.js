import Image from "next/image"
import about from '../../public/image//gallery/about/travel.jpeg'

const team = [
    {id: '1', name: 'Lora Orlando', image:"/image/gallery/about/girl_phone.avif"},
    {id: '2', name: 'Diego Tito', image:"/image/gallery/about/man_nasa.avif"},
    {id: '3', name: 'Mary Golvany', image:"/image/gallery/about/girl_camera.avif"},
    {id: '6', name: 'Fahty Ferat', image:"/image/gallery/about/man_trkey.avif"},
    {id: '7', name: 'Tony Serghios', image:"/image/gallery/about/man_camera.avif"},
    {id: '5', name: 'Christina Syrus', image:"/image/gallery/about/girl_city.avif"},
    {id: '4', name: 'Marco Nati', image:"/image/gallery/about/man_green.avif"},
    {id: '8', name: 'Sonya Lee', image:"/image/gallery/about/asian_girl.avif"},

]
const About = () => {
    return (
        <section className="h-auto px-5 mx-14">
            <h2 className="font-bold text-center text-3xl py-10 md:text-4xl mt-8 lg:text-5xl capitalize lg:mt-20 text-slate-800">About us</h2>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-4xl text-center font-semibold mb-2 text-slate-700">Why travel with us</h3>
                    <ul className="text-xl leading-7 text-slate-600 list-disc">
                        <li className="mb-2">We offer 175+ immersive, guided tours around the world. Wherever you choose to go,
                       you'll enjoy lots of advantages that make traveling with us different.
                       </li> 
                       <li className="mb-2">While you're
                       deciding what to take, we'll be busy arranging your hotels, meals, tickets, and more
                       tour essentials. Set off on a life-changing, horizon-expanding adventure with peace of
                       mind knowing that we've got you covered every step of the way.
                       </li> 
                       <li className="mb-2">When you're on tour, you
                       won't just learn about local life. You'll live it. We'll take you inside workshops,
                       kitchens, homes, and other private spaces where locals bring their trades and
                       time-honored traditions to life—and where you can, too. 
                       </li>
                       </ul>
                </div>
                <div>
                    <Image src="/image/gallery/about/mountain.jpg"
                    width={600} height={300}  alt="trip"
                    className="object-cover rounded-md"/>
                </div>
            </div>
            <div className="mt-10" id="team">
                <h2 className="text-center text-slate-800 text-4xl font-semibold pb-8 capitalize">We are the Travel Experts</h2>
                <p className="text-center mb-8 text-xl  text-slate-700">Our team of experienced tour specialists have travelled to hundreds of countries around the globe and have decades of first-hand travel experience to share. Contact us now to have all of your tour-related questions answered!</p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {team.map(({id, name, image}) => (
                        <div key={id} className="bg-white h-80 w-64 shadow-md relative">
                            <p className="absolute bottom-0 left-0 right-0 text-xl font-semibold  py-2 px-11 bg-gray-600 bg-clip-padding backdrop-filter 
                               backdrop-blur-sm bg-opacity-20 border border-gray-100 text-white text-center">{name}</p>
                            <Image src={image} width={800} height={600} alt='team'
                            className="h-80 w-64 object-cover"  />
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
        
    )
}
export default About