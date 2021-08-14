import React, { useState, useEffect } from 'react'

const AnimateGrowth = ({ loader, valueStart, valueEnd, children }) => {
    const [value, setValue] = useState(valueStart);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        }
        window.addEventListener('resize', handleResize)
    });

    useEffect(() => {
        if (mobile) {
            setValue(valueEnd);
        } else {
            if (loader) {
                setValue(valueEnd);
            } else {
                setValue(valueStart);
            }
        }
    }, [valueEnd, valueStart, loader, mobile]);
    return children(value);
};

export default AnimateGrowth