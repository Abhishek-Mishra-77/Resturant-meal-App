import React, { useContext } from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartItems from "./CartItems";
import { ItemProvidercontext } from "../storeContext/ItemProvider";


const Cart = (props) => {

    const cartCtx = useContext(ItemProvidercontext)

    const totalAmount = cartCtx.totalAmount;



    const cartItems = (
        <ul className={classes.cartItem}>
            {cartCtx.items.map((item) => (
                <CartItems
                    key={item.id}
                    id={item.id}
                    count={item.count}
                    description={item.description}
                    name={item.name}
                    price={item.price}
                    addByOne={cartCtx.addByOne}
                    removeByOne={cartCtx.removeByOne}
                />
            ))}
        </ul>
    )


    return (
        <Modal>

            {cartItems}

            <div className={classes.total}>
                <span>Total Amount</span>
                <span>$ {totalAmount}</span>
            </div>

            <div className={classes.actions}>
                <button className={classes.buttonItem} onClick={props.closeCartHandler}>
                    Close
                </button>
                <button onClick={props.openCartHandler}>Order</button>
            </div>

        </Modal >

    )
}

export default Cart;