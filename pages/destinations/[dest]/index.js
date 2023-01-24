import DestinationsCountry from "@/components/country/DestinationsCountry"

const Country = ({ data, pageName }) => {
    return (
        <DestinationsCountry data={data} pageName={pageName}/>
    )
}

export default Country

export async function getStaticPaths() {
    const { events_categories } = await import ('/data/data.json')
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                dest: ev.id.toString()
            }
        }
    })

    return {
        paths: allPaths,
        fallback: false
    }
}


export async function getStaticProps(context){

    const id = context?.params.dest
    const { allEvents } = await import ('/data/data.json')

    const data = allEvents.filter(ev => ev.city === id)

    return {
        props: {
            data,
            pageName: id
        }
    }
}