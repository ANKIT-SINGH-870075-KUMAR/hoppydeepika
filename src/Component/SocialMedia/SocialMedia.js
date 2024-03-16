import React from 'react'
import google from "../Image/Google.png"
import facebook from "../Image/face.png"

function SocialMedia() {
    return (
        <>
            <div class="d-grid gap-2">
                <button class="btn btn-outline-dark d-flex align-items-center justify-content-center py-3" type="button">
                    <img src={google} alt className='me-3'/>Continue with Google</button>
                <button class="btn btn-outline-dark py-3 d-flex align-items-center justify-content-center" type="button">
                    <img src={facebook} alt className='me-3'/>Continue with Facebook</button>
            </div>
        </>
    )
}

export default SocialMedia