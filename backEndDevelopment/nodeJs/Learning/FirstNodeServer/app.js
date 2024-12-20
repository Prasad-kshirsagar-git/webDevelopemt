const http = require('http');

// function requestListener (req, res) {
//   console.log(req);
// }

// http.createServer(requestListener);

// http.createServer(function (req, res) {
//   console.log(req);
// });

const server = http.createServer((req, res) => {
  console.log(req);   // server return object
});

// server.listen(3000);    // 3000 is port number

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
