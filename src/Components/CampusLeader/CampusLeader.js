import React, { useState } from 'react'
import './CampusLeader.css';
import CampusFirst from './CampusFirst/CampusFirst'
import CampusForm from './CampusForm/CampusForm';
// import FormSuccess from './CampusForm/FormSuccess';

function CampusLeader() {
    // const [isSubmitted, setIsSubmitted] = useState(false);

    // function submitForm() {
    //     setIsSubmitted(true);
    // }

    return (
        <div className='campusLeader'>
            <CampusFirst />
            <CampusFirst />
            <CampusForm />
            {/* {
                !isSubmitted ? (
                    <>
                        <CampusFirst />
                        <CampusFirst />
                        <CampusForm submitForm={submitForm} />
                    </>
                ) : (
                    <FormSuccess />
                )
            } */}
        </div>
    )
}

export default CampusLeader
