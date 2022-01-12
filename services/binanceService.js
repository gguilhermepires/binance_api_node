const api = require('../infrastructure/apiBinance');

class BinanceService {
    
    constructor() {
    }

    static async getPrice(coin) {
        const _time =  await api.time();
        const result = await api.depth();
        return {
            time:_time,
            buy: parseFloat(result.bids[0][0]) ,
            sell: parseFloat(result.asks[0][0]),
        };
    }
}

module.exports = BinanceService;

