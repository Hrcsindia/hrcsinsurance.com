import React, { useState } from 'react';

const InsuranceAdviceForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    interests: []
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, value]
        : prev.interests.filter((item) => item !== value)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Submitted Form:', form);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', interests: [] });
    }, 3000);
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="bg-white p-5 shadow rounded-4">
              <h4 className="fw-bold text-center mb-3">Get Personalized Insurance Advice</h4>
              <p className="text-muted text-center mb-4">
                Leave your details and our experts will help you find the perfect coverage
              </p>

              {submitted ? (
                <div className="alert alert-success text-center">
                  ✅ Thank you! Our team will contact you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">I'm interested in:</label>
                    <small className="text-muted d-block mb-2">(Select all that apply)</small>
                    <div className="row">
                      <div className="col-md-6">
                        {['Health Insurance', 'Vehicle Insurance', 'Travel Insurance'].map((option) => (
                          <div className="form-check mb-2" key={option}>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              value={option}
                              checked={form.interests.includes(option)}
                              onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label">{option}</label>
                          </div>
                        ))}
                      </div>
                      <div className="col-md-6">
                        {['Life Insurance', 'Term Insurance'].map((option) => (
                          <div className="form-check mb-2" key={option}>
                            <input
                              type="checkbox"
                              className="form-check-input"
                              value={option}
                              checked={form.interests.includes(option)}
                              onChange={handleCheckboxChange}
                            />
                            <label className="form-check-label">{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Get Expert Advice
                  </button>

                  <p className="text-muted text-center mt-3" style={{ fontSize: '0.85rem' }}>
                    No spam. We’ll only contact you about insurance options.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceAdviceForm;
