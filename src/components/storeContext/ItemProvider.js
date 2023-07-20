import React, { createContext, useEffect, useState } from 'react'

export const ItemProvidercontext = createContext();

const ItemProvider = (props) => {
    const [items, setItems] = useState([]);
    const [count, setCount] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0);




    useEffect(() => {
        let c = 0;
        let amount = 0;
        items.forEach((item) => {
            c = c + item.count;
            amount += item.count * item.price;
        })
        setCount(c);
        setTotalAmount(amount.toFixed(2))
    }, [items])




    const addByOne = (id) => {
        setItems(() => {
            const restItem = items.filter((item) => item.id !== id);
            const currentItem = items.filter((item) => item.id === id)[0];
            if (currentItem) {
                currentItem.count++;
            }
            return [...restItem, currentItem]
        })
    }




    const removeByOne = (id) => {
        setItems(() => {
            const restItem = items.filter((item) => item.id !== id);
            const currentItem = items.filter((item) => item.id === id)[0];
            if(currentItem){
                if(currentItem.count > 1){
                    currentItem.count--;
                }else{
                    return restItem;
                }
            }
            return [...restItem, currentItem]
        })
    }



    const addItem = (mitem) => {
        const { id, count } = mitem;
        setItems((oldItem) => {
            let currentItem = oldItem.filter((item) => item.id === id)[0];

            const restItem = oldItem.filter((item) => item.id !== id);
            if (currentItem) {
                currentItem.count += count;
            }
            else {
                currentItem = mitem;
            }
            return [...restItem, currentItem];
        }
        )
    }


    return (<ItemProvidercontext.Provider value={{ items, addItem, count, totalAmount,addByOne,removeByOne }}>
        {props.children}

    </ItemProvidercontext.Provider>)
}

export default ItemProvider;

