import React from 'react';


import Banner from '../Banner/Banner';
import News from '../News/News';
import Medicine from '../Medicine/Medicine';
import ServicePage from '../ServicePage/ServicePage';
import Footer from '../Footer/Footer';
import './Home.css';





const Home = () => {
    
   return (
        <div>
          <Banner></Banner>
          <ServicePage></ServicePage>
          <News></News>
          <Medicine></Medicine>
          </div>
               
     ) 

            
 }
export default Home;