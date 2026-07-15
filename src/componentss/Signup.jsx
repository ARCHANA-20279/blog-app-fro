import axios from 'axios'
import React from 'react'
import { useState } from 'react'



const Signup = () => {
    const [input,changeInput] = useState({
        "name": '',
        "phone": '',
        "password": '',
        "email": '',
        "confirmPassword": ''
      
    })
    const inputHandler = (event) => {
     changeInput({...input,[event.target.name]: event.target.value})

    }
    const readValue =()=>{

if(input.password === input.confirmPassword){
    console.log(input)
    let newInput = {
        "name": input.name,
        "phone": input.phone,
        "email": input.email,
        "password": input.password
    }

axios.post("http://localhost:3000/signup",newInput).then(

    (response)=>{
        console.log(response.data)
if (response.data.status === "success"){

    changeInput({
        "name": '',
        "phone": '',
        "password": '',
        "email": '',
        "confirmPassword": ''
    })

}else{
    alert("Signup failed")
    changeInput({
        "name": '',
        "phone": '',
        "password": '',
        "email": '',
        "confirmPassword": ''
    })
}


    }
).catch((error)=>{
    console.log(error)
})


}else{
        alert("password and confirm password should be same")
    }
}
  return (
    <div>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <label htmlFor="" className="form-label">name</label>
                    <input type="text" className="form-control" placeholder='name'
                    name="name" value={input.name} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">phone</label>
                    <input type="text" className="form-control" placeholder='phone' 
                    name="phone" value={input.phone} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">email</label>
                    <input type="text" className="form-control" placeholder='email' 
                    name="email" value={input.email} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="password" className="form-control" placeholder='password' 
                    name="password" value={input.password} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">confirm password</label>
                    <input type="password" className="form-control" placeholder='confirm password' 
                    name="confirmPassword" value={input.confirmPassword} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary" onClick={readValue}>
                        Signup
                    </button>
                </div>
                
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/" className="btn btn-primary">
                        Login
                    </a>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
            </div>
        </div>
    </div>
</div>



    </div>
  )
}


export default Signup