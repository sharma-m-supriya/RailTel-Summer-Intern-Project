import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const addUser = (user) => {
        setData([...data, user]);
    };

    const deleteUser = (id) => {
        setData(data.filter(user => user.id !== id));
    };

    return (
        <DataContext.Provider value={{ data, setData, addUser, deleteUser }}>
            {children}
        </DataContext.Provider>
    );
};
