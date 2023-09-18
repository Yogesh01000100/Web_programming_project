import React, { useEffect, useRef } from 'react';

function Marquee() {
  const widgetRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cryptorank.io/widget/marquee.js';
    script.async = true;

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      if (widgetRef.current) {
        widgetRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={widgetRef}>
      <div
        id="cr-widget-marquee"
        data-coins="bitcoin,ethereum,tether,ripple,cardano"
        data-theme="light"
        data-show-symbol="true"
        data-show-icon="true"
        data-show-period-change="true"
        data-period-change="24H"
        data-api-url="https://api.cryptorank.io/v0"
      >
        <a href="https://cryptorank.io">Loading...</a>
      </div>
    </div>
  );
}

export default Marquee;
