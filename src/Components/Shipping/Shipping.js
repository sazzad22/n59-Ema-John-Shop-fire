import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone,setPhone]=useState('')
    const [error, setError] = useState('');

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event =>{
      setAddress(event.target.value)  
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = {name, email, address, phone};
        console.log(shipping);
        
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser} action="">
                <div className="input-group">
                        <label htmlFor="email">Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input onBlur={handleEmailBlur}  type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur}  type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input onBlur={handlePhoneBlur}  type="text" name="phone" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
                <p>
                    Already Have an Account? <Link className='form-link' to="/login">Login</Link>
                </p>
            </div>
           
        </div>
    );
};

export default Shipping;