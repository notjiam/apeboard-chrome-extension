# Apeboard Chrome Extension

Chrome extension wrap https://apeboard.finance/ in iframe and get latest price.

![Apeboard Chrome Extension](https://github.com/notjiam/apeboard-chrome-extension/blob/main/image.png?raw=true)

## How to config in local

Download this project, unzip and let config.

### Config Wallet, Chain network and Symbols 
Go to `script.js` file.
```
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
```

You can change **YOUR_WALLET_ADDRESS** to you wallet address.

### Config symbols in notification badge.

Go to `background.js` file.

```
const config = {
  SYMBOL: "THB_XRP", // Bitkub Symbol
  POLLING_TIMER: 60,  // Sec
}
```
You can change polling time and symbol too.

## How to install
- Download this project and unzip.
- Config your wallet address.
- Go to `chrome://extensions/`.
- Turn on **Developer mode** on top right.
- Click **Load unpacked** and select project folder.
