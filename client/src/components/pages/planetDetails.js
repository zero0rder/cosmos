import { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import Galaxy from "../galaxy/galaxy";
import planetData from '../../data/planets';

const PlanetDetails = () => {
    const [descData, setDescData] = useState(null);
    const { planetId } = useParams();

    useEffect(() => {
        const currentPlanet = planetData.find(e => e.name == planetId);
        setDescData(currentPlanet.description);
    }, []);
    
    return (
        <section className='planet-details-page'>
            <header>
                <span>{ planetId }</span>
            </header>
            <div className='detail-content'>
                <div className='planet-details-list'>
                    <ul>
                        <li><span>Average Temperature: </span>{ descData?.surfaceTemp }</li>
                        <li><span>Average Distance from Sun: </span>{ descData?.distanceSun }</li>
                        <li><span>Diameter: </span>{ descData?.diameter }</li>
                        <li><span>Volume: </span>{ descData?.volume }</li>
                        <li><span>Gravity: </span>{ descData?.gravity }</li>
                        <li><span>Solar Day: </span>{ descData?.earthDay }</li>
                        <li><span>Solar Year: </span>{ descData?.earthYear }</li>
                        <li><span>Atmosphere: </span>{ descData?.atmosphere }</li>
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