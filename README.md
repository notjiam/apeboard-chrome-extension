# Apeboard Chrome Extension

Chrome extension wrap https://apeboard.finance/ in iframe and get latest price.

![Apeboard Chrome Extension](https://github.com/notjiam/apeboard-chrome-extension/blob/main/image.png?raw=true)

## How to config in local

Download this project, unzip and let config.

### Config Wallet
Go to `popup.html` file.
```
<iframe 
    id="iframe"
    src="https://apeboard.finance/dashboard/YOUR_WALLET_ADDRESS?chain=BSC" frameborder="0" ></iframe>
```

You can change **YOUR_WALLET_ADDRESS** to you wallet address and you can change **chain** also.

### Config price

Go to `background.js` file.

```
const POLLING_TIMER = 1000 * 60 // 1 min
const symbol = "bnb_thb" // Satang Pro Symbol
```
You can change polling time and symbol too.

## How to install
- Download this project and unzip.
- Config your wallet address.
- Go to `chrome://extensions/`.
- Turn on **Developer mode** on top right.
- Click **Load unpacked** and select project folder.
