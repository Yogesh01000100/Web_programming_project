import React, { useEffect, useRef, memo } from 'react';


function Twid() {
  const contariner = useRef();
  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "BINANCE:BTCUSDT|1D|USD"
            ],
            [
              "BINANCE:MATICUSDT|1D|USD"
            ],
            [
              "COINBASE:ETHUSD|1D|USD"
            ]
          ],
          "chartOnly": false,
          "width": 1000,
          "height": 500,
          "locale": "in",
          "colorTheme": "light",
          "autosize": false,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "line",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "lineWidth": 2,
          "lineType": 1,
          "color": "rgba(49, 121, 245, 1)"
        }`;
      contariner.current.appendChild(script);
    },
    []
  );

  return (
    <>

      <div>

      </div>
      <div className="tradingview-widget-container" ref={contariner}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright"><a href="https://in.tradingview.com/" rel="noopener nofollow" target="_blank"></a></div>
      </div>
    </>
  );
}

export default memo(Twid);
