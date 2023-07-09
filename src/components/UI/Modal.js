import React, { Fragment } from "react";
import ReactDom from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return <div className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalId = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop />, portalId)}
            {ReactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>, portalId)}
        </Fragment>
    )
}

export default Modal;