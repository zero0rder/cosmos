import Planet from "./planet";
import planetData from '../../../data/planets';

const Planets = () => {
    return (
        <section className='planets'>
            { planetData.map((e, i) => <Planet key={i} planet={e} /> )}
        </section>
    );
}

export default Planets;