import React from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";

const Cart = (props) => {
    return (
        <Modal>
            <div className={classes.cart}>
                <div className={classes.cartContent}>
                    <span className={classes.name}>surabhi</span>
                    <span className={classes.amount}>Total Amount</span>
                </div>
                <div className={classes.price}>
                    <span className={classes.price1}>50.55</span>
                    <button className={classes.button1}>Order</button>
                    <button 
                    className={classes.button2}
                    onClick={props.closeCartHandler}>Close</button>
                </div>
                <div>

                </div>
            </div>
        </Modal>

    )
}

export default Cart;