import React from 'react';
import Category from '../Category/Category';
import addImg from "../Image/Add.png";

function AddPage() {
  return (
    <>
      <div className='AddPage-background laptop-view'>
        <div className='container p-5'>
            <div className='row'>
              <div className='card pt-5 d-flex flex-column align-items-center col-lg-12'>
                   <div>
                   <img src={addImg} alt/> Add Your Listing
                   </div>
                <Category/>
              </div>
            </div>
        </div>
      </div>
      <div className='AddPage-background phone-view'>
        <div className='container-fluid'>
            <div className='row'>
              <div className='pt-5 pb-5 d-flex flex-column align-items-center col-lg-12'>
                   <div>
                   <img src={addImg} alt/> Add Your Listing
                   </div>
                <Category/>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AddPage;