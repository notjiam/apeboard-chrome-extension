const config = {
  WALLET_ADDRESS: "YOUR_WALLET_ADDRESS",
  CHAIN: "BSC", // ETHEREUM | BSC | TERRA
  SYMBOLS: [
    "BTCUSDT",
    "ETHUSDT",
    "BNBUSDT",
    "DOGEUSDT",
  ],
};

(async () => {
  document.querySelector('.iframe-wrapper').innerHTML = `<iframe 
    id="iframe"
    src="https://apeboard.finance/dashboard/${config.WALLET_ADDRESS}?chain=${config.CHAIN}" 
    frameborder="0" />
  `;

  const resTicker = await fetch(`https://api.binance.com/api/v3/ticker/price`)
  const tickers = await resTicker.json();
  renderPrice(tickers);

})();

function renderPrice(tickers) {
  const getPrice = (symbol) => {
    return tickers.find(item => item.symbol === symbol).price;
  }
  config.SYMBOLS.forEach(symbol => {
    document.querySelector ('.price-list').innerHTML += `
      <div>
        <div class="label">${symbol.replace('USDT', '/USDT')}</div>
        <div class="value">${ parseFloat(getPrice(symbol)).toFixed(2).toLocaleString()}</div>
      </div>
    `;
  })
};

// All Binance SYMBOLS
/*
BTCUSDT
ETHUSDT
BNBUSDT
BCCUSDT
NEOUSDT
LTCUSDT
QTUMUSDT
ADAUSDT
XRPUSDT
EOSUSDT
TUSDUSDT
IOTAUSDT
XLMUSDT
ONTUSDT
TRXUSDT
ETCUSDT
ICXUSDT
VENUSDT
NULSUSDT
VETUSDT
PAXUSDT
BCHABCUSDT
BCHSVUSDT
USDCUSDT
LINKUSDT
WAVESUSDT
BTTUSDT
USDSUSDT
ONGUSDT
HOTUSDT
ZILUSDT
ZRXUSDT
FETUSDT
BATUSDT
XMRUSDT
ZECUSDT
IOSTUSDT
CELRUSDT
DASHUSDT
NANOUSDT
OMGUSDT
THETAUSDT
ENJUSDT
MITHUSDT
MATICUSDT
ATOMUSDT
TFUELUSDT
ONEUSDT
FTMUSDT
ALGOUSDT
USDSBUSDT
GTOUSDT
ERDUSDT
DOGEUSDT
DUSKUSDT
ANKRUSDT
WINUSDT
COSUSDT
NPXSUSDT
COCOSUSDT
MTLUSDT
TOMOUSDT
PERLUSDT
DENTUSDT
MFTUSDT
KEYUSDT
STORMUSDT
DOCKUSDT
WANUSDT
FUNUSDT
CVCUSDT
CHZUSDT
BANDUSDT
BUSDUSDT
BEAMUSDT
XTZUSDT
RENUSDT
RVNUSDT
HCUSDT
HBARUSDT
NKNUSDT
STXUSDT
KAVAUSDT
ARPAUSDT
IOTXUSDT
RLCUSDT
MCOUSDT
CTXCUSDT
BCHUSDT
TROYUSDT
VITEUSDT
FTTUSDT
EURUSDT
OGNUSDT
DREPUSDT
BULLUSDT
BEARUSDT
ETHBULLUSDT
ETHBEARUSDT
TCTUSDT
WRXUSDT
BTSUSDT
LSKUSDT
BNTUSDT
LTOUSDT
EOSBULLUSDT
EOSBEARUSDT
XRPBULLUSDT
XRPBEARUSDT
STRATUSDT
AIONUSDT
MBLUSDT
COTIUSDT
BNBBULLUSDT
BNBBEARUSDT
STPTUSDT
WTCUSDT
DATAUSDT
XZCUSDT
SOLUSDT
CTSIUSDT
HIVEUSDT
CHRUSDT
BTCUPUSDT
BTCDOWNUSDT
GXSUSDT
ARDRUSDT
LENDUSDT
MDTUSDT
STMXUSDT
KNCUSDT
REPUSDT
LRCUSDT
PNTUSDT
COMPUSDT
BKRWUSDT
SCUSDT
ZENUSDT
SNXUSDT
ETHUPUSDT
ETHDOWNUSDT
ADAUPUSDT
ADADOWNUSDT
LINKUPUSDT
LINKDOWNUSDT
VTHOUSDT
DGBUSDT
GBPUSDT
SXPUSDT
MKRUSDT
DAIUSDT
DCRUSDT
STORJUSDT
BNBUPUSDT
BNBDOWNUSDT
XTZUPUSDT
XTZDOWNUSDT
MANAUSDT
AUDUSDT
YFIUSDT
BALUSDT
BLZUSDT
IRISUSDT
KMDUSDT
JSTUSDT
SRMUSDT
ANTUSDT
CRVUSDT
SANDUSDT
OCEANUSDT
NMRUSDT
DOTUSDT
LUNAUSDT
RSRUSDT
PAXGUSDT
WNXMUSDT
TRBUSDT
BZRXUSDT
SUSHIUSDT
YFIIUSDT
KSMUSDT
EGLDUSDT
DIAUSDT
RUNEUSDT
FIOUSDT
UMAUSDT
EOSUPUSDT
EOSDOWNUSDT
TRXUPUSDT
TRXDOWNUSDT
XRPUPUSDT
XRPDOWNUSDT
DOTUPUSDT
DOTDOWNUSDT
BELUSDT
WINGUSDT
LTCUPUSDT
LTCDOWNUSDT
UNIUSDT
NBSUSDT
OXTUSDT
SUNUSDT
AVAXUSDT
HNTUSDT
FLMUSDT
UNIUPUSDT
UNIDOWNUSDT
ORNUSDT
UTKUSDT
XVSUSDT
ALPHAUSDT
AAVEUSDT
NEARUSDT
SXPUPUSDT
SXPDOWNUSDT
FILUSDT
FILUPUSDT
FILDOWNUSDT
YFIUPUSDT
YFIDOWNUSDT
INJUSDT
AUDIOUSDT
CTKUSDT
BCHUPUSDT
BCHDOWNUSDT
AKROUSDT
AXSUSDT
HARDUSDT
DNTUSDT
STRAXUSDT
UNFIUSDT
ROSEUSDT
AVAUSDT
XEMUSDT
AAVEUPUSDT
AAVEDOWNUSDT
SKLUSDT
SUSDUSDT
SUSHIUPUSDT
SUSHIDOWNUSDT
XLMUPUSDT
XLMDOWNUSDT
GRTUSDT
JUVUSDT
PSGUSDT
1INCHUSDT
REEFUSDT
OGUSDT
ATMUSDT
ASRUSDT
CELOUSDT
RIFUSDT
BTCSTUSDT
TRUUSDT
CKBUSDT
TWTUSDT
FIROUSDT
LITUSDT
SFPUSDT
DODOUSDT
CAKEUSDT
ACMUSDT
BADGERUSDT
FISUSDT
OMUSDT
PONDUSDT
DEGOUSDT
ALICEUSDT
LINAUSDT
PERPUSDT
RAMPUSDT
SUPERUSDT
CFXUSDT
EPSUSDT
AUTOUSDT
TKOUSDT
PUNDIXUSDT
TLMUSDT
1INCHUPUSDT
1INCHDOWNUSDT
BTGUSDT
*/

// Credit. Flook Nuttapong