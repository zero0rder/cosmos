import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import shipData from '../../data/ships';

let initialFormState = {
    firstname: '',
    lastname: '',
    email: '',
    message: '',
    ship: ''
};

const BookNow = () => {
    const [formState, setFormState ] = useState(initialFormState);
    const { planetId } = useParams();
    const navigate = useNavigate();
    
    const submitForm = (e) => {
        e.preventDefault();
        navigate('/confirmation', { state: { planet: planetId, formData: formState } })
    }

    const handleChange = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setFormState({...formState, [name]: value});
    }

    return (
        <section className='booknow-page'>
            <div className='form-container'>
                <h2>Personal Info</h2>
                <form onSubmit={submitForm}>
                    <label>
                        <span>First Name</span>
                        <input value={ formState.firstname } onChange={ handleChange } type='text' name='firstname' />
                    </label>
                    <label>
                        <span>Last Name</span>
                        <input value={ formState.lastname } onChange={ handleChange } type='text' name='lastname' />
                    </label>
                    <label>
                        <span>Email</span>
                        <input value={ formState.email } onChange={ handleChange } type='text' name='email' />
                    </label>
                    <label>
                        <span>Select Ship:</span>
                        <select value={formState.ship} onChange={ handleChange } name='ship'>
                            <option value={''}></option>
                            { shipData.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)}
                        </select>
                    </label>
                    <label className='message-label'>
                        <span>Message</span>
                        <textarea value={ formState.message } onChange={ handleChange } type='text' name='message' />
                    </label>
                    <div className='submit-container'>
                        <input type='submit' value='Submit' />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default BookNow;