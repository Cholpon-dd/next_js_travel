import AllDestinations from '@/components/country/AllDestinations'


const Destinations = ({ data }) => <AllDestinations data={data}/>
export default Destinations


export async function getStaticProps() {
    const {events_categories} = await import ('/data/data.json')

    return {
        props: {
            data: events_categories
        }
    }
}
