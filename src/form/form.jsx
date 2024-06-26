/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './form.module.css';

export default function Form({setIsModalOpen}){
    const [formData, setFormData] = useState({
        "username": '',
        "email": '',
        "phone": '',
        "dob": '',
    })

    const handleChange = (e) => {
        const {id, value} = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    }

    const handleSubmit= (e) => {
        e.preventDefault();

        if(!formData.email.includes('@')){
            alert("Invalid email. Please check your email address.");
            return;
        }

        if (formData.phone.length !== 10 || isNaN(formData.phone)) {
            alert("**Invalid phone number. Please enter a 10-digit phone number.");
            return;
        }

        if (new Date(formData.dob) > new Date()) {
            alert('Invalid date of birth. Date of birth cannot be in future');
            return;
        }

        setIsModalOpen(false);
        setFormData({
        username: '',
        email: '',
        dob: '',
        phone: ''
        });
    }

    return(
        <div className={styles.formWrapper}>
            <h2>Fill Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>Username:</label>
                <input required 
                    type='text' 
                    id='username'
                    value={formData.username}
                    onChange={handleChange}
                />

                <label htmlFor='email'>Email:</label>
                <input required 
                    type="email" 
                    id='email'
                    value={formData.email}
                    onChange={handleChange} 
                />

                <label htmlFor='phone'>Phone Number:</label>
                <input required 
                    type='tel' 
                    id='phone'
                    value={formData.phone}
                    onChange={handleChange}
                />

                <label htmlFor='dob'>Date of Birth:</label>
                <input required 
                    type='date' 
                    id='dob'
                    value={formData.dob}
                    onChange={handleChange}
                />

                <button type='submit' className='submit-button'>Submit</button>
            </form>
        </div>
    )
}