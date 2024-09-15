import React from "react";
import { useState, useEffect } from "react";

// CounterUp component to handle the number animation
const CounterUp = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 100);

    const updateCounter = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        setTimeout(updateCounter, 100);
      } else {
        setCount(end); // Ensure the number ends exactly at 'end'
      }
    };

    updateCounter();
  }, [end, duration]);

  return <span>{count}</span>;
};

const Counter = () => {
  return (
    <div className="counters">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="counter">
              <div className="counter-icon-box">
                <i className="fa fa-calendar"></i>
              </div>
              <div className="number animateNumber" data-toggle="counter-up">
                <CounterUp end={10} duration={2000} />
              </div>
              <h4 className="font-weight">Years of Experience</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counter">
              <div className="counter-icon-box">
                <i className="fa fa-check"></i>
              </div>
              <div className="number animateNumber" data-toggle="counter-up">
                <CounterUp end={395} duration={2000} />
              </div>
              <h4 className="font-weight">Completed Projects</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counter">
              <div className="counter-icon-box">
                <i className="fa fa-building-o"></i>
              </div>
              <div className="number animateNumber" data-toggle="counter-up">
                <CounterUp end={5} duration={2000} />
              </div>
              <h4 className="font-weight">Total Company</h4>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="counter">
              <div className="counter-icon-box">
                <i className="fa fa-user"></i>
              </div>
              <div className="number animateNumber" data-toggle="counter-up">
                <CounterUp end={90} duration={2000} />
              </div>
              <h4 className="font-weight">Total Clients</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
