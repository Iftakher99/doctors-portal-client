import React from "react";

const Testimonial = (props) => {
  const { quote, name, from, img } = props.testimonial;
  return (
    <div className='card shadow-sm col-md-4 d-flex justify-content-center'>
      <div className='card-body'>
        <div className='card-footer d-flex  align-items-center'>
          <img className='mx-3 ' src={img} alt='' width='60' />
          <div>
            <h6 className='text-primary'>{name}</h6>
            <p className='m-0'>{from}</p>
          </div>
        </div>
        <p className='card-text text-center'>{quote}</p>
      </div>
    </div>
  );
};

export default Testimonial;
