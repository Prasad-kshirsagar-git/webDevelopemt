const { sumRequestHandler } = require('./sum');

const requestHandler = (req , res) => {
  console.log(req.url, req.method);

  if(req.url === "/"){
    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <head><title>Calculator</title></head>
      <body>
        <h1> Home Page </h1>
        <a href = "/calculator">Go To Calculator</a>
      </body>
    </html>
    
    `);
    return res.end();
  } else if(req.url === "/calculator") {

    res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <head><title>Calculator</title></head>
      <body>
        <h1> Here is the Calculator</h1>
        <form action="/calculate-result" method="POST">
          <input type= "text" placeholder= "First Number" name= "first" />
          <input type= "text" placeholder= "Seconde Number" name= "second" />
          <input type="submit" value="Sum">
        </form>
      </body>
    </html>
    `);
  return res.end();

  } else if((req.url.toLowerCase() === "/calculate-result") && (req.method === "POST")) {
    return sumRequestHandler(req, res);
  }


  res.setHeader('Content-Type', 'text/html');
    res.write(`
    <html>
      <head><title>Calculator</title></head>
      <body>
        <h1> 404 Page Dones not Exist</h1>
        <a href = "/">Go To home</a>
      </body>
    </html>
    `);
  return res.end();
}

// module.exports = requestHandler;
exports.requestHandler = requestHandler;