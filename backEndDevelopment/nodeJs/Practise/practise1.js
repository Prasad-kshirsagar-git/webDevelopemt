const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url=== "/home") {
    res.write('<h1> Welcome to Home Page </h1>');
    return res.end();
  } else if (req.url === "/men") {
    res.write('<h1> Welcome to Men Page </h1>');
    return res.end();
  } else if (req.url === "/women") {
    res.write('<h1> Welcome to Women Page </h1>');
    return res.end();
  } else if (req.url === "/kids") {
    res.write('<h1> Welcome to Kids Page </h1>');
    return res.end();
  }   

  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Myntra</title>
    </head>
    <body>
      <head>
        <nav>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/men">Men</a></li>
            <li><a href="/women">Women</a></li>
            <li><a href="/kids">Kids</a></li>
            <li><a href="/cart">🛒</a></li>
          </ul>
        </nav>
      </head>
      
    </body>
    </html>
  `);

  res.end();
});

const PORT = 8002;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
