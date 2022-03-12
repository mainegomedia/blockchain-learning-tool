import React, { useContext } from 'react';
import { Context } from './Store';
import { useSpring, animated, Transition } from 'react-spring';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import Store from './Store';



const TableArea = () => {
    const [ coinPrice, setBitCoinPrice ] = React.useContext(Context)['value'];
    const [ ethereumPrice, setEthereumPrice ] = React.useContext(Context)['value2'];
    const [ tetherCoinPrice, setTetherPrice ] = React.useContext(Context)['value3'];
    const [ binanceCoinPrice, setBinancePrice ] = React.useContext(Context)['value4'];
    const [ usdcCoinPrice, setUSDCPrices ] = React.useContext(Context)['value5'];

    const style1 = useSpring({
        from: { opacity: 0, x: -100 },
        to: { opacity: 1, x: 0 },

        config: { duration: 500 }
    })


  
  return (
  
  
<animated.div style={style1}>
  <div className="p-3 border bg-light">
            <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Rank</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td> Bitcoin </td>
                <td> { coinPrice } </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td> Ethereum </td>
                <td> { ethereumPrice } </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td> Tether </td>
                <td> { tetherCoinPrice } </td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td> Binance Coin </td>
                <td> { binanceCoinPrice } </td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td> USDC Coin </td>
                <td> { usdcCoinPrice } </td>
                </tr>
            </tbody>
            </table>
        </div>
</animated.div>
        );

};

export default TableArea;
