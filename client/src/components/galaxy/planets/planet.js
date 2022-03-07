import { Link } from 'react-router-dom';

const Planet = ({ planetName }) => {

    return (
        <section className='planet'>
            <div>
                <Link to={ 'details/' + planetName }>
                    { planetName }
                </Link>
            </div>
        </section>
    );
}

export default Planet;