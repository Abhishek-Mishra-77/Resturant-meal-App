import React, { Fragment } from "react";
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css';
import MealItem from "./MealItem";

const Meals = () => {


    const Initial_Meals = [
        {
            id: '01',
            name: 'Samosa',
            description: 'India Food',
            price: '120'
        },
        {
            id: '02',
            name: 'momo',
            description: 'Chineze momos',
            price: '140.2'
        },
        {
            id: '03',
            name: 'Jalebi',
            description: 'India sweet',
            price: '90'
        }
    ]


    const mealList = Initial_Meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ))


    return (

        <section className={classes.meals}>
            <div>
                <Card>
                    <ul>
                        {mealList}
                    </ul>
                </Card>
            </div>
        </section>

    )
}

export default Meals;






