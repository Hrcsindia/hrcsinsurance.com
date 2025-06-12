const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src="../hrcslogo.jpg" style={{ height: '35px', width: '35px' }} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-center gap-4 w-100">
            <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#compare">Compare Plans</a></li>
            <li className="nav-item"><a className="nav-link" href="#calculator">Insurance Calculator</a></li>
            <li className="nav-item"><a className="nav-link" href="#info">About Us</a></li>
            <li className="nav-item"><a className="nav-link" href="#support">Support</a></li>
          </ul>
          <a href="#support" className="btn btn-primary ms-auto">Get Quote</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
