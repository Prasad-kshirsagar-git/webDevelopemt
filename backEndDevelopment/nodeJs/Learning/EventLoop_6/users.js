
const fs = require('fs');

const userRequestHandler = (req, res) => {
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

    // colect data from UI and stored into to the array; in the form of chunk(small part of data (bite))
    
    const body = [];
    req.on('data', chunk => {
      console.log(chunk);
      body.push(chunk);   
    });

    // all collecting the data into array then stored into the buffer and then convert into the string 
    
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      // passing the data to URLSearchParams object which to convert string form data into the key and value pairs.
      
      const bodyObject = new URLSearchParams(fullBody);
      // for(const [key, value] of URLSearchParams.entries()) {
      //   bodyObject[key] = value;
      // }

      const Object = Object.fromEntries(params);
      console.log(Object);

      // collected object of data to write in the file
      fs.writeFileSync('user.txt', JSON.stringify(Object));
    });

    
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

};

module.exports = userRequestHandler;
