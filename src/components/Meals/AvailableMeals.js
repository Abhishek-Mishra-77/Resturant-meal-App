import React, { Fragment } from "react";
import classes from './AvailableMeals.module.css';
import MealsForm from "./MealItemForm";

const Meals = () => {


    const Initial_Meals = [
        {
            id: '01',
            name: 'Nidhi',
            description: 'Samosa',
            price: '120'
        },
        {
            id: '02',
            name: 'Roshan',
            description: 'Chineze momos',
            price: '140.2'
        },
        {
            id: '03',
            name: 'Komal',
            description: 'Jalebi and Dahi',
            price: '90'
        }
    ]



    return (

        <section className={classes.meals}>
            <div>
                <ul>
                    {Initial_Meals.map((meal) => (
                        <li>
                            <div className={classes.main}>
                                <div className={classes.content}>
                                    <span className={classes.name}>{meal.name}</span><br />
                                    <span className={classes.description}>{meal.description}</span><br />
                                    <span className={classes.price}>$ {meal.price}</span>
                                    <hr className={classes.line}></hr>
                                </div>
                                <div className={classes.mealForm}><MealsForm/></div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>

    )
}

export default Meals;



{/* <section className={classes.meals}>
<ul>
    {Initial_Meals.map((meal) => (
        <li>
            <div className={classes.main}>
                <div className={classes.content}>
                    <span className={classes.name}>{meal.name}</span> <br />
                    <span>{meal.description} </span><br />
                    <span className={classes.price}>${meal.price}</span>
                </div>

                <div className={classes.formContent}>
                    <MealsForm />
                </div>
            </div>


            <hr></hr>
        </li>

    ))}
</ul>
</section> */}


