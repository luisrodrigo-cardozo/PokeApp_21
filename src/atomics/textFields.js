import React, { Fragment } from 'react';

const TextFields = ({
    name,
    value,
    placeholder,
    onChange,
    className
}) => {
    return (
        <Fragment>
            <input type='text'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
            />
        </Fragment>

    )
}


export default TextFields;