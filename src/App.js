import React, { useEffect, useRef, useState } from "react";
import { createChart } from 'lightweight-charts';
import Choose from "./Choose";

export default function App() {

  const [items, setItems] = useState('BTC');
  const coin = useRef(null);
  const dom = document.getElementById('container');

  function handleChange() {
    dom.innerText = '';
    setItems(coin.current.value);
  }

  useEffect(() => {
    const chartProperties = {
      timeScale: {
        timeVisible: true,
        secondsVisible: false,
      },
    };
    
    const graph = createChart(dom , chartProperties);
    const candleseries = graph.addCandlestickSeries();

    fetch(`https://api.binance.com/api/v3/klines?symbol=${items}USDT&interval=1d`)
      .then(res => res.json())
      .then(
        (result) => {
          const cdata = result.map(d => {
            return {time:d[0]/1000, open:parseFloat(d[1]), high:parseFloat(d[2]), low:parseFloat(d[3]), close:parseFloat(d[4])}
        })
        candleseries.setData(cdata);
      })
  }, [items])

  
  return (
    <>
    <div className="w-25 input-group m-1 position-relative start-50 translate-middle-x">
      <button className="btn btn-success" onClick={handleChange}>Show</button>
      <input type="text" className="form-control" placeholder="Type a symbol..." ref={coin} defaultValue={items}></input>
    </div>
    <Choose setItems={setItems} />
    </>
  );
}