import React from 'react';
import addImg from "../Image/Add.png";
import { Link } from 'react-router-dom';

function AddNewComponent() {
    return (
        <>
            <div className='AddNew-background p-3 laptop-view'>
                <div className='container AddNew-container'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center">
                                        {/* <FaUsers className='me-2 text-gray' /> People */}
                                        <img src={addImg} alt/>
                                        Add your own
                                    </h5>
                                    <p className="card-text">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                                    <Link to="/addNew" className="btn btn-outline-purple">Add New</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AddNew-background mt-4 phone-view'>
                <div className='container-fluid AddNew-container'>
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="card p-3">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center">
                                        {/* <FaUsers className='me-2 text-gray' /> People */}
                                        <img src={addImg} alt/>
                                        Add your own
                                    </h5>
                                    <p className="card-text">Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                                    <Link to="/addNew" className="btn btn-outline-purple">Add New</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddNewComponent;