const Page4 = ({userDetails}) => {
  return (
    <div className="d-flex-center">
        <div className='page'>
            <div className='d-flex-space-b mb-20'>
                <div className='p20'>
                    <h6 className='p3 mb-8 gray'>JOURNEY DETAILS</h6>
                    <h5 className='p3'>{userDetails.values.source} - {userDetails.values.destination}</h5>
                    <h5 className='p3'>{userDetails.values.travellers} Persons, {userDetails.values.car}</h5>
                </div>
                <div className='d-flex p20 editBtn'>
                    <i className="fas fa-pencil-alt"></i>
                    <button className="pointer">Edit</button>
                </div>
            </div>
            <div className='d-flex-space-b mb-20'>
                <div className='p20'>
                    <h6 className='p3 mb-8 gray'>BID DETAILS</h6>
                    <h5 className='p3'>+91-{userDetails.values.phone}</h5>
                    <h5 className='p3'>{userDetails.values.name}</h5>
                    <h5 className='p3'>{userDetails.values.remarks ? userDetails.values.remarks : 'NA'}</h5>
                </div>
                <div className='p20 d-flex-center flex-column'>
                    <h3 className="d-flex"><span></span>₹&nbsp;<span>{userDetails.values.price}</span></h3>
                    <h6 className='gray'>Fixed Price</h6>
                </div>
            </div>
            <div className='p20'>
                <button className='w-100 bid-btn white fw-700 pointer p15'>Submit Bid</button>
            </div>
        </div>
    </div>);
};

export default Page4;
