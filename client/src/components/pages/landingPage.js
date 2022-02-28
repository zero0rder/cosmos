import Galaxy from "../galaxy/galaxy";
import Planets from "../galaxy/planets/planets";

const LandingPage = () => {

    return (
        <section className='landing-page'>
            <Planets />
            {/* <Galaxy /> */}
        </section>
    );
}

export default LandingPage;