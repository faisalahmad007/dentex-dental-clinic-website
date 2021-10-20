import React from 'react';
import dentist1 from '../../images/Dentist1.jpg';
import dentist2 from '../../images/Dentist2.jpg';
import dentist3 from '../../images/Dentist3.jpg';
import dentist4 from '../../images/Dentist4.jpg';

const OurTeam = () => {
    return (
        <div>
           <div className="container">
               <div className="row">
                   <div className="col-lg-3 col-md-3 col-sm-12 col-xs-6">
                        <img src={dentist1} alt="dentist" style={{width: '100%', height: 'auto'}}/>
                        <h5>Will Smith</h5>
                        <p>Orthodont,Dentist</p>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-6">
                       <img src={dentist2} alt="dentist2" style={{width: '100%', height: 'auto'}}/>
                       <h5>Dan Washington</h5>
                       <p>Periodontics, Surgery</p>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-6">
                    <img src={dentist3} alt="dentist" style={{width: '100%', height: 'auto'}}/>
                    <h5>Anna Winds</h5>
                       <p>Periodontics, Orthodont</p>

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-6">
                    <img src={dentist4} alt="dentist" style={{width: '100%', height: 'auto'}}/>
                    <h5>John Monn</h5>

                       <p>Periodontics, Dentist</p>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default OurTeam;