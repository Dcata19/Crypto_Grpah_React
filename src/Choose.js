import React from 'react'

export default function Choose({ setItems, dom }) {

    function handleChange(event) {
        dom.innerText = '';
        setItems(event.target.innerText)
    }

    const symbols = ['BTC', 'ETH', 'USDT', 'BNB', 'XRP', 'ADA', 'SOL', 'DOGE', 'SHIB', 'TRX', 'XLM', 'APE'];
    const list = symbols.map((symbol, index) =>
        <li key={index} className='dropdown-item'><button className='btn' onClick={handleChange}>{symbol}</button></li>)

    return (
        <div className="dropdown">
            <button className="m-2 btn btn-info dropdown-toggle position-relative start-50 translate-middle-x" data-bs-toggle="dropdown" aria-expanded="false">
                Choose a coin
            </button>
            <ul className="dropdown-menu">
                {list}
            </ul>
        </div>
    )
}
