import { Link } from 'react-router-dom';

const Planet = ({ planet }) => {

    return (
        <section className='planet'>
            <div>
                <Link to={ 'details/' + planet.name } state={{ description: planet.description }}>
                    { planet.name }
                </Link>
            </div>
        </section>
    );
}

export default Planet;