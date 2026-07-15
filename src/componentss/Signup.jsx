import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Signup = () => {

    const [input, changeInput] = useState({
        name: '',
        phone: '',
        password: '',
        email: '',
        confirmPassword: ''
    })

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {

        if (input.password === input.confirmPassword) {

            console.log(input)

            let newInput = {
                name: input.name,
                phone: input.phone,
                email: input.email,
                password: input.password
            }

            axios.post("http://localhost:3000/signup", newInput)
                .then((response) => {

                    console.log(response.data)

                    if (response.data.status === "success") {

                        alert("Signup Successful")

                        changeInput({
                            name: '',
                            phone: '',
                            password: '',
                            email: '',
                            confirmPassword: ''
                        })

                    } else {

                        alert("Signup Failed")

                        changeInput({
                            name: '',
                            phone: '',
                            password: '',
                            email: '',
                            confirmPassword: ''
                        })
                    }

                })
                .catch((error) => {
                    console.log(error)
                })

        } else {
            alert("Password and Confirm Password should be same")
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">

                    <div className="row">

                        <div className="col-12">
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={input.name}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Phone</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                                name="phone"
                                value={input.phone}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={input.email}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={input.password}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12">
                            <label className="form-label">Confirm Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                value={input.confirmPassword}
                                onChange={inputHandler}
                            />
                        </div>

                        <div className="col-12 mt-3">
                            <button
                                className="btn btn-primary"
                                onClick={readValue}
                            >
                                Signup
                            </button>
                        </div>

                        <div className="col-12 mt-3">
                            <a href="/signin" className="btn btn-secondary">
                                Login
                            </a>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup