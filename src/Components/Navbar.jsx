import logo from '../Assets/vahak.jpg';

const Navbar = ({steps}) => {
  return (
    <>
    <div className="nav-logo d-flex flex-a-center">
        <img src={logo} alt='vahak'/>
        <h3 className="pointer">Vahak</h3>
    </div>
    <div className="nav-bid">
        <h3 className="fw-700 white">{steps === 4 ? "Summary & Submit Bid" : steps === 3 ? "Verify OTP" : "Place your Bid"} ({steps}/4 step)</h3>
    </div>
    </>);
};

export default Navbar;
