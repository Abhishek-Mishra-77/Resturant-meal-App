import React, { useContext } from "react";
import classes from './CartItems.module.css';


const CartItems = (props) => {




    return (
        <li className={classes.cartItem}>
            <div className={classes.summary}>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <span className={classes.price}>${props.price}</span>
                <span className={classes.amount}> x  {props.count}</span>
            </div>


            <div className={classes.actions}>
                <button onClick={() => props.removeByOne(props.id)} >-</button>
                <button onClick={() => props.addByOne(props.id)}>+</button>
            </div>
        </li>
    )
}
export default CartItems