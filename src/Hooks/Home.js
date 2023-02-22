import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './userProvider';

const Home = () => {

    const dataa = useContext(UserContext);

    // const [data, setData] = useState([]);
    // const [flag, setFlag] = useState(false);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos/')
    //     .then(res => res.json())
    //     .then(res => {
    //         setData(res)
    //         setFlag(true)
    //     })
    //     .catch(err => { console.log(err) })
    //     return () => {
    //         console.log('Unmount Data')
    //         setTimeout(() => {
    //             setData([])
    //             setFlag(false)
    //         }, [3000])
    //     }
    // }, [])

    return(
        <>
        {/* {flag ? "Mount Data": 'Unmount Data'} */}
        {dataa?.map((data, index) => {
            return(<p key={index}>{data.title}</p>)
        })}
        </>
    )
}

export default Home;