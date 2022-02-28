const Galaxy = ({ planet }) => {
    if (planet == undefined) planet = 'home';
    
    return (
        <iframe loading='lazy' width='500' height='500'
         data-src={'https://eyes.nasa.gov/apps/orrery/#/' + planet } 
         allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' 
         src={'https://eyes.nasa.gov/apps/orrery/#/' + planet }></iframe>

    );
}


export default Galaxy;