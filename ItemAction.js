global.fetch = require('node-fetch');
const cc = require('cryptocompare');

var ItemAction = function() {
    //get current price in ETH from fromCurrency value, could be user setting
    ToETH = function (ItemPrice, fromCurrency) {
        cc.price('ETH', fromCurrency)
            .then(prices => {

        switch(fromCurrency) {

            case 'USD' :
                //Grab ETH price in USD, and Divide into ItemPrice
                var ETHPrice = prices.USD;
                var convertedPrice = ItemPrice / ETHPrice;
                return convertedPrice;
                break;
            case 'EUR' :
                //Grab ETH price in EUR, and Divide into ItemPrice
                var ETHPrice = prices.EUR;
                var convertedPrice = ItemPrice / ETHPrice;
                return convertedPrice;
                break;
            case 'GBP' :
                //Grab ETH price in EUR, and Divide into ItemPrice
                var ETHPrice = prices.GBP;
                var convertedPrice = ItemPrice / ETHPrice;
                return convertedPrice;
                break;
            case 'JPY' :
                //Grab ETH price in JPY, and Divide into ItemPrice
                var ETHPrice = prices.JPY;
                var convertedPrice = ItemPrice / ETHPrice;
                return convertedPrice;
                break;
            case 'KRW' :
                //Grab ETH price in KRW, and Divide into ItemPrice
                var ETHPrice = prices.KRW;
                var convertedPrice = ItemPrice / ETHPrice;
                return convertedPrice;
                break;
        }
    })
        .catch(console.error);
    };

    return {
        ToETH: function(ItemPrice, fromCurrency) {
            return ToETH(ItemPrice, fromCurrency);
        }
    }
};
module.exports = ItemAction;
//example call: ItemAction.ToEth(100, 'USD');
//returns Item Price in ETH