import React, { useState, useEffect, createContext} from 'react';

export const UserContext = createContext();

const UserDataProvider = (props) => {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(res => res.json())
        .then(res => {
            setData(res)
            setFlag(true)
        })
        .catch(err => { console.log(err) })
    }, [])
    const { children } = props;

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default UserDataProvider;