global.fetch = require('node-fetch');
const cc = require('cryptocompare');

var ItemAction = function() {
    //get current price in ETH from fromCurrency value, could be user setting
    ToETH = function (fromCurrency) {
        cc.price('ETH', fromCurrency)
            .then(prices => {
            //Sample Item Price, might pass in ItemValue, or have this be part of the Item class so will see ItemPrice
            var ItemPrice = 100;

            //Might also need to convert item price for USD to whichever currency

        switch(fromCurrency) {

            case 'USD' :
                //Grab ETH price in USD, and Divide into ItemPrice
                var ETHPrice = prices.USD;
                var convertedPrice = ItemPrice / ETHPrice;
                console.log(convertedPrice);
                break;
            case 'EUR' :
                //Grab ETH price in EUR, and Divide into ItemPrice
                var ETHPrice = prices.EUR;
                var convertedPrice = ItemPrice / ETHPrice;
                console.log(convertedPrice);
                break;
            case 'GBP' :
                //Grab ETH price in EUR, and Divide into ItemPrice
                var ETHPrice = prices.GBP;
                var convertedPrice = ItemPrice / ETHPrice;
                console.log(convertedPrice);
                break;
            case 'JPY' :
                //Grab ETH price in JPY, and Divide into ItemPrice
                var ETHPrice = prices.JPY;
                var convertedPrice = ItemPrice / ETHPrice;
                console.log(convertedPrice);
                break;
            case 'KRW' :
                //Grab ETH price in KRW, and Divide into ItemPrice
                var ETHPrice = prices.KRW;
                var convertedPrice = ItemPrice / ETHPrice;
                console.log(convertedPrice);
                break;
        }
    })
        .catch(console.error);
    };

    return {
        ToETH: function(fromCurrency) {
            return ToETH(fromCurrency);
        }
    }
};
module.exports = ItemAction;
ItemAction = new ItemAction;
ItemAction.ToETH('USD');