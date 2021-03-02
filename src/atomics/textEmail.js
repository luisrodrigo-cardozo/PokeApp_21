import React, { Fragment } from 'react';

const TextEmail = ({
    name,
    value,
    placeholder,
    onChange,
    className
}) => {
    return (
        <Fragment>
            <input type='email'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className} />
        </Fragment>
    )
}

export default TextEmail;