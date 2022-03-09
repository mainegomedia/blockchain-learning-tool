import axios from 'axios';
import { useEffect, useState } from 'react';

const CoinGeckoApi = () => {
  const [ coinNames, setCoinNames] = useState([]);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=1&sparkline=false')
    .then(res => {
        console.log(res)
        setCoinNames(res.data)
      })
      .catch(error => console.log(error))                 
    }, []);

    return  (<div>
             {/* <ul> {coinNames.map(coinName => <li key={coinName.id}> { coinName.name} </li>)}</ul> */}
            </div>
    )     
}



export default CoinGeckoApi;


