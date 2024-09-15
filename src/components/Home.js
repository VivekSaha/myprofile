import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function Home() {
  const typedElementRef = useRef(null);
  const typedInstanceRef = useRef(null); // A ref to store the Typed instance

  useEffect(() => {
    if (typedElementRef.current) {
      const options = {
        strings: [
          'React JS Developer',
          'AEM Sites Front End Developer',
          'Wordpress Developer',
          'UI Designer and Developer'
        ],
        typeSpeed: 50, 
        backSpeed: 20,  
        backDelay: 1000, 
        startDelay: 1500, 
        loop: true,      
        showCursor: false 
      };

      // Initialize Typed.js and store the instance in a ref
      typedInstanceRef.current = new Typed(typedElementRef.current, options);
    }

    // Cleanup function to destroy the Typed instance when component unmounts
    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy(); 
      }
    };
  }, []);

  return (
    <div className="top-header" id="top-header">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <img src="assets/img/profile-pic.jpg" alt="Vivek Kumar Profile" />          
            <h1>I'm Vivek Kumar</h1>          
            <h2 ref={typedElementRef}>React JS Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
