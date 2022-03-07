import Galaxy from "../galaxy/galaxy";
import Planets from "../galaxy/planets/planets";

const LandingPage = () => {

    return (
        <>
            <header className='main-header-title'>
                <h1>"Travel Amongst The Stars!"</h1>
            </header>
            <section className='landing-page'>
                <Planets />
                <Galaxy />
            </section>
        </>
    );
}

export default LandingPage;