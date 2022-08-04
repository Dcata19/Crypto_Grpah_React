import React from 'react'

export default function Choose({ setItems, dom }) {
    
    function handleChange(event) {
        dom.innerText = '';
        setItems(event.currentTarget.id)
    }

    return (
        <div className="dropdown">
            <button className="m-2 btn btn-info dropdown-toggle position-relative start-50 translate-middle-x" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" id="BTC" onClick={handleChange}>BTC</a></li>
                <li><a className="dropdown-item" id="ETH" onClick={handleChange}>ETH</a></li>
                <li><a className="dropdown-item" id="USDT" onClick={handleChange}>USDT</a></li>
                <li><a className="dropdown-item" id="BNB" onClick={handleChange}>BNB</a></li>
                <li><a className="dropdown-item" id="XRP" onClick={handleChange}>XRP</a></li>
                <li><a className="dropdown-item" id="ADA" onClick={handleChange}>ADA</a></li>
                <li><a className="dropdown-item" id="SOL" onClick={handleChange}>SOL</a></li>
                <li><a className="dropdown-item" id="DOGE" onClick={handleChange}>DOGE</a></li>
                <li><a className="dropdown-item" id="SHIB" onClick={handleChange}>SHIB</a></li>
                <li><a className="dropdown-item" id="TRX" onClick={handleChange}>TRX</a></li>
                <li><a className="dropdown-item" id="XLM" onClick={handleChange}>XLM</a></li>
                <li><a className="dropdown-item" id="APE" onClick={handleChange}>APE</a></li>
            </ul>
        </div>
    )
}
