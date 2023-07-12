import React, { useContext } from "react";
import classes from './MealItem.module.css'
import MealsForm from "./MealItemForm";

const MealItem = (props) => {




    return (
        <li>
            <div className={classes.main}>
                <div className={classes.content}>
                    <span className={classes.name}>{props.name}</span><br />
                    <span className={classes.description}>{props.description}</span><br />
                    <span className={classes.price}>$ {props.price}</span>
                    <hr className={classes.line}></hr>
                </div>

                <div
                    className={classes.mealForm}>
                    <MealsForm itemProp={props} /></div>
            </div>
        </li>
    )
}

export default MealItem;