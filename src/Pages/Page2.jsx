import {useState} from 'react'
import TextField from '@mui/material/TextField'; 

const Page2 = ({userDetails}) => {

    const [isRateNegotiable, setRateNegotiable] = useState(false);
    const [nextBtn, setNextBtn] = useState(false);

  return (
    <div className="d-flex-center">
        <div className='page'>
            <>
            <div className='d-flex-space-b pb100'>
                <div className='p20'>
                    <h6 className='p3 mb-8 gray'>Journey Details</h6>
                    <h5 className='p3'>{userDetails.values.source} - {userDetails.values.destination}</h5>
                    <h5 className='p3'>{userDetails.values.travellers} Persons, {userDetails.values.car}</h5>
                </div>
                <div className='d-flex p20 editBtn'>
                    <i className="fas fa-pencil-alt fa-sm"></i>
                    <button className='pointer'>Edit</button>
                </div>
            </div>
            <div className='p20 t-center bid-input'>
                <span className='bid'>₹</span>
                <input type="text" name='price' placeholder='0' value={userDetails.values.price} onChange={userDetails.handleChange}/>
            </div>
            <div className='p20 d-flex-center'>
                <input type="checkbox" id='rate' className='pointer' value={isRateNegotiable} onClick={ () => setRateNegotiable(!isRateNegotiable)}/>
                <label htmlFor='rate' className='ml-5 pointer'><h5>Rate Negotiable</h5></label>
            </div>
            </>
            {!nextBtn && <div className='p20'>
                <button className={`w-100 white fw-700 pointer p15 ${!userDetails.values.price ? "bid-btn-disable" : "bid-btn"}`} disabled={!userDetails.values.price} onClick={() => setNextBtn(true)}>Next</button>
            </div>}
            {nextBtn && 
            <>
            <form onSubmit={userDetails.handleSubmit} noValidate>
                <div className='p20'>
                    <TextField
                    fullWidth
                    size='medium'
                    name='phone'
                    id="outlined-required"
                    label="Enter your 10 digits Mobile number"
                    value={userDetails.values.phone}
                    onChange={userDetails.handleChange}
                    />
                </div>
                <div className='p20'>
                    <TextField
                    fullWidth
                    required
                    size='medium'
                    name='name'
                    id="outlined-required"
                    label="Enter your Name"
                    value={userDetails.values.name}
                    onChange={userDetails.handleChange}
                    />
                {userDetails.errors.name ? <h6 className='alert'>{userDetails.errors.name}</h6> : null}    
                </div>
                <div className='p20'>
                    <TextField
                    fullWidth
                    size='medium'
                    name='remarks'
                    id="outlined-required"
                    label="Enter Remarks (optional)"
                    value={userDetails.values.remarks}
                    onChange={userDetails.handleChange}
                    />
                </div>
                <div className='p20'>
                    <button type='submit' className='w-100 bid-btn white fw-700 pointer p15'>Enter Bid Details</button>
                </div>
            </form>
            </>}
        </div>
    </div>);
};

export default Page2;
