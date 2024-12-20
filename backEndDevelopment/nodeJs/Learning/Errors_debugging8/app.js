const http = require('http');
const testingSyntax = require('./syntax');
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  testingSyntax();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});

