import React from 'react';
import { IoMdLock } from "react-icons/io";

function SignIn() {
    return (
        <>
            <form className='mt-3'>
                <div class="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div className='d-flex justify-content-between py-2'>
                    <div class="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <div class="mb-3 form-check d-flex align-itmes-center">
                        <IoMdLock className='text-secondary fs-5'/>
                        <label class="form-check-label" for="exampleCheck1">Forgot password?</label>
                    </div>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-dark py-3" type="button">Continue</button>
                </div>
            </form>
        </>
    )
}

export default SignIn;