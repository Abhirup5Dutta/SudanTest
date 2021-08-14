import React from 'react'
import './CampusForm.css';

const FormSuccess = () => {
    return (
        <div className='formSuccess'>
            <h1 className="formSuccess__message">
                Thankyou
                <br />
                We have received your submission.
            </h1>
            <img src="img/img-3.svg" alt="success-image" className='formSuccess__image' />
        </div>
    )
}

export default FormSuccess

