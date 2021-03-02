(async () => {
  const resUsdt = await fetch('https://api.tdax.com/api/v3/ticker/24hr?symbol=usdt_thb')
  const usdt = await resUsdt.json();
  document.getElementById('usdt-satang').innerHTML = `$${usdt.askPrice}`;
  
  const resBNB = await fetch('https://api.tdax.com/api/v3/ticker/24hr?symbol=bnb_thb')
  const bnb = await resBNB.json();
  document.getElementById('bnb-thb-satang').innerHTML = `฿${parseFloat(bnb.askPrice).toLocaleString()}`;
  document.getElementById('bnb-satang').innerHTML = `$${(bnb.askPrice / usdt.askPrice).toFixed(2).toLocaleString()}`;

  const resBNBBinance = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT')
  const bnbBinance = await resBNBBinance.json();
  document.getElementById('bnb-binance').innerHTML = `$${parseFloat(bnbBinance.price).toFixed(2)}`;
})()
