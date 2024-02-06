const http = require('http');

http
  .createServer(function (req, res) {
    res.end('<a href="https://www.haroldomayworm.com" target="_blank">Server on</a>');
  })
  .listen('3000');

console.log('Server on');
