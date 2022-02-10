import {useState, useRef} from 'react'

const Page3 = ({nextStep, userDetails}) => {

    const [otp, setOtp] = useState({otp1: "", otp2: "", otp3: "", otp4: ""});
    const btnRef = useRef();

    const handleOtpChange = event => {
        const { name, value } = event.target;
        setOtp({ ...otp, [name]: value });
      };

    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
          const next = elmnt.target.tabIndex - 2;
          if (next > -1) {
            elmnt.target.form.elements[next].focus()
          }
        }
        else {
            const next = elmnt.target.tabIndex;
            if (next < 4) {
              elmnt.target.form.elements[next].focus()
            }
            if (next === 4) {
                if(otp.otp1 === "1" && otp.otp2 === "2" && otp.otp3 === "3" && otp.otp4 === "4")
                btnRef.current.click();
            }
        }
      }

  return (
    <div className="d-flex-center">
        <div className='page'>
            <div className='d-flex-space-b'>
                <div className='p20'>
                    <h6 className='p3 mb-8 gray'>JOURNEY DETAILS</h6>
                    <h5 className='p3'>{userDetails.values.source} - {userDetails.values.destination}</h5>
                    <h5 className='p3'>{userDetails.values.travellers} Persons, {userDetails.values.car}</h5>
                </div>
                <div className='d-flex p20 editBtn'>
                    <i className="fas fa-pencil-alt fa-sm"></i>
                    <button className='pointer'>Edit</button>
                </div>
            </div>
            <div className='d-flex-space-b'>
                <div className='p20'>
                    <h6 className='p3 mb-8 gray'>BID DETAILS</h6>
                    <h5 className='p3'>+91-{userDetails.values.phone}</h5>
                    <h5 className='p3'>{userDetails.values.name}</h5>
                    <h5 className='p3'>{userDetails.values.remarks ? userDetails.values.remarks : 'NA'}</h5>
                </div>
                <div className='p20 d-flex-center flex-column'>
                    <h3 className='d-flex'><span>₹</span>&nbsp;<span>{userDetails.values.price}</span></h3>
                    <h6 className='gray'>Fixed Price</h6>
                </div>
            </div>
            <div className='d-flex-space-b'>
                <div className='p20'>
                    <h5 className='p3 gray'>We've sent an OTP to your mobile number, Please enter it</h5>
                    <div className='p3 d-flex flex-a-center'>
                        <h5 className='gray'>below to submit your bid </h5>
                        <span className='ml-5'>
                            <b>{userDetails.values.phone}</b>
                        </span>  
                        <div className='d-flex ml-5 editBtn'>
                            <i className="fas fa-pencil-alt"></i>
                            <button className='pointer'>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-20'>
                <form>
                    <div className="d-flex-center">
                    <input
                        name="otp1"
                        type="text"
                        className="otpInput"
                        value={otp.otp1}
                        onChange={e => handleOtpChange(e)}
                        tabIndex="1" maxLength="1" onKeyUp={e => inputfocus(e)}

                    />
                    <input
                        name="otp2"
                        type="text"
                        className="otpInput"
                        value={otp.otp2}
                        onChange={e => handleOtpChange(e)}
                        tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)}

                    />
                    <input
                        name="otp3"
                        type="text"
                        className="otpInput"
                        value={otp.otp3}
                        onChange={e => handleOtpChange(e)}
                        tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)}

                    />
                    <input
                        name="otp4"
                        type="text"
                        className="otpInput"
                        value={otp.otp4}
                        onChange={e => handleOtpChange(e)}
                        tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)}
                    />
                    </div>
                </form>
            </div>
            <div className='t-center'>
                <h5 className='pointer'><u>Resend OTP Again</u> </h5>
            </div>
            <div className='p20'>
                <button 
                    ref={btnRef} 
                    className='w-100 bid-btn white fw-700 pointer p15' 
                    disabled={otp.otp1 !== "1" && otp.otp2 !== "2" && otp.otp3 !== "3" && otp.otp4 !== "4"} 
                    onClick={nextStep}>
                    Verify via OTP
                </button>
            </div>
        </div>
    </div>);
};

export default Page3;
