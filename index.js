 require('dotenv').config();
const api = require('./api');

setInterval(async () =>  {

    const result = await api.depth();
    console.log('Binance Time (=', await api.time());
    console.log('Bitcoin price ', await api.depth());
    console.log('Higest Buy', );
    console.log('Bitcoin price ', await api.depth());

}, process.env.CRAWLER_INTERVAL);

//https://www.youtube.com/watch?v=JhU8aQRjDa8