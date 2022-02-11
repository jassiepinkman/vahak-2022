import TextField from '@mui/material/TextField'; 
import MenuItem from '@mui/material/MenuItem';

const Page1 = ({userDetails}) => {
    
  return (
    <div className="d-flex-center">
        <div className='page'>
            <form onSubmit={userDetails.handleSubmit} noValidate>
                <div className='d-flex py-1'>
                    <div className='p20'>
                        <TextField
                        required
                        id="outlined-required"
                        label="Source Location"
                        name='source'
                        value={userDetails.values.source}
                        onChange={userDetails.handleChange}
                        />
                    {userDetails.errors.source ? <h6 className='alert'>{userDetails.errors.source}</h6> : null}
                    </div>
                    <div className='p20'>
                        <TextField
                        required
                        name='destination'
                        id="outlined-required"
                        label="Destination"
                        value={userDetails.values.destination}
                        onChange={userDetails.handleChange}
                        />
                    {userDetails.errors.destination ? <h6 className='alert'>{userDetails.errors.destination}</h6> : null}    
                    </div>
                </div>
                <div className='p20'>
                    <TextField
                    fullWidth
                    id="outlined-select-currency"
                    select
                    size='medium'
                    name='car'
                    label="Enter Car Type"
                    value={userDetails.values.car}
                    onChange={userDetails.handleChange}
                    >
                    {userDetails.values.carType.map((car) => (
                        <MenuItem key={car} value={car}>
                        {car}
                        </MenuItem>
                    ))}
                    </TextField>
                </div>
                <div className='p20'>
                    <TextField
                    fullWidth
                    size='medium'
                    id="outlined-required"
                    required
                    name='travellers'
                    label="Number of Travellers"
                    value={userDetails.values.travellers}
                    onChange={userDetails.handleChange}
                    />
                {userDetails.errors.travellers ? <h6 className='alert'>{userDetails.errors.travellers}</h6> : null}            
                </div>
                <div className='p20'>
                    <button type='submit' className='w-100 bid-btn fw-700 white pointer p15'>Enter Bid Details</button>
                </div>
            </form>
        </div>
    </div>);
};

export default Page1;
