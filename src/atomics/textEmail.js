import React, { Fragment } from 'react';

const TextEmail = ({
    name,
    value,
    placeholder,
    onChange
}) => {
    return (
        <Fragment>
            <input type='email'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange} />
        </Fragment>
    )
}

export default TextEmail;