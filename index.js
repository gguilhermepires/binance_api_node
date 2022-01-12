 require('dotenv').config();

const Strategy01 = require('./domain/strategies/stragegy01');

const estrategia = new Strategy01();
setInterval(async () =>  {
    await estrategia.run2();
}, process.env.CRAWLER_INTERVAL);

//https://www.youtube.com/watch?v=JhU8aQRjDa8