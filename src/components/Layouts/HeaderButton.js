import React, { createContext, useContext, useState } from "react";
import cardImage from '../../images/cart3.jpg';
import classes from './HeaderButton.module.css';
import { ItemProvidercontext } from "../storeContext/ItemProvider";

const HeaderButton = (props) => {

    const cartCtx = useContext(ItemProvidercontext);


    return (
        <button className={classes.button} onClick={props.openCartHandler}>
            <span className={classes.icon}>
                <img src={cardImage} />
            </span>

            <span>Your Cart</span>
            <span className={classes.badge}>{cartCtx.count}</span>
        </button>
    )
}

export default HeaderButton;