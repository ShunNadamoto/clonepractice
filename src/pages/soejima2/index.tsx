import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';

//import { Counter } from "./Counter";
//import { Hello } from "./Hello";

// http://localhost:3000/soejima2

const INITIAL_COUNT = 0;
const INITIAL_NAME = "Javascript";


const Soejima2: NextPage = () => {

    const [count, setCount] = useState(INITIAL_COUNT);
    
    const [name, setName] = useState(INITIAL_NAME);

    const countIncrement = () => setCount((prevCount) => prevCount + 1);

    const countDecrement = () => setCount((prevCount) => prevCount - 1);

    const countReset = () => setCount(INITIAL_COUNT);

    const handleChangeName = (e:any) =>{
        setName(e.target.value);
    }
    return (
        <>
            
        </>
    );
};

export default Soejima2