export default function validateInfo(values) {
    let errors = {};

    if (!values.username.trim()) {
        errors.username = "Name required"
    }

    if (!values.email) {
        errors.email = 'Email required'
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if (!values.phone) {
        errors.phone = 'Phone number required'
    } else if (values.phone.length < 10) {
        errors.phone = "Phone number must be of atleast 10 digits"
    }

    if (!values.college) {
        errors.college = 'College name is required'
    }

    return errors;
}