const axios = require('axios');
const querystring = require('querystring');

async function publicCall(path,data, method = 'GET'){
    try {
        const qs = data ? `${querystring.stringify(data)}` : '';
        console.log(`${process.env.API_URL}${path}${qs}`);
        const result = await axios({
            method,
            url: `${process.env.API_URL}${path}${qs}`
        });
        return result.data
    } catch (error) {
        console.log(error);
    }
}

async function time(){
    return publicCall('/v3/time')
}

async function depth(symbol= 'BTCBRL', limit = 5){
    return publicCall('/v3/depth?', { symbol , limit})
}

module.exports = { time, depth };