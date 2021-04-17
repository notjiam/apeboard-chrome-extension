const config = {
  SYMBOL: "THB_BTC", // Bitkub Symbol
  POLLING_TIMER: 60,  // Sec
}

const fecthApi = async () => {
  const resTicker = await fetch(`https://api.bitkub.com/api/market/ticker?sym=${config.SYMBOL}&v=${Math.random()}`)
  const ticker = await resTicker.json();
  chrome.browserAction.setBadgeText({text: `${ticker[config.SYMBOL].last}`});

  if (ticker[config.SYMBOL].percentChange > 0) {
    chrome.browserAction.setBadgeBackgroundColor({ color: [0, 200, 0, 255] });
  } else {
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
  }
}

fecthApi()
setInterval(() => {
  fecthApi()
}, config.POLLING_TIMER * 1000 );

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