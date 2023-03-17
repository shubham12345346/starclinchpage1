import { height } from '@mui/system';
import React from 'react';
import img from './images/1.webp';

const White = () => {
  return (
    <>
        <div align="center" style={{paddingTop:'100px'}}><img src={img} alt='logo'/></div>
    <div style={{backgroundColor:'white', height:'150px'}}>
        <br/>
        <h1 align= "center">Good things to come to those who wait...</h1>
        </div>
    </>
  );
}

export default White;