import React, { useState } from 'react';
import SignIn from '../SignIn/SignIn';
import JoinIn from '../JoinIn/JoinIn';
import inputImg from "../Image/input img.png"
import bannerImg from "../Image/bannerpeople.png"
import connectimg from "../Image/Connect With Separator.png"
import "../../App.css";
import Category from '../Category/Category';
import AddNewComponent from '../AddNewComponent/AddNewComponent';
import Testimonial from '../Testimonial/Testimonial';
import SocialMedia from '../SocialMedia/SocialMedia';

function Banner() {
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
        <div className='Banner-background laptop-view'>
                <div className='container banner-container'>
                    <div className='row'>
                    <div className='col-lg-7 col-md-12 col-sm-12 d-flex flex-column justify-content-between'>
                      <div>
                        <h1>Explore your <b className='text-sky'>hobby</b> or <b className='bg-skypurple'>passion</b></h1>
                        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                        <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                      </div>
                      <div>
                        <img src={bannerImg} alt className='banner-img'/>
                      </div>
                    </div>
                    <div className='col-lg-5 col-md-12 col-sm-12'>
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
                            <span className='fw-bold position-absolute' style={{transform: "translateY(-30px) translateX(150px)", zIndex: "20"}}>or connect with</span>
                        </div>
                        {Sign && <SignIn />}
                        {Join && <JoinIn />}
                    </div>
                    </div>
                </div>
            </div>
            <div className='Banner-background phone-view'>
                <div className='container-fluid banner-container'>
                    <div className='row'>
                    <div className='col-lg-7 col-md-12 col-sm-12 d-flex flex-column justify-content-between'>
                      <div>
                        <h1>Explore your <b className='text-sky'>hobby</b> or <b className='bg-skypurple'>passion</b></h1>
                        <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…</p>
                        <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
                      </div>
                    </div>
                    <div className='col-lg-5 text-center col-md-12 col-sm-12'>
                        <div>
                            <button type="button" onClick={()=>handlesign()} className={`btn ${Sign ? 'btn-Sign' : "btn-Join"}`}>Primary</button>
                            <button type="button" onClick={()=>handlejoin()} className={`btn ${Join ? 'btn-Sign' : "btn-Join"}`}>Secondary</button>
                        </div>
                        {Sign && <SignIn />}
                        {Join && <JoinIn />}
                        <div className='my-4'>
                            {/* <img src={connectimg} alt /> */}
                            <hr/>
                            {/* <span className='fw-bold position-absolute' style={{transform: "translateY(-30px) translateX(150px)", zIndex: "20"}}>or connect with</span> */}
                        </div>
                        <div className='my-4'>
                            {/* <img src={inputImg} alt /> */}
                            <SocialMedia/>
                        </div>
                        <div>
                        <img src={bannerImg} alt className='banner-img'/>
                      </div>
                    </div>
                    </div>
                </div>
            </div>
            <Category/>
            <AddNewComponent/>
            <Testimonial/>
        </>
    )
}

export default Banner;