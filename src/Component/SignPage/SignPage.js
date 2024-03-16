import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import JoinIn from '../JoinIn/JoinIn';
import "../../App.css";
import SocialMedia from '../SocialMedia/SocialMedia';

function SignPage() {
    const [Sign, setSign] = useState(true)
    const [Join, setJoin] = useState(false)

    const handlesign = () => {
        setSign(true)
        setJoin(false)
    }

    const handlejoin = () => {
        setSign(false)
        setJoin(true)
    }
    return (
        <>
            <div className='Banner-background'>
                <div className='container'>
                    <div className='row'>
                    <div className='col-lg-12 col-md-12 col-sm-12'>
                        <div>
                            <button type="button" onClick={()=>handlesign()} className={`btn ${Sign ? 'btn-Sign' : "btn-Join"}`}>Primary</button>
                            <button type="button" onClick={()=>handlejoin()} className={`btn ${Join ? 'btn-Sign' : "btn-Join"}`}>Secondary</button>
                        </div>
                        <div>
                            {/* <img src={inputImg} alt /> */}
                            <SocialMedia/>
                        </div>
                        <div className='my-4'>
                            {/* <img src={connectimg} alt /> */}
                            <hr/>
                            {/* <span className='fw-bold position-absolute' style={{transform: "translateY(-30px) translateX(600px)", zIndex: "20"}}>or connect with</span> */}
                        </div>
                        {Sign && <SignIn />}
                        {Join && <JoinIn />}
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignPage;