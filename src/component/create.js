import React from 'react'

function shoot()  {
    
        alert("your deatil saved")
    
}

const Create = () => (
    < div className='createform'>
    <form >
            <label>First Name</label>
            <input placeholder='First Name' />
        <br/>
            <label>Last Name</label>
            <input placeholder='Last Name' />
        <br/>
            <input type="checkbox"/><label>I agree to the Terms and Conditions</label>
        <br/> 
        <button  onClick={shoot}>Submit</button>
        
        
        <button type="button" class="deletebtn">Delete</button>
     
    </form>
    </div>
)

export default Create;
