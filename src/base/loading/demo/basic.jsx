import React from 'react';
import { Loading } from 'hero'

export default ()=>{
    return (
        <>
        <h1 className="hero-title">default</h1>
        <Loading ></Loading>
        <h1 className="hero-title">自定义样式</h1>
        <Loading type="circle-notch" color="#0094ff" textColor="#0094ff">Loading...</Loading>
        </>
    )
}