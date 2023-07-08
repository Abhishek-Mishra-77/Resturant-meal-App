import React, { Fragment } from "react";
import classes from './Summary.module.css';

const Summary = () => (
    <Fragment>
        <div className={classes.summary}>
            <h2>Delicious Food , Delivered To You</h2>
            <p>Choose your favorite meal from our broad selectio of available meals and
                enjoy a delicious lunch or dinner at home.
            </p>
            <p>All our meals are cooked with high-quality ingredients ,
                Just-in-time and of course by experienced chefs!
            </p>
        </div>
    </Fragment>
)

export default Summary;