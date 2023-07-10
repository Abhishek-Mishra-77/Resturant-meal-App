import React from "react";

const Context = React.createContext({
    items: [],
    totalAmount: 4,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default Context;