import React, { useState } from 'react'


const SignUp = () => {

    const[signUpDetails, setSignUpDetails] = useState({
        username:'',
        password:''
    })

    const handleChange = (event, field) => {
        let actualValue = event.target.value;
        setSignUpDetails({
            ...signUpDetails,
            [field]:actualValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //blocks browser's default submission ka logic(blocks hard refresh)
        console.log(signUpDetails);

        if (signUpDetails.username == '') {
            // route
            return(
                <div>ERROR</div>
            )
        }
    }

    // function validate() {
    //     //validattion logic
    // }

    return (
        <div>
            <div className='container flex-direction: column'>
                <form onSubmit={handleSubmit}>               
                    <div className="form-group w-auto p-3 ">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                        value={signUpDetails.username} onChange={(e) => handleChange(e, 'username')}
                        />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group w-auto p-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                        value={signUpDetails.password}  onChange={(e) => handleChange(e, 'password')}
                        />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
