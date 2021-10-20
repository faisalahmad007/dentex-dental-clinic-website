import React from 'react';
import medicine1 from '../../images/medicine1.jpg';
import medicine2 from '../../images/medicine2.jpg';
import medicine3 from '../../images/medicine3.jpg';
import './Medicine.css';

const Patient = () => {
    return (

        <div className="container">
        <div className="row">
        
              <h2 className="text-center" ><span className="heading-color">Our Medicine Shop</span></h2>
              <div className="col-lg-4 col-md-4 col-sm-12">
                        <img src={medicine1} alt="dentist"/>
                        <h5>Mario Smith</h5>
                        <p>Medicine</p>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-6">
                       <img src={medicine2} alt="dentist2" style={{width: '100%'}}/>
                       <h5>Dan Barron</h5>
                       <p>Medicine</p>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-6">
                    <img src={medicine3} alt="patient3" style={{width: '100%'}}/>
                    <h5>Mohammad Abu Salah</h5>
                       <p>Medicine</p>

                    </div>
              </div>
          </div>
    );
};

export default Patient;