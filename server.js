const express = require('express')
const server = express();

server.all('/', (req, res) => {
    res.send('El bot sigue encendido: https://linkfly.to/withgex');
});
 
module.exports = () => {
    server.listen(3000, () => {
        console.log('Servidor Listo: https://linkfly.to/withgex');
    });
    return true;
}