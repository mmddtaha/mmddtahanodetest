const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write("Connected to the server");
  } else if (req.url === '/about') {
    res.write(JSON.stringify({name: "Taha", age: 17}))
  } else {
    res.write("404 not found");
  }
  res.end();
})
server.listen(3000);