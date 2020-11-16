import React from 'react';

const userInput = (props)=>{
    const inputStyle = {
        backgroundColor:'pink'
    }
    return (
<div className='UserInput'>
    <input style={inputStyle} type='text' onChange={props.changed} value={props.name} />
</div>
    )
}

export default userInput;