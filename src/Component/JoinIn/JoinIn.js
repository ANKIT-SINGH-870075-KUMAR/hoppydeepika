import React from 'react';

function JoinIn() {
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
                <div className='d-flex justify-content-end'>
                    <div class="mb-3 form-check">
                        <label class="form-check-label" for="exampleCheck1">Password strength</label>
                    </div>
                </div>
                <p id="emailHelp" className="form-text">By continuing you agree to our <b className='fw-bold'>Terms of Service</b> and <b className='fw-bold'>Privacy Policy</b></p>
                <div class="d-grid gap-2">
                    <button class="btn btn-outline-dark py-3" type="button">Agree and Continue</button>
                </div>
            </form>
    </>
  )
}

export default JoinIn;