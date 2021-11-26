const express = require('express')
const server = express();

server.all('/', (req, res) => {
    res.send('El bot sigue encendido: https://withgex.wixsite.com/tools');
    res.send('El bot sigue encendido: https://dsc.gg/gex');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor Listo: https://withgex.wixsite.com/tools/upmonitor');
    });
    return true;
}
