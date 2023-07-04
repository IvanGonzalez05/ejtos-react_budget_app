import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const setCurrency = (event) => {
        const newCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className='alert alert-success row'>
            <label className='col mt-3' htmlFor='currency'>Currency {currency}</label>
            <select className='form-select alert alert-sucess col md-1' id='currency' onChange={(e) => setCurrency(e)}>
                <option style={{ backgroundColor: `rgb(144, 238, 144)`}} defaultValue value='£' name='pound'>£ Pound</option>
                <option style={{ backgroundColor: `rgb(144, 238, 144)`}} value='$' name='dollar'>$ Dollar</option>
                <option style={{ backgroundColor: `rgb(144, 238, 144)`}} value='€' name='euro'>€ Euro</option>
                <option style={{ backgroundColor: `rgb(144, 238, 144)`}} value='₹' name='ruppee'>₹ Ruppee</option>
            </select>
        </div>
    );
};

export default Currency;