import React from 'react';
import { Link } from 'react-router-dom';
import news_01 from '../../images/news_01.jpg';
import news_02 from '../../images/news_02.jpg';
import news_03 from '../../images/news_03.jpg';
import './News.css';

const News = () => {
    return (

    <div className="container">
        <div className="row">
              <h2 className="text-center"><span className="heading-color">Our News</span></h2>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-6">
                      
                      <div className="container-area">
                      <img className="image" src={news_01} alt="" style={{width: '100%', height: '100%'}}/>
                        <div className="overlay-area">
                           <p className="text">
                           Free consultation of a specialist with the use of a visualization system!
                           </p>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-6">  
                  <div className="container-area">
                  <img className="image" src={news_02} alt="" style={{width: '100%', height: '100%'}}/>
                        <div className="overlay-area">
                           
                           <p className="text">
                           Free consultation of a specialist with the use of a visualization system!
                           </p>
                        </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-6">
                  <div className="container-area">
                  <img className="image" src={news_03} alt="" style={{width: '100%', height: '100%'}}/>
                        <div className="overlay-area">
                           <p className="text">
                           Free consultation of a specialist with the use of a visualization system!
                           </p>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      
    );
};

export default News;