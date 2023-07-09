import React, { useState } from "react";
import cardImage from '../../images/cart3.jpg';
import classes from './HeaderButton.module.css';


const HeaderButton = (props) => {



    return (
        <button className={classes.button} onClick={props.openCartHandler}>
            <span className={classes.icon}>
                <img src={cardImage} />
            </span>

            <span>Your Cart</span>
            <span className={classes.badge}>0</span>
        </button>
    )
}

export default HeaderButton;