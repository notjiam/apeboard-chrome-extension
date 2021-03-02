const POLLING_TIMER = 1000 * 60 // 1 min
const symbol = "bnb_thb" // Satang Pro Symbol

const fecthApi = async () => {
  const resBNB = await fetch(`https://api.tdax.com/api/v3/ticker/24hr?symbol=${symbol}`)
  const bnb = await resBNB.json();
  chrome.browserAction.setBadgeText({text: `${parseInt(bnb.askPrice)}`});
  if (bnb.priceChange > 0) {
    chrome.browserAction.setBadgeBackgroundColor({ color: [0, 200, 0, 255] });
  } else {
    chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
  }
}

fecthApi()
setInterval(() => {
  fecthApi()
}, POLLING_TIMER );