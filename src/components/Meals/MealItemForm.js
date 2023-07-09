import React from "react";
import classes from './MealItemForm.module.css';

const MealsForm = (props) => {
    return (
        <form className={classes.form}>
            <label>Amount</label>
            <input type="number" value={1} />
            <button>+Add</button>
        </form>
    )
}

export default MealsForm;