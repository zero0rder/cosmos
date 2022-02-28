import { useParams, useLocation, Link } from "react-router-dom";
//import Galaxy from "../galaxy/galaxy";

const PlanetDetails = () => {
    let { planetId } = useParams();
    let { state: {description} } = useLocation();

    return (
        <>
            <div>{ planetId }</div>
            <div>{ description.atmosphere }</div>
            <Link to={'booknow'}>Book Now</Link>
        </>
    );
}

export default PlanetDetails;