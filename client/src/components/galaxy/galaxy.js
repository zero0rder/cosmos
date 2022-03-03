const Galaxy = ({ planet }) => {
    if (planet == undefined) planet = 'home';
    
    return (
        <div className="galaxy-container">
            <iframe loading='lazy' width='100%' height='500'
             data-src={'https://eyes.nasa.gov/apps/orrery/#/' + planet } 
             allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
             src={'https://eyes.nasa.gov/apps/orrery/#/' + planet }></iframe>
        </div>

    );
}


export default Galaxy;