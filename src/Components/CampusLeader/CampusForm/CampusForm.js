import React from 'react'
import './CampusForm.css';
import useForm from './useForm';
import validate from './validateInfo';

function CampusForm() {
    const { handleChange, values, handleSubmit, errors } = useForm(validate);

    return (
        <div className='campusForm'>
            <div className="campusForm__left">
                <h1>
                    Lead a community at your campus powered by Sudan's Tech
                </h1>
            </div>
            <div className="campusForm__right">
                <h1 className="campusFom__option">
                    Lead a community at your campus powered by Sudan's Tech
                </h1>
                <hr className='campusForm__break' />
                <form onSubmit={handleSubmit}>
                    <div className="campusForm__formInput">
                        <label htmlFor='username' className='campusForm__label'>Name</label>
                        <input id='username' type="text" name='username' className='campusForm__input' placeholder='Enter your name' value={values.username} onChange={handleChange} />
                        {errors?.username && <p>{errors.username}</p>}
                    </div>
                    <div className="campusForm__formInput">
                        <label htmlFor='email' className='campusForm__label'>Email</label>
                        <input id='email' type="email" name='email' className='campusForm__input' placeholder='xyz@something.com' value={values.email} onChange={handleChange} />
                        {errors?.email && <p>{errors.email}</p>}
                    </div>
                    <div className="campusForm__formInput">
                        <label htmlFor='phone' className='campusForm__label'>Phone Number</label>
                        <input id='phone' type="number" name='phone' className='campusForm__input' placeholder='0000000000' value={values.phone} onChange={handleChange} />
                        {errors?.phone && <p>{errors.phone}</p>}
                    </div>
                    <div className="campusForm__formInput">
                        <label htmlFor='college' className='campusForm__label'>College Name</label>
                        <input id='college' type="text" name='college' className='campusForm__input' placeholder='Dummy of Disco' value={values.college} onChange={handleChange} />
                        {errors?.college && <p>{errors.college}</p>}
                    </div>
                    <div className="campusForm__formInput">
                        <label htmlFor='course' className='campusForm__label'>Course & Year</label>
                        <input id='course' type="text" name='course' className='campusForm__input' value={values.course} onChange={handleChange} />
                    </div>
                    <div className="campusForm__formInput">
                        <label htmlFor='linkedIn' className='campusForm__label'>LinkedIN - URL</label>
                        <input id='linkedIn' type="url" name='linkedIn' className='campusForm__input' value={values.linkedIn} onChange={handleChange} />
                    </div>
                    <button className='campusForm__button' type='submit'>SUBMIT</button>
                </form>
            </div>
        </div>
    )
}

export default CampusForm
