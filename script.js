const config = {
  WALLET_ADDRESS: "YOUR_WALLET_ADDRESS",
  CHAIN: "BSC", // ETHEREUM | BSC | TERRA
  SYMBOLS: [
    "THB_BTC",
    "THB_ETH",
    "THB_BNB",
    "THB_DOGE",
  ],
};

(async () => {
  document.querySelector('.iframe-wrapper').innerHTML = `<iframe 
    id="iframe"
    src="https://apeboard.finance/dashboard/${config.WALLET_ADDRESS}?chain=${config.CHAIN}" 
    frameborder="0" />
  `;

  const resTicker = await fetch(`https://api.bitkub.com/api/market/ticker`)
  const tickers = await resTicker.json();
  renderPrice(tickers);

})();

function renderPrice(tickers) {
  config.SYMBOLS.forEach(symbol => {
    if (tickers[symbol] && tickers[symbol].last) {
      document.querySelector ('.price-list').innerHTML += `
        <div>
          <div class="label">${symbol.replace('_', '/')}</div>
          <div class="value">${tickers[symbol].last.toLocaleString()}</div>
        </div>
      `;
    }
    
  })
  

  // return div.firstChild; 
};

// All Bitkub SYMBOLS
/*
THB_BTC
THB_ETH
THB_WAN
THB_ADA
THB_OMG
THB_BCH
THB_USDT
THB_LTC
THB_XRP
THB_BSV
THB_ZIL
THB_SNT
THB_CVC
THB_LINK
THB_IOST
THB_ZRX
THB_KNC
THB_RDN
THB_ABT
THB_MANA
THB_INF
THB_CTXC
THB_XLM
THB_SIX
THB_JFIN
THB_EVX
THB_BNB
THB_POW
THB_DOGE
THB_DAI
THB_USDC
THB_BAT
THB_MKR
THB_BAND
THB_COMP
THB_KSM
THB_DOT
THB_NEAR
THB_SCRT
THB_GLM
THB_DON
THB_YFI
THB_UNI
THB_AAVE
*/