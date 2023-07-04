import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // const { budget, dispatch, expenses } = useContext(AppContext);
    const { budget, dispatch, currency } = useContext(AppContext);
    const updateBudget = (event) => {
        const value = event.target.value;
        // if(value > 20000) {
        //     alert('The value cannot exceed remaining funds');
        //     dispatch({
        //         type: 'SET_BUDGET',
        //         payload: budget,
        //     });
        //     return;
        // }
        // const spending = expenses.reduce((acc, curr) => acc + curr.cost, 0)
        // if (value < spending) {
        //     alert('The value cannot be lower than current spending');
        //     dispatch({
        //         type: 'SET_BUDGET',
        //         payload: budget,
        //     });
        //     return;
        // }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input
                type='number'
                step='10'
                onChange={updateBudget}
            />
        </div>
    );
};

export default Budget;