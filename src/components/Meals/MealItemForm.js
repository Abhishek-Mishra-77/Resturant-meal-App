import React, { useContext, useRef } from "react";
import classes from './MealItemForm.module.css';
import { ItemProvidercontext } from "../storeContext/ItemProvider";

const MealsForm = (props) => {
    const itemCtx = useContext(ItemProvidercontext);


    const amountInfoRef = useRef();

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const count = +amountInfoRef.current.value;

        itemCtx.addItem({ ...props.itemProp, count })
    }


    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <label>Amount</label>
            <input
                ref={amountInfoRef}
                type="number"
                id="amount"
                min='1'
                max='5'
                step='1'
                defaultValue='1'
            />
            <button>+Add</button>
        </form>
    )
}

export default MealsForm;