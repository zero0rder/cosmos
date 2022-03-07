import Planet from "./planet";
import planetData from '../../../data/planets';

const Planets = () => {
    return (
        <section className='planets'>
            <header>
                <span>Destinations</span>
            </header>
            { planetData.map((e, i) => <Planet key={i} planetName={e.name} /> )}
        </section>
    );
}

export default Planets;