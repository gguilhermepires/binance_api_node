const api = require('../../infrastructure/apiBinance');

const BinanceService = require('../../services/binanceService');

class Strategy01 {
    
    constructor() {
        this.moeda = '';
        this.compra = 241985;
        this.venda = 0;
        this.lucro = 0;
        this.historicoCompra = [];
        this.historicoVenda = [];
        this.historicoLucro = [];
        this.historicoMargem = [];
    }
    
    async comprar(moeda){
        var price = await BinanceService.getPrice('BTCBRL');
        this.historicoCompra.push(price);
        this.compra = price.buy;
    }

    async vender(moeda){
        console.log('VENDEU !!!!!!!!');
        var price = await BinanceService.getPrice(moeda);
        this.historicoVenda.push(price);
        this.venda = price.sell;
        comprar(moeda);

    }
    async log(price, margemLucro){
        var log = {
            compra:this.compra,
            venda: price.sell,
            compraMercado: price.buy,
            margemLucro,
            lucroReal: (price.sell - this.compra) 
        };
        this.historicoMargem.push(log);
    }
        async run2(){
            // console.log(await BinanceService.getAccountInfo('BRL'));
           // console.log(await BinanceService.newOrder('BTTBRL'));
           // console.log(await BinanceService.newOrder('BTTBRL'));
            console.log(await BinanceService.sellOrder('BTTBRL'));
        }
    async run() {
        this.historicoCompra = [];
        this.historicoVenda = [];
        this.historicoLucro = [];
        this.historicoMargem = [];
        this.moeda = 'BTCBRL';
        var price = await BinanceService.getPrice('BTCBRL');
        if(this.compra == 0){
            await this.comprar(this.moeda);
            return;
        }
        var margemLucro = (this.compra * 2)
        console.log('compra:',this.compra);
        console.log('mercado venda:',price.sell );
        console.log('venda esperada:',margemLucro);
        console.log('lucro:',price.sell - this.compra);
        console.log('\n');
        if(price.sell >= margemLucro ){
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*************** aeee bebe ***************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            console.log('*****************************************');
            await this.vender(this.moeda);
        }
        this.log(price, margemLucro);
    }
}

module.exports = Strategy01;

