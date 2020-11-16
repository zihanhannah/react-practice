import React from 'react';

const userOutput = (props)=>{
    return (
<div className='UserOutput'>
   <p>Username: {props.name}</p>
   <p> This is the second paragraph</p>
</div>
    )
}
export default userOutput;