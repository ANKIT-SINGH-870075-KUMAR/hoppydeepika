import React from 'react';
import quote from "../Image/quote.png";
import Audio from "../Image/Audio Track.png";
import dance from "../Image/dance.png";

function Testimonial() {
  return (
    <>
     <div className='Testimonial-background p-5 laptop-view'>
        <div className='conatiner Test-color'>
            <div className='row'>
                <div>
                    <img src={quote} alt />
                    Testimonials
                </div>
                <div>
                    <p>
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                    </p>
                </div>
            </div>
            <div className='row d-flex justify-content-between'>
                <div className='col-lg-6 col-md-7 col-sm-12'>
                <img className='audio' src={Audio} alt/>
                </div>
                <div className='col-lg-4 d-flex align-items-center col-md-7 col-sm-12'>
                  <img className="dance" src={dance} alt/>
                  <div>
                    <h6 style={{fontWeight: "300!important;"}}>Shubha Nagarajan</h6>
                    <b className='text-sky'>Classical Dancer</b>
                  </div>
                </div>
            </div>
        </div>
        </div> 
     <div className='Testimonial-background p-4 phone-view'>
        <div className='conatiner Test-color'>
            <div className='row'>
                <div>
                    <img src={quote} alt />
                    Testimonials
                </div>
                <div>
                    <p>
                    In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
                    </p>
                </div>
            </div>
            <div className='row d-flex justify-content-between'>
                <div className='col-lg-6 col-md-7 col-sm-12'>
                <img className='audio' src={Audio} alt/>
                </div>
                <div className='col-lg-4 d-flex align-items-center col-md-7 col-sm-12'>
                  <img className="dance" src={dance} alt/>
                  <div>
                    <h6 style={{fontWeight: "300!important;"}}>Shubha Nagarajan</h6>
                    <b className='text-sky'>Classical Dancer</b>
                  </div>
                </div>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Testimonial;