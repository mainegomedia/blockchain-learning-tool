import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialState = "0.00"

export const Context = React.createContext();


const Store = ( { children } ) => {

    const [ coinPrice, setBitCoinPrice ] = useState( initialState ); 
    const [ ethereumPrice, setEthereumPrice ] = useState( initialState ); 
    const [ tetherCoinPrice, setTetherPrice ] = useState( initialState ); 
    const [ binanceCoinPrice, setBinancePrice ] = useState( initialState ); 
    const [ usdcCoinPrice, setUSDCPrices ] = useState( initialState ); 
    
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
        .then(res => {
            // This is here just to check output of data is correct
            // console.log(res.data[0].current_price)
            // console.log(res.data[1].current_price)
            // console.log(res.data[2].current_price)
            // console.log(res.data[3].current_price)

            var bitcoinPrice = (res.data[0].current_price)
            var ethereumCoinPrice = (res.data[1].current_price)
            var tetherCoinPrice = (res.data[2].current_price)
            var binanceCoinPrice = (res.data[3].current_price)
            var usdcCoinPrice = (res.data[4].current_price)
               
            setBitCoinPrice(bitcoinPrice) 
            setEthereumPrice(ethereumCoinPrice) 
            setTetherPrice(tetherCoinPrice) 
            setBinancePrice(binanceCoinPrice) 
            setUSDCPrices(usdcCoinPrice)

        })
        .catch(error => console.log(error))                 
    }, [coinPrice, ethereumPrice, tetherCoinPrice]);
    
    // return <div></div>;
    return (<Context.Provider value={{ 
        value: [ coinPrice, setBitCoinPrice ] , 
        value2: [ ethereumPrice, setEthereumPrice] ,
        value3: [ tetherCoinPrice, setTetherPrice] ,
        value4: [ binanceCoinPrice, setBinancePrice ],
        value5: [ usdcCoinPrice, setUSDCPrices ]
     }}> { children } </Context.Provider>);
}
export default Store;



