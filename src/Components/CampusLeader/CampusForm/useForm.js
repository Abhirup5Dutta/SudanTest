import { useState, useEffect } from "react";

const useForm = (validate) => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        phone: '',
        college: '',
        course: '',
        linkedIn: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setValues({
            username: '',
            email: '',
            phone: '',
            college: '',
            course: '',
            linkedIn: ''
        });
    }

    const handleChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            // callback();
            submitForm();
        }
    }, [errors]);

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;