import React from 'react'
import { Contact, Footer, Header, Navbar, Processes, Products, Services, StartNow, Technologies, Values, Works } from '../../Sections'
import { LoadingScreen } from '../../Components';
import { useState, useEffect } from 'react';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading time (you can replace this with your actual loading logic)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  return (
  <>
  {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="bg-slate-100">
          <div className="scroll-smooth md:scroll-auto">
            <Navbar />
            <Header />
            <Services />
            <StartNow />
            <Values />
            <Processes />
            <Technologies />
            <Works />
            {/* <Products /> */}
            <Contact />
            <Footer />
          </div>
        </div>
      )}   
  </>
  )
}

export default Home