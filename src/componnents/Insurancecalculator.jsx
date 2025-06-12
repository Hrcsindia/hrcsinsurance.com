import React, { useState } from 'react';

const InsuranceCalculator = () => {
    const [selectedTab, setSelectedTab] = useState('Health');
    //   caar form state
    // Car Form States
    const [carForm, setCarForm] = useState({
        marketValue: '',
        carAge: '',
        cityType: '',
        claims: ''
    });
    const [carPremium, setCarPremium] = useState(0);
    const [showCarResult, setShowCarResult] = useState(false);
    // car form handle
    const handleCarChange = (e) => {
        setCarForm({ ...carForm, [e.target.name]: e.target.value });
    };
    // car premeum calculater function
    const calculateCar = (e) => {
        e.preventDefault();
        const base = parseInt(carForm.marketValue || 0) * 0.03;
        const depreciation = (parseInt(carForm.carAge || 0) * 0.01) * base;
        const claimsPenalty = (parseInt(carForm.claims || 0) * 0.015) * base;
        const premium = Math.round(base + depreciation + claimsPenalty);
        setCarPremium(premium);
        setShowCarResult(true);
    };


    // Health Form States
    const [healthForm, setHealthForm] = useState({
        age: '',
        familySize: '',
        cityType: '',
        diseases: '',
        income: ''
    });
    const [healthPremium, setHealthPremium] = useState(0);
    const [showHealthResult, setShowHealthResult] = useState(false);

    // Life Form States
    const [lifeForm, setLifeForm] = useState({
        age: '',
        income: '',
        loans: '',
        dependents: '',
        lifestyle: ''
    });
    const [lifePremium, setLifePremium] = useState(0);
    const [coverageAmount, setCoverageAmount] = useState(0);
    const [showLifeResult, setShowLifeResult] = useState(false);

    // Handlers
    const handleHealthChange = (e) => {
        setHealthForm({ ...healthForm, [e.target.name]: e.target.value });
    };

    const handleLifeChange = (e) => {
        setLifeForm({ ...lifeForm, [e.target.name]: e.target.value });
    };

    // Premium Calculators
    const calculateHealth = (e) => {
        e.preventDefault();
        let base = 5000;
        base += healthForm.age > 40 ? 3000 : 2000;
        base += healthForm.familySize === '3-4 Members' ? 2000 : healthForm.familySize === '5+ Members' ? 4000 : 1000;
        base += healthForm.cityType === 'Metro City' ? 3000 : 1000;
        base += healthForm.diseases === 'Yes' ? 3000 : 0;
        setHealthPremium(base);
        setShowHealthResult(true);
    };

    const calculateLife = (e) => {
        e.preventDefault();
        const income = parseInt(lifeForm.income || 0);
        const loans = parseInt(lifeForm.loans || 0);
        const coverage = Math.round((income * 12) + loans); // 10-12x annual income + loans
        const lifestyleFactor = lifeForm.lifestyle === 'High' ? 1.5 : lifeForm.lifestyle === 'Low' ? 0.8 : 1;
        const monthly = Math.round((coverage * 0.004) * lifestyleFactor); // Example factor
        setCoverageAmount(coverage);
        setLifePremium(monthly);
        setShowLifeResult(true);
    };

    return (
        <div className="bg-light py-5">
            <div className="container text-center">
                <h2 className="fw-bold mb-2">🧮 Insurance Calculator</h2>
                <p className="text-muted mb-4">Calculate your insurance needs and premium estimates</p>

                <div className="bg-white rounded shadow-sm p-4 mx-auto" style={{ maxWidth: '1000px' }}>
                    {/* Tabs */}
                    <div className="d-flex justify-content-center mb-4">
                        {['Health', 'Life', 'Car'].map(type => (
                            <button
                                key={type}
                                onClick={() => setSelectedTab(type)}
                                className={`btn ${selectedTab === type ? 'btn-primary text-white' : 'btn-light text-muted'} mx-1`}
                                style={{ flex: 1 }}
                            >
                                {type} Insurance
                            </button>
                        ))}
                    </div>

                    {/* ---------------- Health Tab ---------------- */}
                    {selectedTab === 'Health' && (
                        <div className="row">
                            <div className="col-md-7">
                                <h5 className="text-start mb-4 fw-bold">Health Insurance Calculator</h5>
                                <form onSubmit={calculateHealth}>
                                    <div className="mb-3 text-start">
                                        <label>Age</label>
                                        <input type="number" name="age" className="form-control" value={healthForm.age} onChange={handleHealthChange} />
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label>Family Size</label>
                                        <select name="familySize" className="form-select" value={healthForm.familySize} onChange={handleHealthChange}>
                                            <option value="">Select</option>
                                            <option>Individual</option>
                                            <option>2 Members</option>
                                            <option>3-4 Members</option>
                                            <option>5+ Members</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label>City Type</label>
                                        <select name="cityType" className="form-select" value={healthForm.cityType} onChange={handleHealthChange}>
                                            <option value="">Select</option>
                                            <option>Metro City</option>
                                            <option>Tier-1</option>
                                            <option>Tier-2</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label>Pre-existing Diseases</label>
                                        <select name="diseases" className="form-select" value={healthForm.diseases} onChange={handleHealthChange}>
                                            <option value="">Select</option>
                                            <option>No</option>
                                            <option>Yes</option>
                                        </select>
                                    </div>
                                    <div className="mb-4 text-start">
                                        <label>Annual Income (₹)</label>
                                        <input type="number" name="income" className="form-control" value={healthForm.income} onChange={handleHealthChange} />
                                    </div>
                                    <button className="btn btn-primary w-100">Calculate Health Premium</button>
                                </form>
                            </div>
                            {showHealthResult && (
                                <div className="col-md-5 mt-4 mt-md-0">
                                    <div className="p-4 bg-light rounded border">
                                        <h6 className="fw-bold">Health Insurance Estimate</h6>
                                        <h4 className="text-primary fw-bold mb-1">₹{healthPremium.toLocaleString()}/year</h4>
                                        <small className="text-muted">Estimated annual premium</small>
                                        <div className="mt-3 p-3 bg-white rounded shadow-sm">
                                            <strong>Recommended Coverage:</strong> ₹5–10 Lakhs
                                            <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.9rem' }}>
                                                This estimate is based on your age, family size, and location.
                                                Actual premiums may vary based on insurer and specific plan features.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* ---------------- Life Tab ---------------- */}
                    {selectedTab === 'Life' && (
                        <div className="row">
                            <div className="col-md-7">
                                <h5 className="text-start mb-4 fw-bold">Life Insurance Calculator</h5>
                                <form onSubmit={calculateLife}>
                                    <div className="mb-3 text-start">
                                        <label>Age</label>
                                        <input type="number" name="age" className="form-control" value={lifeForm.age} onChange={handleLifeChange} />
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label>Annual Income (₹)</label>
                                        <input type="number" name="income" className="form-control" value={lifeForm.income} onChange={handleLifeChange} />
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label>Existing Loans (₹)</label>
                                        <input type="number" name="loans" className="form-control" value={lifeForm.loans} onChange={handleLifeChange} />
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label>Number of Dependents</label>
                                        <input type="number" name="dependents" className="form-control" value={lifeForm.dependents} onChange={handleLifeChange} />
                                    </div>
                                    <div className="mb-4 text-start">
                                        <label>Lifestyle</label>
                                        <select name="lifestyle" className="form-select" value={lifeForm.lifestyle} onChange={handleLifeChange}>
                                            <option value="">Select</option>
                                            <option>Low</option>
                                            <option>Normal</option>
                                            <option>High</option>
                                        </select>
                                    </div>
                                    <button className="btn btn-primary w-100">Calculate Life Premium</button>
                                </form>
                            </div>
                            {showLifeResult && (
                                <div className="col-md-5 mt-4 mt-md-0">
                                    <div className="p-4 bg-light rounded border">
                                        <h6 className="fw-bold">Life Insurance Estimate</h6>
                                        <h4 className="text-primary fw-bold mb-1">₹{lifePremium.toLocaleString()}/month</h4>
                                        <small className="text-muted">Estimated monthly premium</small>
                                        <div className="mt-3 p-3 bg-white rounded shadow-sm">
                                            <strong>Recommended Coverage:</strong> ₹{coverageAmount.toLocaleString()}
                                            <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.9rem' }}>
                                                This covers 10–12× your annual income plus existing loans.
                                                Term insurance is the most cost-effective option.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Optional placeholder */}
                    {selectedTab === 'Car' && (
                        <div className="text-muted text-center py-3">
                            {selectedTab === 'Car' && (
                                <div className="row">
                                    <div className="col-md-7">
                                        <h5 className="text-start mb-4 fw-bold">Car Insurance Calculator</h5>
                                        <form onSubmit={calculateCar}>
                                            <div className="mb-3 text-start">
                                                <label>Car Market Value (₹)</label>
                                                <input type="number" name="marketValue" className="form-control" value={carForm.marketValue} onChange={handleCarChange} />
                                            </div>
                                            <div className="mb-3 text-start">
                                                <label>Car Age (Years)</label>
                                                <input type="number" name="carAge" className="form-control" value={carForm.carAge} onChange={handleCarChange} />
                                            </div>
                                            <div className="mb-3 text-start">
                                                <label>City Type</label>
                                                <select name="cityType" className="form-select" value={carForm.cityType} onChange={handleCarChange}>
                                                    <option value="">Select</option>
                                                    <option>Metro City</option>
                                                    <option>Tier-1</option>
                                                    <option>Tier-2</option>
                                                </select>
                                            </div>
                                            <div className="mb-4 text-start">
                                                <label>Previous Claims (Last 3 years)</label>
                                                <input type="number" name="claims" className="form-control" value={carForm.claims} onChange={handleCarChange} />
                                            </div>
                                            <button className="btn btn-primary w-100">Calculate Car Premium</button>
                                        </form>
                                    </div>

                                    {showCarResult && (
                                        <div className="col-md-5 mt-4 mt-md-0">
                                            <div className="p-4 bg-light rounded border">
                                                <h6 className="fw-bold">Car Insurance Estimate</h6>
                                                <h4 className="text-primary fw-bold mb-1">₹{carPremium.toLocaleString()}/year</h4>
                                                <small className="text-muted">Estimated annual premium</small>
                                                <div className="mt-3 p-3 bg-white rounded shadow-sm">
                                                    <strong>Coverage Type:</strong> Comprehensive
                                                    <p className="text-muted mt-2 mb-0" style={{ fontSize: '0.9rem' }}>
                                                        This includes third-party liability, own damage, and personal accident cover. Add-ons like zero depreciation can increase premium by 15–20%.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InsuranceCalculator;
