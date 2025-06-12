import React from 'react';

const Info = () => {
  const stats = [
    { value: '2M+', label: 'Policies Compared', sub: 'Happy customers' },
    { value: '95%', label: 'Claim Success Rate', sub: 'Industry leading' },
    { value: '24/7', label: 'Support Available', sub: 'Always here for you' },
    { value: '50+', label: 'Insurance Partners', sub: 'Top rated insurers' }
  ];

  const testimonials = [
    {
      name: 'Rajesh K.',
      feedback: 'Car accident claim settled in 3 days',
      type: 'Vehicle'
    },
    {
      name: 'Priya S.',
      feedback: 'Surgery covered 100% with cashless facility',
      type: 'Health'
    },
    {
      name: 'Amit R.',
      feedback: 'Family protected when it mattered most',
      type: 'Life'
    },
    {
      name: 'shivani.',
      feedback: 'Family protected when it mattered most',
      type: 'Life'
    }
  ];

  return (
    <div className="bg-white py-5 text-center">
      {/* Stats Section */}
      <h3 className="fw-bold mb-2">Trusted by Millions</h3>
      <p className="text-muted mb-5">We've helped families make smarter insurance decisions</p>
      <div className="container mb-5">
        <div className="row justify-content-center">
          {stats.map((item, idx) => (
            <div key={idx} className="col-md-3 col-6 mb-4">
              <div className="p-3 border rounded shadow-sm h-100">
                <h4 className="text-primary fw-bold">{item.value}</h4>
                <div className="fw-semibold">{item.label}</div>
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <h4 className="fw-bold mb-4">We've Got Their Back</h4>
      <div className="container">
        <div className="row justify-content-center">
          {testimonials.map((item, idx) => (
            <div key={idx} className="col-md-4 col-sm-6 mb-4">
              <div className="border rounded shadow-sm p-4 h-100">
                <div className="mb-3">
                  <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-inline-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                    <i className="bi bi-person-fill fs-4"></i>
                  </div>
                </div>
                <h6 className="fw-semibold">{item.name}</h6>
                <p className="text-muted fst-italic mb-2">"{item.feedback}"</p>
                <span className="badge bg-light text-primary border">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Info;
