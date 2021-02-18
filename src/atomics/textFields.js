import React, { Fragment } from 'react';

const TextFields = ({
    name,
    value,
    placeholder,
    onChange
}) => {
    return (
        <Fragment>
            <input type='text'
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange} />
        </Fragment>

    )
}


export default TextFields;