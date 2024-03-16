import React from 'react';
// import user from "../Image/user.png";
// import place from "../Image/place.png";
// import event from "../Image/event.png";
// import shopping from "../Image/shopping.png"
import { FaUsers } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaSailboat } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Category() {

    return (
        <>
            <div className='Category-background p-4 laptop-view'>
                <div className='container'>
                    <div className="row m-4">
                        <div className="col-sm-6">
                            <div className="card bg-gray p-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center">
                                        <FaUsers className='me-2 text-gray' /> People
                                    </h5>
                                    <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                                    <Link to="#" className="btn btn-outline-purple">connect</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card bg-green p-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center"><FaLocationDot className='me-2 text-green' />Place</h5>
                                    <p className="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                                    <Link to="#" className="btn btn-outline-purple">Meet</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row m-4">
                        <div className="col-sm-6">
                            <div className="card bg-skys p-2 px-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center"><FaRegCalendarCheck className='me-2 text-sky' /> Product</h5>
                                    <p className="card-text">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                                    <Link to="#" className="btn btn-outline-purple">Get it</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card bg-brown p-4">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center"><FaSailboat className='me-2 text-brown' /> Program</h5>
                                    <p className="card-text">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                                    <Link to="#" className="btn btn-outline-purple">Attend</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Category-background phone-view'>
                <div className='container-fluid mx-4'>
                    <div className="row">
                        <div className="col-sm-12 mt-4 mb-4">
                            <div className="card bg-gray p-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center">
                                        <FaUsers className='me-2 text-gray' /> People
                                    </h5>
                                    <p className="card-text">Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.</p>
                                    <div className='d-grid'>
                                        <Link to="#" className="btn btn-outline-purple">connect</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card bg-green p-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center"><FaLocationDot className='me-2 text-green' />Place</h5>
                                    <p className="card-text">Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
                                    <Link to="#" className="btn btn-outline-purple">Meet</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-sm-12 mb-4">
                            <div className="card bg-skys p-2 px-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center"><FaRegCalendarCheck className='me-2 text-sky' /> Product</h5>
                                    <p className="card-text">Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.</p>
                                    <Link to="#" className="btn btn-outline-purple">Get it</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="card bg-brown p-4">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center"><FaSailboat className='me-2 text-brown' /> Program</h5>
                                    <p className="card-text">Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
                                    <Link to="#" className="btn btn-outline-purple">Attend</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;