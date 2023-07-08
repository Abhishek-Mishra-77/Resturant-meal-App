import React, { Fragment } from "react";
import classes from './AvailableMeals.module.css';

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
        },
        {
            id: '04',
            name: 'Sunil',
            description: 'Milk Sek',
            price: '40.2'
        },
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
        },
        {
            id: '04',
            name: 'Sunil',
            description: 'Milk Sek',
            price: '40.2'
        },
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
        },
        {
            id: '04',
            name: 'Sunil',
            description: 'Milk Sek',
            price: '40.2'
        },
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
        },
        {
            id: '04',
            name: 'Sunil',
            description: 'Milk Sek',
            price: '40.2'
        }
    ]



    return (
        <section className={classes.meals}>
            <ul>
                {Initial_Meals.map((meal) => (
                    <li>
                        <span className={classes.name}>{meal.name}</span> <br />
                        <span>{meal.description} </span><br />
                        <span className={classes.price}>${meal.price}</span>
                        <hr></hr>
                    </li>
                ))}
            </ul>
        </section>

    )
}

export default Meals;


