import React from 'react';
import './Home.css';
import ButtonAppBar from '../Navbar/Navbar';
import computer from '../Assests/computer.png';
import logoicon from '../Assests/logoicon.png';

const Home = () => {
  return (
    <>
      <ButtonAppBar />
      {/* <div className='gradient-container'>
        <div className='content'>
          <img id="logoicon" src={logoicon} alt='logoicon' />
          <div className='title'>RAILTEL</div>
          <p>
            RailTel Corporation a "Mini Ratna (Category-I)" PSU is one of the largest neutral telecom infrastructure providers in the country owning a Pan-India optical fiber network. The OFC network covers all important towns & cities of the country and several rural areas covering 70% of India’s population.
          </p>
        </div>
        <div className='sidearea'>
          
        </div>
        <div className='overlapping-container'>
        <img id="computer" src={computer} alt='computer' />
        </div>
      </div> */}
    </>
  );
};

export default Home;
