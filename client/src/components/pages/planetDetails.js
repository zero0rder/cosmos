import { useParams, useLocation, Link } from "react-router-dom";
import Galaxy from "../galaxy/galaxy";

const PlanetDetails = () => {
    let { planetId } = useParams();
    let { state: {description} } = useLocation();

    return (
        <section className='planet-details-page'>
            <header>
                <span>{ planetId }</span>
            </header>
            <div className='detail-content'>
                <div className='planet-details-list'>
                    <ul>
                        <li><span>Average Temperature: </span>{ description.surfaceTemp }</li>
                        <li><span>Average Distance from Sun: </span>{ description.distanceSun }</li>
                        <li><span>Diameter: </span>{ description.diameter }</li>
                        <li><span>Volume: </span>{ description.volume }</li>
                        <li><span>Gravity: </span>{ description.gravity }</li>
                        <li><span>Solar Day: </span>{ description.earthDay }</li>
                        <li><span>Solar Year: </span>{ description.earthYear }</li>
                        <li><span>Atmosphere: </span>{ description.atmosphere }</li>
                    </ul>
                </div>
                <Galaxy planet={ planetId }/>
            </div>
            <div className='buynow-button'>
                <Link to={'booknow'}>Book Now</Link>
            </div>
        </section>
    );
}

export default PlanetDetails;