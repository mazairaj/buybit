var express = require('express');
var router = express.Router();

global.fetch = require('node-fetch');
const cc = require('cryptocompare');

router.get('/getExchange', function(req,res){
    //get current ratio of 'Currency' to ETH
        cc.price('ETH', req.body.currency)
            .then(prices => {
        switch(fromCurrency) {
            
            case 'USD' :
                //Grab ETH price in USD, and Divide into 1
                var ETHPrice = prices.USD;
                var ETHRatio = 1 / ETHPrice;
                res.send(ETHRatio);
                break;
            case 'EUR' :
                //Grab ETH price in EUR, and Divide into 1
                var ETHPrice = prices.EUR;
                var ETHRatio = 1 / ETHPrice;
                res.send(ETHRatio);
                break;
            case 'GBP' :
                //Grab ETH price in EUR, and Divide into 1
                var ETHPrice = prices.GBP;
                var ETHRatio = 1 / ETHPrice;
                res.send(ETHRatio);
                break;
            case 'JPY' :
                //Grab ETH price in JPY, and Divide into 1
                var ETHPrice = prices.JPY;
                var ETHRatio = 1 / ETHPrice;
                res.send(ETHRatio);
                break;
            case 'KRW' :
                //Grab ETH price in KRW, and Divide into 1
                var ETHPrice = prices.KRW;
                var ETHRatio = 1 / ETHPrice;
                res.send(ETHRatio);
                break;

            default:
                var ETHPrice = prices.USD;
                var ETHRatio = 1 / ETHPrice;
                res.send(ETHRatio);
                break;
        }
    })
        .catch(console.error);
});

module.exports = router;