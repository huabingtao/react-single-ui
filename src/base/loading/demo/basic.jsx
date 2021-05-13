import React from 'react';
import { Loading } from 'hero'

export default ()=>{
    return (
        <>
        <p>default</p>
        <Loading ></Loading>
        <p>自定义</p>
        <Loading color="#0094ff" textColor="#0094ff">Loading...</Loading>
        </>
    )
}