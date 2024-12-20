const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === '/') {

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>getInput</title></head>');
    res.write('<body><h1> Enter your details </h1>');

    res.write('<form action="/submit-details" method="POST">');
    
    res.write('<input type= "text" name="username" placeholder="Enter Your Name"/><br>');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/><br>');
    res.write('<input type="submit" value="Submit">');
    res.write('</form>');
    res.write('</body');
    res.write('</html>');
    return res.end();

  } else if(req.url.toLowerCase() === "/submit-details" && req. method === "POST"){
    fs.writeFileSync('user.txt', 'Prasad');
    res.statusCode = 302;   // redirection port (httpstatus post list)

    res.setHeader('Location', '/');

  } 
  else if (req.url === '/products') {

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> getInput</title></head>');
    res.write('<body><h1> Check out our Products</h1></body>');
    res.write('</html>');
    return res.end();

  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>getInput</title></head>');
  res.write('<body><h1>Default page</h1></body>');
  res.write('</html>');
  return res.end();

});

const PORT = 8002;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});