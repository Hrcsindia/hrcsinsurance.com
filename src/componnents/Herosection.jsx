import React from 'react';

const HeroSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column - Text Content */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="fw-bold display-5">
            Smarter Coverage.<br />
            <span style={{ color: '#2B72FF' }}>Transparent Choices.</span>
          </h1>
          <p className="mt-3 fs-5 text-muted">
            Compare insurance plans in 60 seconds. No jargon, no hidden costs,
            just honest coverage that fits your life and budget.
          </p>
          <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
             <a href="#compare" className="btn btn-primary btn-lg">Compare Plans Now</a>
             <a href="#info" className="btn btn-outline-secondary btn-lg">Learn More</a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="col-md-6 mt-4 mt-md-0 text-center">
          <img
            src="/Herosection.jpg" // ✅ Replace with actual path
            alt="Analytics graph"
            className="img-fluid rounded shadow"
            style={{ maxHeight: '350px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
