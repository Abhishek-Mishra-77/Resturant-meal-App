import React, { Fragment } from "react";
import classes from './Header.module.css';
import HeaderButton from "./HeaderButton";
import mealsImage from '../../images/meals1.jpg';
import Summary from "../Meals/Summary";


const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Reactmeals</h1>
               <HeaderButton></HeaderButton>
            </header>
            
          <div className={classes['main-image']}>
            <img src={mealsImage} alt="Image of Table Food"/>
          </div>

          <Summary/>

          
        </Fragment>
    )
}

export default Header;