import Planet from "./planet";
import planetData from '../../../data/planets';

const Planets = () => {
    return (
        <section className='planets'>
            <header>
                <span>Destinations</span>
            </header>
            { planetData.map((e, i) => <Planet key={i} planet={e} /> )}
        </section>
    );
}

export default Planets;