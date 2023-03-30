import React from 'react';

const HomePage = () => (
  <div className="home-container">
    <h2 className="bounce header">Welcome to our page!</h2>
    <p className="paragraph">
      The Math Magician Project is a professional-grade
      web application that provides
      a user-friendly interface
      for basic math operations.
      Developed using
      modern web technologies, i
      ncluding React, JavaScript,
      HTML, and CSS, the project
      adheres to the principles
      of modularization, separation
      of concerns, and React&apos;s
      component-based architecture.
    </p>

    <p className="paragraph">
      <strong>The Math Magician Project offers:</strong>
      <ul>
        <li>
          A sleek, intuitive design that
          enables users to select the
          desired operation
          and input operands
          to receive a result
        </li>
        <li>
          Responsive and dynamic updates
          using React&apos;s state
          management and lifecycle methods
        </li>
        <li>
          Optimized accessibility
          for various screen
          sizes and devices
        </li>
        <li>
          Automated tests to
          prevent bugs and ensure
          that the application
          functions as intended
        </li>
      </ul>
    </p>
  </div>
);

export default HomePage;
