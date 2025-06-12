import React, { useState } from 'react';

const CompareForm = () => {
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="bg-light py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-2">
          <span role="img" aria-label="sparkles">✨</span> Instant Compare Tool
        </h2>
        <p className="text-muted mb-4">Find your perfect insurance match in 60 seconds</p>

        {/* ✅ START of White Card Container */}
        <div className="bg-white rounded shadow-sm p-4 mx-auto" style={{ maxWidth: '1000px' }}>
          <h4 className="text-start mb-4 fw-semibold">Compare Insurance Plans</h4>

          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-3">
                <label className="form-label fw-semibold">Insurance Type</label>
                <select className="form-select">
                  <option>Select type</option>
                  <option>Health</option>
                  <option>Life</option>
                </select>
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Age</label>
                <input type="number" className="form-control" placeholder="Enter age" />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Monthly Budget</label>
                <input type="text" className="form-control" placeholder="₹ Amount" />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">City</label>
                <input type="text" className="form-control" placeholder="Enter city" />
              </div>
            </div>

            <div className="mt-4 text-center">
              <button type="submit" className="btn btn-primary btn-lg">
                🎯 Find Best Matches
              </button>
            </div>
          </form>

          {/* ✅ Suggestions shown inside this same white card */}
          {showResults && (
            <div className="mt-5 text-start">
              <h5 className="fw-bold mb-4">Your Top 3 Matches</h5>
              <div className="row g-4">
                {/* Match 1 */}
                <div className="col-md-4">
                  <div className="card h-100 border-light shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-bold">Essential Shield</h5>
                      <p className="text-muted mb-1">SecureLife</p>
                      <h5 className="text-primary fw-bold">₹2,499/month</h5>
                      <p>Coverage: ₹5 Lakhs</p>
                      <span className="badge bg-light text-dark mb-3">Zero waiting period</span>
                         <a href='#support' className="btn btn-outline-dark w-100 mb-2">Deep Dive</a>
                      <a href='#support'  className="btn btn-primary w-100">Get Quote</a>
                    </div>
                  </div>
                </div>

                {/* Match 2 */}
                <div className="col-md-4">
                  <div className="card h-100 border-light shadow-sm position-relative">
                    <div className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
                      Recommended
                    </div>
                    <div className="card-body">
                      <h5 className="fw-bold">Premium Care Plus</h5>
                      <p className="text-muted mb-1">HealthGuard</p>
                      <h5 className="text-primary fw-bold">₹3,299/month</h5>
                      <p>Coverage: ₹10 Lakhs</p>
                      <span className="badge bg-light text-dark mb-3">Global coverage</span>
                      <a href='#support' className="btn btn-outline-dark w-100 mb-2">Deep Dive</a>
                      <a href='#support'  className="btn btn-primary w-100">Get Quote</a>
                    </div>
                  </div>
                </div>

                {/* Match 3 */}
                <div className="col-md-4">
                  <div className="card h-100 border-light shadow-sm">
                    <div className="card-body">
                      <h5 className="fw-bold">Family Protect</h5>
                      <p className="text-muted mb-1">TrustInsure</p>
                      <h5 className="text-primary fw-bold">₹4,199/month</h5>
                      <p>Coverage: ₹15 Lakhs</p>
                      <span className="badge bg-light text-dark mb-3">Covers entire family</span>
                        <a href='#support' className="btn btn-outline-dark w-100 mb-2">Deep Dive</a>
                      <a href='#support'  className="btn btn-primary w-100">Get Quote</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* ✅ END of White Card Container */}
      </div>
    </div>
  );
};

export default CompareForm;
