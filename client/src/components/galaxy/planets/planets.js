import Planet from "./planet";
import PlanetData from '../../../data/planets';

const Planets = () => {
    return (
        <section className='planets'>
            { PlanetData.map((e, i) => <Planet key={i} planet={e} /> )}
        </section>
    );
}

export default Planets;