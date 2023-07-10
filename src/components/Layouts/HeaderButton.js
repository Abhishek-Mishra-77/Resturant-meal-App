import React, { createContext, useContext, useState } from "react";
import cardImage from '../../images/cart3.jpg';
import classes from './HeaderButton.module.css';
import Context from "../storeContext/Context";

const HeaderButton = (props) => {

    const cartCtx = useContext(Context);


    const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
        console.log(item)
        return currNumber + item.amount;
    }, 5)




    return (
        <button className={classes.button} onClick={props.openCartHandler}>
            <span className={classes.icon}>
                <img src={cardImage} />
            </span>

            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderButton;