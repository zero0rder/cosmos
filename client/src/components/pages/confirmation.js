import { useLocation } from "react-router-dom";

const Confirmation = () => {
    let { state: {formData, planet} } = useLocation();

    return (
        <section className='confirmation-page'>
            <section className='confirmation-section'>
                <p>Hello { formData.firstname }, below is confirmation for your upcoming trip to { planet }!</p>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <td>
                                    <span>Confirmation Details:</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Passenger:</td>
                                <td>{ formData.firstname + ' ' +  formData.lastname }</td>
                            </tr>
                            <tr>
                                <td>Ship:</td>
                                <td>{ formData.ship }</td>
                            </tr>
                            <tr>
                                <td>Destination:</td>
                                <td>{ planet }</td>
                            </tr>
                            <tr>
                                <td>Notes:</td>
                                <td>{ formData.message }</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td>{ formData.email }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </section>
    );
}

export default Confirmation;