const toUsd = new Intl.NumberFormat('ua', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
  });

  export default toUsd;